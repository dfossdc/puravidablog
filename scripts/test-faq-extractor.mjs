// Sanity-check the FAQ extractor against every post in content/posts.
// Reports: how many posts have FAQs, how many Q&As per post, any anomalies.

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Inline copy of extractFaqs (keep in sync with src/lib/posts.ts).
function extractFaqs(markdown) {
  const FAQ_HEADING_RE = /^##\s+(Frequently Asked Questions|Preguntas Frecuentes|FAQ)\b/i;
  const NEXT_H2_RE = /^##\s+/;
  const Q_RE = /^\*\*(.+?)\*\*\s*$/;

  const lines = markdown.split(/\r?\n/);
  const items = [];
  let inFaqSection = false;
  let currentQuestion = null;
  let answerLines = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = answerLines.join(" ").replace(/\s+/g, " ").trim();
      if (answer) items.push({ question: currentQuestion.trim(), answer });
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (FAQ_HEADING_RE.test(line)) { inFaqSection = true; continue; }
    if (!inFaqSection) continue;
    if (NEXT_H2_RE.test(line)) { flush(); inFaqSection = false; continue; }
    const qMatch = line.match(Q_RE);
    if (qMatch) { flush(); currentQuestion = qMatch[1]; continue; }
    if (currentQuestion) {
      if (line.trim() === "") { if (answerLines.length > 0) flush(); }
      else answerLines.push(line.trim());
    }
  }
  flush();
  return items;
}

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

const stats = {
  totalPosts: 0,
  postsWithFaqs: 0,
  postsWithFaqHeadingButNoExtracted: [],
  totalQAs: 0,
  qasPerPostHistogram: {},
  postsByLang: { en: 0, es: 0, other: 0 },
  withFaqsByLang: { en: 0, es: 0, other: 0 },
  shortAnswers: [], // < 30 chars — likely a parsing error
  shortQuestions: [], // < 5 chars
};

const FAQ_HEADING_RE = /^##\s+(Frequently Asked Questions|Preguntas Frecuentes|FAQ)\b/im;

for (const file of files) {
  const fullPath = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  const lang = data.lang === "es" ? "es" : data.lang === "en" ? "en" : "other";
  stats.totalPosts++;
  stats.postsByLang[lang]++;

  const hasHeading = FAQ_HEADING_RE.test(content);
  const faqs = extractFaqs(content);

  if (faqs.length > 0) {
    stats.postsWithFaqs++;
    stats.withFaqsByLang[lang]++;
    stats.totalQAs += faqs.length;
    const bucket = String(faqs.length);
    stats.qasPerPostHistogram[bucket] = (stats.qasPerPostHistogram[bucket] || 0) + 1;

    for (const { question, answer } of faqs) {
      if (answer.length < 30) stats.shortAnswers.push({ file, question, answer });
      if (question.length < 5) stats.shortQuestions.push({ file, question });
    }
  } else if (hasHeading) {
    stats.postsWithFaqHeadingButNoExtracted.push(file);
  }
}

console.log("=== FAQ extractor sanity check ===");
console.log(`Total posts:               ${stats.totalPosts}`);
console.log(`Posts by lang:             en=${stats.postsByLang.en} es=${stats.postsByLang.es} other=${stats.postsByLang.other}`);
console.log(`Posts with extracted FAQs: ${stats.postsWithFaqs}`);
console.log(`  by lang:                 en=${stats.withFaqsByLang.en} es=${stats.withFaqsByLang.es} other=${stats.withFaqsByLang.other}`);
console.log(`Total Q&As extracted:      ${stats.totalQAs}`);
console.log(`Avg Q&As per FAQ post:     ${(stats.totalQAs / stats.postsWithFaqs).toFixed(2)}`);
console.log(`Q&As-per-post histogram:   ${JSON.stringify(stats.qasPerPostHistogram)}`);
console.log("");
console.log(`Posts with FAQ heading but ZERO extracted (BUG?): ${stats.postsWithFaqHeadingButNoExtracted.length}`);
for (const f of stats.postsWithFaqHeadingButNoExtracted.slice(0, 5)) console.log(`  - ${f}`);
console.log("");
console.log(`Suspiciously short answers (< 30 chars): ${stats.shortAnswers.length}`);
for (const item of stats.shortAnswers.slice(0, 5)) {
  console.log(`  - ${item.file}`);
  console.log(`    Q: ${item.question}`);
  console.log(`    A: ${item.answer}`);
}
console.log("");
console.log(`Suspiciously short questions (< 5 chars): ${stats.shortQuestions.length}`);
for (const item of stats.shortQuestions.slice(0, 5)) console.log(`  - ${item.file}: "${item.question}"`);

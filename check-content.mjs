import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const lessonSource = read('content/lessons.ts');
const testSource = read('content/test.ts');
const keySource = read('content/private-answer-key.ts');

const extraStart = lessonSource.indexOf('const EXTRA_TOPICS = {');
const generatedStart = lessonSource.indexOf('const generatedLessons:', extraStart);
if (extraStart < 0 || generatedStart < 0) throw new Error('Could not locate lesson topic data.');

const authoredSource = lessonSource.slice(0, extraStart);
const extraSource = lessonSource.slice(extraStart, generatedStart);
const authoredSlugs = [...authoredSource.matchAll(/slug:'([^']+)'/g)].map((m) => m[1]);
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const expectedLevels = ['A1', 'A2', 'B1', 'B2', 'C1'];
const allSlugs = [...authoredSlugs];
const distribution = {};

for (const level of expectedLevels) {
  const match = extraSource.match(new RegExp(`"${level}"\\s*:\\s*\\[([\\s\\S]*?)\\n  \\]`, 'm'));
  if (!match) throw new Error(`Missing generated topics for ${level}.`);
  const tupleLines = match[1].match(/^\s*\[\s*"([^"]+)"\s*,\s*"(?:Grammar|Vocabulary|Reading|Writing|Speaking|Listening)"\s*,\s*"[^"]+"\s*,\s*"[^"]+"\s*\],?$/gm) || [];
  if (tupleLines.length !== 22) throw new Error(`${level} must contain 22 generated topics; found ${tupleLines.length}.`);
  distribution[level] = tupleLines.length;
  for (const line of tupleLines) {
    const title = line.match(/^\s*\[\s*"([^"]+)"/)[1];
    allSlugs.push(`${level.toLowerCase()}-${slugify(title)}`);
  }
}

if (authoredSlugs.length !== 40) throw new Error(`Expected 40 hand-authored lessons; found ${authoredSlugs.length}.`);
if (new Set(allSlugs).size !== 150) throw new Error(`Expected 150 unique lesson slugs; found ${new Set(allSlugs).size}.`);

const questionMatches = [...testSource.matchAll(/\{id:'([^']+)',skill:'(grammar|vocabulary|reading|listening|writing|speaking)',type:'(choice|writing|speaking)'/g)];
if (questionMatches.length !== 40) throw new Error(`Expected 40 assessment tasks; found ${questionMatches.length}.`);
if (new Set(questionMatches.map((m) => m[1])).size !== 40) throw new Error('Assessment question IDs must be unique.');
const skillCounts = Object.fromEntries(expectedLevels.length ? ['grammar','vocabulary','reading','listening','writing','speaking'].map((skill) => [skill, questionMatches.filter((m) => m[2] === skill).length]) : []);
const expectedSkills = { grammar: 8, vocabulary: 6, reading: 7, listening: 7, writing: 6, speaking: 6 };
for (const [skill, count] of Object.entries(expectedSkills)) {
  if (skillCounts[skill] !== count) throw new Error(`${skill}: expected ${count}, found ${skillCounts[skill]}.`);
}

const questionIds = questionMatches.filter((m) => m[3] === 'choice').map((m) => m[1]);
const keyBlock = keySource.match(/export const answerKey: Record<string, number> = \{([\s\S]*?)\};/);
if (!keyBlock) throw new Error('Could not read private answer key.');
const answerEntries = [...keyBlock[1].matchAll(/([A-Z]\d+)\s*:\s*(\d+)/g)];
const answerIds = answerEntries.map((m) => m[1]);
for (const entry of answerEntries) if (Number(entry[2]) < 0 || Number(entry[2]) > 3) throw new Error(`Invalid answer index for ${entry[1]}.`);
if (answerIds.length !== 28 || new Set(answerIds).size !== answerIds.length) throw new Error('Answer key must contain 28 unique objective answers.');
for (const id of questionIds) if (!answerIds.includes(id)) throw new Error(`Missing private answer key for ${id}.`);
for (const id of answerIds) if (!questionIds.includes(id)) throw new Error(`Answer key contains unknown question ${id}.`);
if (!keySource.includes("import 'server-only'")) throw new Error('Private answer key must be server-only.');

console.log('CONTENT CHECK PASSED');
console.log(`Lessons: ${allSlugs.length} total (${authoredSlugs.length} detailed authored + 110 generated topic drafts).`);
console.log(`Level distribution: ${expectedLevels.map((level) => `${level}=30`).join(', ')}.`);
console.log(`Assessment: ${questionMatches.length} tasks (${Object.entries(skillCounts).map(([key, value]) => `${key}=${value}`).join(', ')}).`);
console.log(`Private answer key: ${answerIds.length} objective answers; every ID matched.`);

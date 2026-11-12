import { mkdir, readFile, writeFile } from "node:fs/promises";
import { marked } from "marked";

const [markdown, styles] = await Promise.all([
  readFile("resume.md", "utf8"),
  readFile("style.css", "utf8"),
]);

const content = marked.parse(markdown);

// GitHub Actions 會提供 GITHUB_SHA 與 GITHUB_REPOSITORY；本機建置時沒有，就只顯示日期。
const updated = new Intl.DateTimeFormat("zh-TW", {
  timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit",
}).format(new Date());
const { GITHUB_SHA: sha, GITHUB_REPOSITORY: repo } = process.env;
const source = sha && repo
  ? ` · GitHub Actions 建置自 <a href="https://github.com/${repo}/commit/${sha}">${sha.slice(0, 7)}</a>`
  : " · 本機建置";

const page = `<!doctype html>
<html lang="zh-Hant-TW">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>羅智加(Wyden)｜個人履歷</title>
  <style>${styles}</style>
</head>
<body>
  <main>${content}</main>
  <footer><p>最後更新 ${updated}${source}</p></footer>
</body>
</html>`;

await mkdir("dist", { recursive: true });
await writeFile("dist/index.html", page, "utf8");

# 羅智加(Wyden)

軟體工程開發

產線設備測試開始寫程式，用 Python 把讀碼器測試自動化。2025 年 9 月起擔任軟體工程師，先將扣料、完工入庫等作業寫成 Ragic 自動化流程，後來獨立負責生產報工與物料需求規劃（MRP）兩套 內部Web 系統，從設計、開發到部署與維護。

<p class="links">
  <a href="https://github.com/moonking60144-collab">GitHub · moonking60144-collab</a> ·
  <a href="mailto:moonking60144@gmail.com">moonking60144@gmail.com</a>
</p>

## 工作專案

<article class="work-report" aria-labelledby="report-title">
  <h3 id="report-title">生產報工 Web 系統 <span class="when">2026.02 – 迄今</span></h3>
  <p class="stack">React · TypeScript · Express · SQLite · SSE</p>
  <p>我把常用的工令查詢移到 SQLite，讓現場查列表時，不必每次都等 Ragic 回應。</p>
  <section aria-labelledby="sync-title">
    <h4 id="sync-title">背景同步時，現場仍能查工令</h4>
    <table class="sync-timeline" aria-labelledby="sync-title">
      <colgroup><col class="lane-label"><col><col><col></colgroup>
      <tbody>
        <tr class="sync-steps"><th scope="row">背景同步</th><td>建立新版</td><td>補齊期間異動</td><td>切換版本</td></tr>
        <tr class="sync-reads"><th scope="row">現場查詢</th><td colspan="2">讀取上一個完整版本</td><td>讀取新版</td></tr>
      </tbody>
    </table>
  </section>
  <section aria-labelledby="formula-title">
    <h4 id="formula-title">跨表單公式轉換 <small>.nui 原始格式 · 示範資料</small></h4>
    <div class="nui-example">
      <p>一行欄位定義依序是「種類、欄、列、欄位 ID、名稱、屬性」</p>
      <dl class="nui-records">
        <dt>來源表</dt><dd><code>D,1,6,<b>1001</b>,規格,text=1</code><span>第 1 欄、第 6 列 → <strong>A6</strong></span></dd>
        <dt>目標表</dt><dd><code>D,3,3,<b>1001</b>,規格,text=1</code><span>第 3 欄、第 3 列 → <strong>C3</strong></span></dd>
      </dl>
    </div>
    <p>兩張表的「規格」都有欄位 ID <b class="field-id">1001</b>，所以公式在目標表要改用 C3。</p>
    <div class="formula-comparison">
      <div><span>原公式</span><code>IF(<mark>A6</mark>="A6","x","y")</code></div>
      <span class="formula-arrow" aria-hidden="true">→</span>
      <div><span>轉換後</span><code>IF(<mark>C3</mark>="A6","x","y")</code></div>
    </div>
    <p class="formula-note">引號裡的 "A6" 是文字，保留原樣。</p>
    <details><summary>如果目標表出現兩個候選座標</summary>
      <p>例如欄位 ID 1001 同時出現在 C3 和 E3，光靠 ID 就無法判斷公式該指向哪一格。工具會列出這兩個座標，交由開發者確認，再決定如何改寫。</p>
    </details>
  </section>
</article>

**會議錄音**　因應會議紀錄需求，我讓長錄音優先在停頓處切段辨識。若切點附近持續有人說話，就在音量最低處切開，並在逐字稿標記該處供回聽。

**企業知識問答（RAG）**　我在檢索時提高連續中文詞組的權重，再用字詞相近、作業規則不同的文件，逐題檢查模型有沒有拿到回答所需的原文。

### 物料需求規劃（MRP） <span class="when">2026.05 – 迄今</span>

<p class="stack">Next.js · TypeScript · Prisma · PostgreSQL</p>

原本在 Ragic 執行的需求計算改寫成獨立服務，用同一批訂單、庫存與工令資料，推算每月的成品需求與每週的零件需求。

**歸屬不明的料**　其中一個難題是批號已轉到下一張工令，前一張卻還沒結清。遇到這種情況，我讓系統保留「待查」狀態，交由人員核對，避免把歸屬不明的數量當成已保留的料。

## 公開作品

### [Command Atlas](https://moonking60144-collab.github.io/command-cheatsheet/)

我把平常會查的指令整理成速查網站。像是想看 Git 分支從哪裡分開、又在哪裡合併，可以直接找到對應指令與用途。[查看原始碼](https://github.com/moonking60144-collab/command-cheatsheet)

## 學歷

健行科技大學資訊管理學系 · 二技假日班，2025 年 9 月入學，預計 2027 年 6 月畢業。

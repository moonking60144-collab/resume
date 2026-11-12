# 羅智加(Wyden)

軟體工程開發

產線設備測試開始寫程式，用 Python 把讀碼器測試自動化。2025 年 9 月起擔任軟體工程師，先將扣料、完工入庫等作業寫成 Ragic 自動化流程，後來獨立負責生產報工與物料需求規劃（MRP）兩套 內部Web 系統，從設計、開發到部署與維護。

<p class="links">
  <a href="https://github.com/moonking60144-collab">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    GitHub · moonking60144-collab
  </a>
  <a href="https://leetcode.com/u/lqnIBxO4ep/">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
    LeetCode
  </a>
  <a href="mailto:moonking60144@gmail.com">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4.5" width="20" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></svg>
    moonking60144@gmail.com
  </a>
</p>

<h2 id="experience">工作經驗</h2>

<dl class="experience">
  <dt class="when"><time datetime="2025-09">2025.09</time> – 迄今</dt>
  <dd>
    <strong>軟體工程師</strong>
    <span>宏得螺絲工業股份有限公司</span>
    <ul>
      <li>依生產與倉儲需求撰寫 Ragic 工作流程，將耗用扣料、完工入庫等手動作業自動化，並開發料號版本管理與核價流程。</li>
      <li>獨立設計、開發、部署及維護生產報工與 MRP 系統。現場人員可依工令查詢及修正報工明細，生管可從 MRP 查閱工令、採購與領退料紀錄，追查缺料原因。</li>
    </ul>
  </dd>
  <dt class="when"><time datetime="2025-06">2025.06</time> – <time datetime="2025-08">2025.08</time></dt>
  <dd>
    <strong>助理工程師</strong>
    <span>弘馳科技有限公司</span>
    <ul>
      <li>設定產線讀碼器參數、排除設備異常，並以 Python 撰寫測試腳本，讓讀碼測試可重複執行。</li>
      <li>建置公司英文官網，負責前端開發與內容維護。另維護公司電腦與伺服器，建置信箱備份機制。</li>
    </ul>
  </dd>
</dl>

## 工作專案

<article class="work-report" aria-labelledby="report-title">
  <h3 id="report-title">生產報工 Web 系統 <span class="when">2026.02 – 迄今</span></h3>
  <p class="stack">React · TypeScript · Express · SQLite · SSE</p>
  <p>現場查詢工令列表時，直接讀取已同步到 SQLite 的資料，省去等待 Ragic 回應的時間。</p>
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

**會議錄音**　長錄音優先在語音停頓處切段，再逐段辨識。若切點附近持續有人說話，系統會在音量最低處切開，並在逐字稿標記該處，方便回聽。

**企業知識問答（RAG）**　檢索時提高連續中文詞組的權重。測試選用字詞相近但作業規則不同的文件，逐題核對檢索結果是否包含回答所需的原文。

### 物料需求規劃（MRP） <span class="when">2026.05 – 迄今</span>

<p class="stack">Next.js · TypeScript · Prisma · PostgreSQL</p>

原本在 Ragic 執行的需求計算改寫成獨立服務，用同一批訂單、庫存與工令資料，推算每月的成品需求與每週的零件需求。

**歸屬不明的料**　批號已轉到下一張工令、前一張工令仍未結清時，系統將該批號標為「待查」，交由人員核對。確認歸屬前，該批數量不計入已保留量。

## 公開作品

### [Command Atlas](https://moonking60144-collab.github.io/command-cheatsheet/)

常用指令速查網站，可依操作需求查找指令與用途，例如查看 Git 分支的分岔與合併紀錄。[查看原始碼](https://github.com/moonking60144-collab/command-cheatsheet)

## 學歷

健行科技大學資訊管理學系 · 二技假日班，2025 年 9 月入學，預計 2027 年 6 月畢業。

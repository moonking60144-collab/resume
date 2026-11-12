# Wyden

軟體工程開發

產線設備測試開始寫程式，用 Python 把讀碼器測試自動化。2025 年 9 月起擔任軟體工程師，先將扣料、完工入庫等作業寫成 Ragic 自動化流程，後來獨立負責生產報工與物料需求規劃（MRP）兩套 內部Web 系統，從設計、開發到部署與維護。

<p class="links">
  <a href="https://github.com/moonking60144-collab">GitHub · moonking60144-collab</a> ·
  <a href="mailto:moonking60144@gmail.com">moonking60144@gmail.com</a>
</p>

## 工作專案

### 生產報工 Web 系統 <span class="when">2026.02 – 迄今</span>

<p class="stack">React · TypeScript · Express · SQLite · SSE</p>

現場原本直接在 Ragic 報工，查詢工令時常得等畫面載入。我把常用查詢移到 SQLite，讓現場人員查列表時，不必每次都等 Ragic 回應。

**同步不中斷**　同步期間，使用者可以繼續查上一版資料。新版本寫完並補上期間的異動後才切換，避免畫面讀到只更新一半的工令。

**開發者工具 · 跨表單公式轉換**　同一個欄位在不同表單可能排在不同位置。我解析 Ragic 的表單設計檔（`.nui`），依欄位 ID 換算公式引用的座標，引號內的文字則照原樣保留。

| 欄位對應 | 公式或處理結果 |
| --- | --- |
| 來源表單 | `IF(A6="A6","x","y")` |
| 欄位從 `A6` 移到 `C3` | `IF(C3="A6","x","y")` |
| 同一欄位對應到多格 | 列出候選座標，由開發者確認 |

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

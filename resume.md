# Wyden

製造業資訊系統開發

我從商管背景走進軟體開發，在製造現場獨立負責生產報工與物料需求規劃（MRP）兩套 Web 系統，從設計、前後端開發到部署與維護。

<p class="links"><a href="https://github.com/moonking60144-collab">GitHub · moonking60144-collab</a></p>

## 工作專案

### 生產報工 Web 系統 <span class="when">2026.02 – 迄今</span>

<p class="stack">React · TypeScript · Express · SQLite · SSE</p>

現場原本直接在 Ragic 報工，查詢工令時常得等畫面載入。我把常用查詢移到 SQLite，讓現場人員查列表時，不必每次都等 Ragic 回應。

**同步不中斷**　同步期間，使用者可以繼續查上一版資料。新版本寫完並補上期間的異動後才切換，避免畫面讀到只更新一半的工令。

### 物料需求規劃（MRP） <span class="when">2026.05 – 迄今</span>

<p class="stack">Next.js · TypeScript · Prisma · PostgreSQL</p>

我把原本在 Ragic 執行的需求計算改寫成獨立服務，用同一批訂單、庫存與工令資料，推算每月的成品需求與每週的零件需求。

**歸屬不明的料**　其中一個難題是批號已轉到下一張工令，前一張卻還沒結清。遇到這種情況，我讓系統保留「待查」狀態，交由人員核對，避免把歸屬不明的數量當成已保留的料。

## 公開作品

### [Command Atlas](https://moonking60144-collab.github.io/command-cheatsheet/)

我把平常會查的指令整理成速查網站。像是想看 Git 分支從哪裡分開、又在哪裡合併，可以直接找到對應指令與用途。[查看原始碼](https://github.com/moonking60144-collab/command-cheatsheet)

## 學歷

健行科技大學 · 二技資訊管理系，在學中

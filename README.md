# 婚禮 Dress Code 網站

給婚禮賓客瀏覽穿搭建議的靜態網頁，依「男賓客／女賓客」切換內容，每個身份再分成「藍色系」「粉色系」兩個穿搭範例區塊。

## 檔案結構

```
index.html            # 唯一頁面，內含首頁文字與男/女兩個分頁籤內容
css/style.css          # 手繪風／紙感樣式、RWD 版面
js/main.js             # 男賓客／女賓客 按鈕切換邏輯
images/
  male/blue/01.svg ~ 03.svg    # 男賓客・藍色系 範例圖（目前為佔位圖）
  male/pink/01.svg ~ 03.svg    # 男賓客・粉色系 範例圖（目前為佔位圖）
  female/blue/01.svg ~ 03.svg  # 女賓客・藍色系 範例圖（目前為佔位圖）
  female/pink/01.svg ~ 03.svg  # 女賓客・粉色系 範例圖（目前為佔位圖）
```

## 之後要換成真實內容時

1. **替換圖片**：直接用你的真實 dress code 照片覆蓋 `images/` 對應資料夾中的同名檔案即可（例如把 `images/male/blue/01.svg` 換成你的 `01.jpg` 或 `01.png`，並同步修改 `index.html` 裡對應的 `<img src="...">` 副檔名）。如果每個分類的圖片數量不同，可自行增減 `index.html` 中的 `<figure class="gallery-item">` 區塊，格式都相同，複製貼上修改編號即可。
2. **修改首頁文字**：打開 `index.html`，找到 `<header class="site-header">` 區塊，把「新人姓名」「婚禮日期：2026 / 00 / 00」等文字換成實際內容。
3. **插畫素材**：若之後有手繪插畫圖檔，可以放進一個新的 `images/illustrations/` 資料夾，再依需求加到頁首、頁尾或按鈕旁作為裝飾（可以再請我協助排版）。

## 本機預覽

用瀏覽器直接開啟 `index.html` 即可預覽（不需要伺服器）。若圖片或字型未正常顯示，也可以用簡易的本機伺服器：

```powershell
# 在專案資料夾下執行
python -m http.server 8080
# 瀏覽器開啟 http://localhost:8080
```

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的 repository（例如 `dress-code`）。
2. 將這個資料夾 push 上去：
   ```powershell
   git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
   git branch -M main
   git push -u origin main
   ```
3. 到 repo 的 **Settings → Pages**，「Build and deployment」的 Source 選擇 `Deploy from a branch`，Branch 選 `main` / `/(root)`，儲存。
4. 等待幾分鐘後，即可透過 `https://<你的帳號>.github.io/<repo名稱>/` 瀏覽網站。

網站本身已用 CSS（Flexbox/Grid + media queries）處理響應式版面，手機、平板、桌機皆可正常顯示，GitHub Pages 只負責託管靜態檔案，不需要額外設定。

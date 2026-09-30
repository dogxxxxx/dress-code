# 婚禮 Dress Code 網頁

分類為男賓客、女賓客（褲裝／裙裝）、合照。

| 類別 | 圖片資料夾 |
| --- | --- |
| 男賓客 | `images/male/` |
| 女賓客・褲裝 | `images/female/pants/` |
| 女賓客・裙裝 | `images/female/skirts/` |
| 合照 | `images/group/` |

照片直接放入對應資料夾，不要再建立子資料夾。支援 JPG、JPEG、PNG、WebP、AVIF、GIF、SVG。HEIC 請先轉成 JPG。建議依序命名 `01.jpg`、`02.jpg`，可用任意檔名，依檔名排序，數量不限。

放入、移除或重新命名照片後，在專案資料夾執行：

```powershell
python scripts/update_photos.py
```

指令更新 `js/photos.js`。靜態網頁無法自行列出資料夾內容，因此放圖後需更新清單，也可以請我協助。部署時一併上傳圖片與清單。

原本的 male/blue、male/pink、female/blue、female/pink 示意圖保留，但不在新版顯示。

直接用瀏覽器開啟 `index.html` 即可預覽。

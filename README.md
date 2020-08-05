# Ｍiddleware 實作練習

## Q1: 記錄伺服器接收請求記錄，格式如下：
- 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 請求的 HTTP 方法
- URL

```
範例：
2019-5-17 18:51:12 | GET from / 
```

## Q2: 伺服器回應的時間

記錄兩次時間戳記 (time-stamps)，分別為：
- 伺服器收到請求的時間戳記，如 2019-5-17 18:51:12
- 伺服器送出回應的時間，2019-5-17 18:59:23
- 最後把兩個時間相減，輸出成「total time: 8ms」的形式

```
範例：
2019-5-17 18:51:12 | GET from / | total time: 8ms
```


## 環境建置與需求
- Node.js v10.15.0
- Express v4.17.1

## 安裝與執行步驟
- 下載專案到本機
```
git clone https://github.com/ShinTingTsai/Middleware.git
```
- 切至專案資料夾
```
cd Middleware
```
- 安裝套件
```
npm install
```
- 開啟程式
```
npm run dev
```
- 請至http://localhost:3000開始使用程式


## 開發人員
Shin-Ting Tsai

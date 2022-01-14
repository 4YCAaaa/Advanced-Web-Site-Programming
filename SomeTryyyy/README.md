# 網站設計進階

XAMPP 是一個可以簡單整合 Apache、PHP、Perl 與 MariaDB的軟體包，透過 XAMPP 就可以稍微方便一些的架站。
![](https://i.imgur.com/I4eJ76g.png)

設定環境參數與建立Apache連結(不知道為什麼很容易出問題QQ
![](https://i.imgur.com/FD8PG6B.png)

通過access.log確認GET&POST
![](https://i.imgur.com/74qBmuj.png)

mysql_error.log去檢索資料是否有成功抓回資料庫做比對
![](https://i.imgur.com/F6YIdFU.png)

phpmyadmin設定
![](https://i.imgur.com/B2wrzIV.png)


建立資料庫與資料表

![](https://i.imgur.com/o3i8K8E.png)

![](https://i.imgur.com/uG2kp9O.png)

![](https://i.imgur.com/wu99H5z.png)


透過w3schools去學習練習PHP
![](https://i.imgur.com/ePCJM1D.png)

---

網頁模板大多參考自 [w3schools.default.asp](https://www.w3schools.com/default.asp)，再更改部分程式碼與修改美編。Contact頁面排版理念參考自 [Templated.co](https://templated.co/p/4078153616677877)，Life與Login頁面是基於[css3+html页面](https://blog.csdn.net/weixin_45748460/article/details/106286100?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-1&spm=1001.2101.3001.4242) 與 [CSS3界面](https://blog.csdn.net/jl244981288/article/details/47126409?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_utm_term-0&spm=1001.2101.3001.4242) 的程式碼去做整體的修改，前者讓原本在按鈕邊的動畫改成在背景移動，後者只有留下背景動畫，其餘元件(包含背景動畫的位置)皆有所更改。在Animals介面，有使用程式碼 [布局和排版教程](http://www.uxys.com/html/CSS3/20141017/21427.html) 做修改實現三角形排列圖片做出選單區塊，再做美工與排版。

# 有先看過各網站的授權，但若仍有冒犯，深感抱歉，請告知我，我會將其撤下。

期中後想嘗試新的架站方式，所以在老師所教授的課程內容外，嘗試使用XAMPP去做架站，並在期末的時候第一次嘗試使用PHP去作呈現，參考了 [實作簡單登入系統](https://medium.com/@kuoandy1/%E5%BE%8C%E7%AB%AF%E8%83%BD%E5%8A%9B%E5%9F%B9%E9%A4%8A-%E4%B8%80-%E5%AF%A6%E4%BD%9C%E7%B0%A1%E5%96%AE%E7%99%BB%E5%85%A5%E7%B3%BB%E7%B5%B1-74c22ebf09b6) 的製作邏輯思路與[PHP 語法、資料庫 MySQL](https://hackmd.io/@Heidi-Liu/note-be101-php-and-mysql) 經驗參考後，將上學期的程式碼整理，並延伸新增了登入與登出的功能。除了登入與登出有成功使用PHP實做出來並應用外，有更進一步的嘗試使用PHP去製作待辦清單，以下是我目前的完成狀態:

![](https://i.imgur.com/UgIxHs6.png)

原先規劃是上方為帳號的登出與刪除，中間為歡迎使用者(會依據不同帳號做顯示)，左方為輸入待辦事項與顯示已輸入處，右方則是該月份的日期，目前的進度是可註冊新使用者登入與刪除使用者並輸入待辦事項，最終的目標是複合型的行事曆與待辦事項的互動網頁。

後來參考 [使用 XAMPP 和 ngrok 的臨時虛擬主機](https://medium.com/front-end-weekly/temporary-web-hosting-using-xampp-and-ngrok-86a28d0a1073) 的步驟下載 [ngrok](https://ngrok.com/download) 並建立連線 [期末報告](https://8c28-2001-b400-e781-b466-7c63-12c1-ffeb-f50e.ngrok.io/login.php) 的對外連接。

總覺得低估了這學期專題使用課餘的時間度，稍微跨越過初學入門的門檻之後，進階的坎需要花更多的時間去釐清跟掌握，同時學習許多新的進階技術(硬體、網頁)，讓我有點吃不消，上課時理解範例程式與老師的授課內容，但實際上想試用類似觀念去解決實作成果卻不能總是如願解決問題，不過，也因為挑戰了自己，使用課外的XAMPP與PHP去做期末成果的呈現，讓我知道哪部分的後端觀念有所缺失或之前的理解有所誤解，也對前端的掌握度更高一些，這學期雖然很累，但收穫卻異常的比原先更多。






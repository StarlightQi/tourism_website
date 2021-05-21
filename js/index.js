
var dancheng="  <ul>\n" +
    "<li>出发点：&emsp;<input type=\"text\"></li>\n" +
    "<li>到达地：&emsp;<input type=\"text\"></li>\n" +
    "<li>出发日期：<input type=\"date\"></li>\n" +
    "<li><a href=\"JavaScript:void(0)\">查询</a></li>\n" +
    "        </ul>"; //单程的页面代码


var fancheng="<ul>\n" +
    "  <li>出发点：&emsp;<input type=\"text\"></li>\n" +
    "  <li>到达地：&emsp;<input type=\"text\"></li>\n" +
    "  <li>出发日期：<input type=\"date\"></li>\n" +
    "  <li>返程日期：<input type=\"date\"></li>\n" +
    "  <li><a href=\"JavaScript:void(0)\">查询</a></li>\n" +
    " </ul>"; //返程的页面代码
var huancheng="  <ul>\n" +
    "  <li>出发点：&emsp;<input type=\"text\"></li>\n" +
    "  <li>到达地：&emsp;<input type=\"text\"></li>\n" +
    "  <li>乘车日期：<input type=\"date\"></li>\n" +
    "  <li><a href=\"JavaScript:void(0)\">查询</a></li>\n" +
    " </ul>"; //换乘的页面代码
var tuiqian=" <ul>\n" +
    "  <li>查询类型：<input type=\"radio\" name=\"d\" id=\"dr\"> <label for=\"dr\">订票日期</label> \n" +
    "      <input type=\"radio\" name=\"d\" id=\"cr\"><label for=\"cr\">乘车日期</label></li>\n" +
    "  <li>开始日期：<input type=\"date\"></li>\n" +
    "  <li>结束日期：<input type=\"date\"></li>\n" +
    "  <li>关键字：<input type=\"text\"></li>\n" +
    "  <li><a href=\"JavaScript:void(0)\">查询</a></li>\n" +
    " </ul>"; // 退签的页面代码

infoCar=document.getElementById("info-car");
infoCar.innerHTML=dancheng;

// 点击单程后厨房
var lis = document.querySelectorAll('.search-ul li');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
        for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
        }
        this.className = 'choose';
        var index = this.getAttribute('index'); // 用于判断当前点到哪个东西
        console.log(index);
        switch (index) {
            case "0":
                infoCar.innerHTML=dancheng;
                break;
            case "1":
                infoCar.innerHTML=fancheng;
                break;
            case "2":
                infoCar.innerHTML=huancheng;
                break;
            case "3":
                infoCar.innerHTML=tuiqian;
                break;
            default:
                infoCar.innerHTML=dancheng;
                break;
        }

    }
}

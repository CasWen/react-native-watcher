var a;
a=5;
// alert("a的值为："+a);

var num1 =10;
var num2 =20;

num2--;
num1++;
document.write("num1为："+num1);
document.write("num2为："+num2);


var numa,numb;
numa =60;
numb =70;
if (numa>=60&&numb>=60){
    document.write("<br>"+"考试通过!");
}

var numa,numb,jq1;
numa=50;
numb=55;
jq1= numa>numb||numb>numa;
document.write("<br/>"+"jq1的值是:"+jq1+"<br>");


var a,b,sum;
var  a  = 5;
var  b  = 100%7;
sum = a > b && a*b > 0 ;
document.write( "我认为 a 的值是:" + 5  + " b的值是:" + 2 + "sum 的值是:" + true +"<br/>");
document.write( "答案是,第一轮计算后，a 为："+ a +";b为："+b +";第一次计算sum为："+ sum +"<br/>");


sum = ( (++a) + 3 ) / (2 - (--b) ) * 3;
document.write( "再一次计算后，我认为 a 的值是:" +  5  + " b的值是:" +  2 + "sum 的值是:" +  3 +"<br/>");
document.write( "答案是，第二轮计算后，a 为：" + a + ";b为：" + b +";第二次计算sum为："+ sum +",sum的类型也发生变化了。");


var array = new Array();
array[0]=10;
array[1]=20;
array[2]=30;
document.write("<br/>"+"三个人的成绩分别为:"+array[0]+";"+array[1]+";"+array[2]);


var mynum =8;
do {
    document.write("<br>"+"数字"+mynum+"<br>");
    mynum  = mynum-1;
}while (mynum>0)


window.onunload = onunload_message;
function onunload_message(){
    alert("您确定离开该网页吗？");}

/**
 * 计算器
 */
function count() {
        var value1=document.getElementById("text1").value;
        var num1 =parseInt(value1);

        var value2=document.getElementById("text2").value;
        var num2 = parseInt(value2);

        var cal = document.getElementById("select").value;
        var result;

        switch (cal){
            case "+":
                result = num1+num2;
                break;
            case "-":
                result = num1-num2;
                break;
            case  "*":
                result = num1*num2;
                break;
            case  "/":
                result = num1/num2;
                break;
            default:
                result = "错误！";
                break;
        }
        document.getElementById("into").value=result;
    }

        var mydate = new Date();
        document.write("<br>"+mydate + "<br/>");
        document.write(mydate.getFullYear() + "<br>");
        mydate.setFullYear(2018);
        document.write(mydate+"<br>");


// var mydate=new Date();
var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var index = mydate.getDay();
document.write("今天是" + weekday[index]+"<br>");
mydate.setTime(mydate.getTime()+2*60*60*1000);

document.write("<br>"+"推辞一小时："+mydate);

/**
 * 编程练习
 * @type {Date}
 */
// var date = new Date();
// var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
// var index = mydate.getDay();
var week = weekday[index];
var dateStr = mydate.getFullYear()+"年"+mydate.getMonth()+"月"+mydate.getDate()+"日"+week;

var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";

var dataarr = scoreStr.split(";");

var totalscore =0;

for (var i=0;i<dataarr.length-1;i++){
    var str = dataarr[i];
    var arr = str.split(":");

    var score = parseInt(arr[1]);
    totalscore= totalscore + score;


}

var scoreStr1 = "xx班级总分为："+totalscore;
var eve = totalscore/dataarr.length
document.write("<br>"+dateStr+scoreStr1+"平均分为："+eve);



var int=setInterval(clock, 100)
var attime;
function clock(){
    var time=new Date();
    attime= time.getHours()+"时："+time.getMinutes()+"分："+time.getSeconds()+"秒";
    document.getElementById("clock").value = attime;
}

function clock2(){

    var time=new Date();
    document.getElementById("clock").value = time;
}
var i =setInterval(clock2,100);



var num=0;
function startCount() {

    document.getElementById('count').value=num;
    num=num+1;
    setTimeout(startCount,1000);
}


var num2=0;
var a;
function startCount2(){
    document.getElementById('count2').value=num2;
    num2=num2+1;
    a=setTimeout(startCount2,1000);
}
function stopCount2(){
    clearTimeout(a);
}

/**
 * 倒计时返回
 * @type {number}
 */

var i=5;

setInterval(sz,1000);

function sz(){

    document.getElementById("t1").innerHTML=i;

    i--;

    if(i==0){

        location.href="https://www.baidu.com/";

    }

}

function Tback(){

    history.back();

}


    function lll() {
        var Lists=document.getElementsByTagName("li");
        for (var i=0; i<Lists.length;i++)
        {
            var text = Lists[i].getAttribute("title");

            if(text=="") {
                // Lists[i].setAttribute("title",Lists[i].innerHTML="WEB前端技术");
                document.getElementsByTagName("li")[i].innerHTML="WEB前端技术";
                // document.write(Lists[i].getAttribute("title")+"<br>");
            }
        }
    }


// document.write(window.innerHeight);


// 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
window.onload = function(){
    var atr=document.getElementsByTagName('tr');
    for(var i=0;i<atr.length;i++){         //for循环为每行表格添加bgColor函数
        bgColor(atr[i]);
    }
};
function bgColor(trColor){          //bgColor函数为每行表格添加鼠标移入移出事件
    trColor.onmouseover=function () {
        trColor.style.backgroundColor='#16FFA7'; //并立即执行对应的背景颜色变化函数
    };
    trColor.onmouseout=function () {
        trColor.style.backgroundColor='#fff';
    }
}

// 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
function add(){
    var tab=document.getElementById('table');
    var newtr=document.createElement('tr');

    var newtd0=document.createElement('td');
    newtd0.innerHTML='xh003';

    var newtd1=document.createElement('td');
    newtd1.innerHTML='***';

    var newtd2=document.createElement('td');
    var newtd2a=document.createElement('a');
    newtd2a.setAttribute('href','javascript:void(0);');  //为新tr第三列添加删除链接
    newtd2a.setAttribute('onclick','del(this)');
    newtd2a.innerHTML='删除';

    newtd2.appendChild(newtd2a);
    newtr.appendChild(newtd0);
    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);

    var afterTr=tab.appendChild(newtr);   //将新添加的tr返回给afterTr
    bgColor(afterTr);      //afterTr带入到bgColor函数，使其也拥有背景颜色变化
}

// 创建删除函数
function del(obj){                //通过this传递到obj，obj指的就是a标签本身
    var parent=obj.parentNode.parentNode.parentNode;  //指table
    var del=obj.parentNode.parentNode;       //指a标签父级的父级tr
    parent.removeChild(del);
}
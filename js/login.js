
var root = "root";
var pas = "123456";

//点击button按钮处理
$(".loginBtn").click(function(){
            var user = $(".userName").val();
            var pass = $(".password").val();
        //回调函数
       if(user == root && pas == pass){
            $("#loginstatu").attr("href","index.html");
       }
       else{
           alert("输入错误！");
       }
})










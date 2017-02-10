
window.onload = function(){

	// 公告
	var obj=document.getElementById("scoll");
	var obj1=document.getElementById("div1");
	var obj2=document.getElementById("div2");

	obj2.innerHTML =obj1.innerHTML;
	function movepic()
	{ 
	   if (obj2.offsetHeight-obj.scrollTop<=0)
	   {
	     obj.scrollTop=obj.scrollTop-obj1.offsetHeight;
	   }
	   else
	   {
	     obj.scrollTop++;
	   }
	}
	var speed=20;
	var mymove=setInterval(movepic,speed);
	obj.onmouseover=function(){ clearInterval(mymove);};
	obj.onmouseout=function(){mymove=setInterval(movepic,speed);};

	// 登录注册
  var p1 = document.getElementById("pul1");
  var p2 = document.getElementById("pul2");
document.getElementById("login").onclick=function(){
    if(p1.style.display=="none"){
          p1.style.display="block";
       }
}
document.getElementById("reg").onclick=function(){
  if (p2.style.display=="none"){
       p2.style.display="block";
     }
}
document.getElementById("img1_login").onclick=function(){
     p1.style.display="none";
}
document.getElementById("img2_reg").onclick=function(){
     p2.style.display="none";
}

   $(function(){
    $("#stu_sub").click(function(){
        flag1=flag2=true;
          // 判断输入是否为空
            var aInput=$('#user_reg1').find('.val');
              for(var i=0;i<aInput.length;i++)
              {
               if(aInput.eq(i).val()=='')
               {
                flag1=false;
                break;
               }
              }
         // 验证密码的一致性

         value=$('#user_reg1 .password').val();
         value1=$('#user_reg1 .password1').val(); 
         value = $.trim(value); 
         value1 = $.trim(value1);
        if(value!=value1)
        {
          
             flag2=false;
             value=value1=null;      
        }  


         stu_flag=flag1&&flag2; 
        if(!flag1)
        {
          alert('注册信息不能为空！');
          return false;
        }             
        if(flag1)
        {
            if(!flag2)
            {
                alert('两次密码输入不一致！');
                 return false;
                
            }
        }

        var username=$('#username').val();
        var email=$('#email_log').val();
        var password=$('#password').val();
        alert(email);
        $.ajax({
          url:'',
          type:'POST',
          data:{
            'username':username,
            'email':email,
            'password':password
          },
          success:function(data){ 
               
              var obj=eval("("+data+")");
             alert(obj.msg);
          }
        });
    });
 });
}

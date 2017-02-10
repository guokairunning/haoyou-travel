 $(window).load(function(){
     $(function(){
            $(search_button).click(function(){
            	//ajax request all raiders
            	$.ajax({
                      url:'loadSpotServlet',
                      type:'GET',
                      contentType:'application/x-www-form-urlencoded;charset=utf-8',
                      async:true,
                      data:{
                      name:'spotName'
                      },
                      success:function(data){
                      	var obj=eval("("+data+")");
                      	for (var i = 0; i < obj.data.length; i++) {
                      		 $('.best_spot').append('<button class="btn">obj[i].data.name</button>');
                      		 // $('.best_spot button').html('obj[i].name');
                      	}

                      },
                      error:function(){
                      	alert('对不起，攻略查询失败。');
                      }
            	})
            })
     })

        $(".scroll").click(function(event){   
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        });

 }




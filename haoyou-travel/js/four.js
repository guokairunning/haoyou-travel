window.onload = function(){
	var ok1 = document.getElementById("give");
	var otxt = document.getElementById("mytxt");
	var op = document.getElementById("jiyu");

    document.getElementById("change_infor").onclick = function(){
		ok1.style.display ="block";
		otxt.style.display = "block";
	}
	ok1.onclick = function(){
		op.innerHTML =("&nbsp;&nbsp;&nbsp;&nbsp;")+otxt.value;
		ok1.style.display ="none";
		otxt.style.display = "none";
	}

		// $("#dis_but").click = function(){
			
		// 	$("#mytxt1").css("display","block");

		// 	$("#give1").css("display","block").click = function(){
		// 		$("dis").val("&nbsp;&nbsp;"+$("#mytxt1").value);
		// 		this.css("display","none");
		// 		$("#mytxt1").css("display","none");
		// 	};
		// }

		var ok11 = document.getElementById("give1");
		var otxt1 = document.getElementById("mytxt1");
		var op1= document.getElementById("dis");

		document.getElementById("dis_but").onclick = function(){
			ok11.style.display ="block";
			otxt1.style.display = "block";
		}
		ok11.onclick = function(){
			op1.innerHTML =("&nbsp;&nbsp;")+otxt1.value;
			ok11.style.display ="none";
			otxt1.style.display = "none";
		}


		var pic1 = document.getElementById("picture1")
		document.getElementById("gone").onclick = function(){
			pic1.style.display = "block";
		}
 }


$(document).ready(function(){

	$("#closeBtn").click( function(){

		$("#lightbox").fadeOut();
	
	});


	$("#noBtn").click( function(){

		alert("Please come back when you're 21!")
	

	});

	 	$(".circle").hover(function(){
		  $(this).css("width","70px")
		  
		 },function(){
		 	$(this).css("width","60px")
		 });
	
	  	$("#item").hover(function(){
	  		console.log("A")
	  		$("#price").css("visibility", "visible");
	 		//$(this).addClass("hidden-me");
	 		 }, function(){
	 	  	//$(this).removeClass("hidden-me")
	 	  	$("#price").css("visibility","visible");
	 	 	//$(this).addClass("hidden-me")
	 	

	 	 });
	  	$("#itemB").hover(function(){
	  		console.log("B")

	  		$("#priceB").css("visibility", "visible");
	 		//$(this).addClass("hidden-me");


	 	 }, function(){
	 	 	//$(this).removeClass("hidden-me")
	 	 });

	  	$("#itemC").hover(function(){
	  		console.log("C")
	  		$("#priceC").css("visibility", "visible");
	 		//$(this).addClass("hidden-me");
	 		}, function(){
	 	 	//$(this).removeClass("hidden-me")

	 	 });
	  	$("#itemD").hover(function(){
	  		console.log("D")
	  		$("#priceD").css("visibility", "visible");
	 		//$(this).addClass("hidden-me");
	 		}, function(){
	 	 	//$(this).removeClass("hidden-me")

	 	 });

	  	$("#bCa").hover(function(){
	  	 	$(this).css("background-color", "black");
	  	  });
	 		
	 	$("#bCa").mouseleave(function(){
	  	
	 		 $(this).css("background-color","#329406");
	 	});


	  	$("#bCb").hover(function(){
	  	 	$(this).css("background-color", "black");
	  	  });
	 		
	 	$("#bCb").mouseleave(function(){
	  	
	 		 $(this).css("background-color","#329406");
	 	});


	  	$("#bCc").hover(function(){
	  	 	$(this).css("background-color", "black");
	  	  });
	 		
	 	$("#bCc").mouseleave(function(){
	  	
	 		 $(this).css("background-color","#329406");
	 	});


	  	$("#bCd").hover(function(){
	  	 	$(this).css("background-color", "black");
	  	  });
	 		
	 	$("#bCd").mouseleave(function(){
	  	
	 		 $(this).css("background-color","#329406");
	 	});


	  	$("#bCe").hover(function(){
	  	 	$(this).css("background-color", "black");
	  	  });
	 		
	 	$("#bCe").mouseleave(function(){
	  	
	 		 $(this).css("background-color","#329406");
	 	});




}); //this should contain everything


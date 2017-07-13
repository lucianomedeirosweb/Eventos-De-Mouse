$(function(){


var ex = $('.ex1');

$('.ev1').click(function(){
	$(this).css("background","#ccc");
	ex.text("Você Clicou");
	});

	$('.ev2').dblclick(function(){
		
		$(this).css("background","#ccc");
	ex.text("Você Deu 2 clicks");
			
	});
	
	$('.ev3').focusin(function(){
		
		$(this).css("background","#ccc");
	ex.text("Você Deu Foco!");
		
		
		
	}).focusout(function(){
		
		$(this).css("background","#000");
	ex.text("Você Tirou o Foco!");
						
	});
	
	$('.ev4').hover(function(){
		
		$(this).css("background","#000");
	ex.text("Você Passou o mouse");
		
	});
	
	$('.ev5').mousedown(function(){
		$(this).css("background","#ccc");
	ex.text("Você Apertou o botão do  mouse");
	}).mouseup(function(){
		
		$(this).css("background","#000");
	ex.text("Você Soltou o botão do mouse");
		
		
	});
	
	var a = 0;
	$('.ev6').mouseenter(function()	{
		
		a += 1;
		ex.text("Entradas do Mouse:"+a); 
		
	}).mouseout(function(){
		
		ex.text("Você saiu do mouse");
		
	});
	
	var b = 0;
	$('.ev7').mouseover(function(){
		b += 1;
		ex.text("Mouse Over: "+b);
		
	}).mouseleave(function(){
		ex.text("Saida do mouse");
		
	});
	
	$('.ev8').mousemove(function(move){
		
		var localx = move.pageX;
		var localy = move.pageY;		
		ex.text("Movimento X: "+localx+"Movimento Y : "+localy);
			});
	
	
	

});
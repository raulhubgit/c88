var canvas = new fabric.Canvas('myCanvas');

var ballX=0;
var ballY=0;
var holeY=400;
var holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeObj);
	});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ballObj);
		document.getElementById("hd3").innerHTML = "Vc atingiu o objetivo!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	function up()
	{
		if(ballY >= 0)
		{
		   ballY = ballY - blockImageHeight;
		 console.log("altura da imagem do bloco = " + blockImageHeight);
		 console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + ballX + " , Y = "+ballY);
		 canvas.remove(ballObj);
		 newImage();
		}
	}

	function down()
	{
		if(ballY <= 450)
		{
		   ballY = ballY + blockImageHeight;
		 console.log("altura da imagem do bloco = " + blockImageHeight);
		 console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + ballX + " , Y = "+ballY);
		 canvas.remove(ballObj);
		 newImage();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX = ballX - blockImageHeight;
		 console.log("altura da imagem do bloco = " + blockImageHeight);
		 console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + ballX + " , Y = "+ballY);
		 canvas.remove(ballObj);
		 newImage();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX = ballX + blockImageHeight;
		 console.log("altura da imagem do bloco = " + blockImageHeight);
		 console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + ballX + " , Y = "+ballY);
		 canvas.remove(ballObj);
		 newImage();
		}
	}
	
}


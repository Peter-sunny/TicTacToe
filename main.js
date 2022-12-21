// Function called whenever user tab on any box
function mainfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	var b1 = $("#b1").val();
	var b2 = $("#b2").val();
	var b3 = $("#b3").val();
	var b4 = $("#b4").val();
	var b5 = $("#b5").val();
	var b6 = $("#b6").val();
	var b7 = $("#b7").val();
	var b8 = $("#b8").val();
	var b9 = $("#b9").val();

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((( b1 == 'X') && (b2 == 'X') && (b3 == 'X')) ||
		(( b1 == 'X') && (b4 == 'X') && (b7 == 'X')) || 
		(( b7 == 'X') && (b8 == 'X') && (b9 == 'X')) ||
		(( b3 == 'X') && (b6 == 'X') && (b9 == 'X')) || 
		(( b1 == 'X') && (b5 == 'X') && (b9 == 'X')) || 
		(( b3 == 'X') && (b5 == 'X') && (b7 == 'X')) ||
		(( b2 == 'X') && (b5 == 'X') && (b8 == 'X')) || 
		(( b4 == 'X') && (b5 == 'X') && (b6 == 'X')))  {
		document.getElementById('content').innerHTML = "Player X won";

	
}





	// Checking of Player X finish
else if ((( b1 == 'O') && (b2 == 'O') && (b3 == 'O')) ||
	(( b1 == 'O') && (b4 == 'O') && (b7 == 'O')) || 
	(( b7 == 'O') && (b8 == 'O') && (b9 == 'O')) ||
	(( b3 == 'O') && (b6 == 'O') && (b9 == 'O')) || 
	(( b1 == 'O') && (b5 == 'O') && (b9 == 'O')) || 
	(( b3 == 'O') && (b5 == 'O') && (b7 == 'O')) ||
	(( b2 == 'O') && (b5 == 'O') && (b8 == 'O')) || 
	(( b4 == 'O') && (b5 == 'O') && (b6 == 'O')))  {
	document.getElementById('content').innerHTML = "Player Y won";


}
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
		// Here, Checking about Tie
else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
	|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
	(b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
		b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
	(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
		b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
	document.getElementById('content')
.innerHTML = "Match Tie";
window.alert('Match Tie');
}
else {


		// Here, Printing Result
	if (flag == 1) {
		
		$("#content").css("text-shadow" , "9px 1px 2px red");
		$("#content").text("Player X Turn");
	}
	else {
		
		$("#content").css("text-shadow" , "9px 1px 2px blue");
		$("#content").text("Player y Turn");
	}
}
}

// Function to reset game
function reset() {
	
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function box_1() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "O";
		$("#b1").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function box_2() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "O";
		$("#b2").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function box_3() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "O";
		$("#b3").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function box_4() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "O";
		$("#b4").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function box_5() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "O";
		$("#b5").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function box_6() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "O";
		$("#b6").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function box_7() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "O";
		$("#b7").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function box_8() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "O";
		$("#b8").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function box_9() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "O";
		$("#b9").css("text-shadow" , "9px 1px 2px red");
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
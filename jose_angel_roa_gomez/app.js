var cells = document.querySelectorAll("table td");


var count = 2;
var row1 = [];
var row2 = [];
var row3 = [];
var col1 = [];
var col2 = [];
var col3 = [];
var diag1 = [];
var diag2 = [];
for (var i = 0 ; i<cells.length ; i++) {
	
	cells[i].addEventListener("click", function () {
			
		if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {

			console.log(this.getAttribute("id"));
			if (count % 2 === 0 ) {
				this.innerHTML = 'X';
			} else {
				this.innerHTML = 'O';
			}
			count++;
		}
	});
}


function isLineFull (line) {
	if (line.length === 3 ){
		return true;
	}
	return false;
}

function checkForWiner (line) {
	if (line[0] === line[1] && line[1] === line[2]){
		return true;
	}
	return false;
}

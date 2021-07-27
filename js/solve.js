var nn = 0;
function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
var sudoku = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
];
function checkColumn(cole,num) {
   for (var rows = 0; rows < 9; rows++)
      if (sudoku[rows][Math.floor(cole)] == num)
         return true;
   return false;
}
function checkRow(rowe,num) {
   for (var cols = 0; cols < 9; cols++)
      if (sudoku[rowe][Math.floor(cols)] == num)
         return true;
   return false;
}
function checkBox(rowst, colst, num) {
   for (var rowq = 0; rowq < 3; rowq++)
      for (var colq = 0; colq < 3; colq++)
         if (sudoku[rowq+rowst][colq+colst] == num)
            return true;
   return false;
}
function sudokusudoku() {
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
             document.getElementById("P"+i+"_"+j+"").innerText=""+sudoku[i][j];
        }
    }
}

function checkValid(rowr,colr,numr) {
   return (!checkRow(rowr, numr) && !checkColumn(colr, numr) && !checkBox(rowr - rowr%3 , colr - colr%3, numr));
}

async function solveSudoku() {
   var row=0, col=0;
   var emt=false;
    for (var rowi = 0; rowi < 9; rowi++)
      for (var coli = 0; coli < 9; coli++)
         if (sudoku[rowi][coli] == 0){
             row=rowi;
             col=coli;
             emt=true;
             break;
            }
   if (!emt)
      return true;
   for (var num = 1; num <= 9; num++) {
      if ((!checkRow(row, num) && !checkColumn(col, num) && !checkBox(row - row%3 , col - col%3, num))) {
        sudoku[row][col] = num;
        document.getElementById("P"+row+"_"+col+"").innerText=""+sudoku[row][col];
        await sleep(300);
        if (await solveSudoku())
            return true;
        sudoku[row][col] = 0;
        document.getElementById("P"+row+"_"+col+"").innerText="";
        await sleep(300);
      }
   }
   return false;
}
async function solveit(){
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var xx = document.getElementById("P"+i+"_"+j+"").innerText;
            if(typeof xx !== "undefined"){
                var m = xx.split(",").map(Number);
                sudoku[i][j]=m[0];
            }
            else{
                sudoku[i][j]= 0;
            }
        }
    }
    if(solveSudoku()==true)
        sudokusudoku();
}
async function Clearit(){
   var inputElements = document.getElementsByTagName('td');
   for (var i=0; i < inputElements.length; i++) {
     inputElements[i].innerHTML="";
     inputElements[i].style="background-color:transparent ;color:black;";
   }
}

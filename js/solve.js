var nn = 0;
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

function solveSudoku() {
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
      if (checkValid(row, col, num)) {
         sudoku[row][col] = num;
         if (solveSudoku())
            return true;
         sudoku[row][col] = 0;
      }
   }
   return false;
}
// function createGrid(){
//     document.getElementById("grid").innerHTML="";
//     for(var i=0;i<9;i++){
//         for(var j = 0;j<9;j++){
//             var textfield=document.createElement("textarea");
//             //textfield.style="";
//             textfield.id="P"+nn+"_"+i+"_"+j+"";
//             document.getElementById("grid").appendChild(textfield);
//         }
//         if(i==2 || i==5 || i==8)
//         {
//             document.getElementById("grid").innerHTML=document.getElementById("grid").innerHTML+"<hr>";
//         }
//     }
//     //document.getElementById("grid").innerHTML=document.getElementById("grid").innerHTML+"</br><hr style='height:4px;background-color:black; margin:0 auto;'>"
//     nn++;
// }
function solveit(){
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
            console.log(sudoku[i][j]);
        }
    }
    if(solveSudoku()==true)
        sudokusudoku();
}
function Clearit(){
   var inputElements = document.getElementsByTagName('td');
   for (var i=0; i < inputElements.length; i++) {
     inputElements[i].innerHTML="";
     inputElements[i].style="background-color:transparent ;color:black;";
   }
}

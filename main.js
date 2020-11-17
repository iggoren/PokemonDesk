const firstRow = 'маама мыла раму';
const secondRow = 'Собака друг человека';

const countRow1 = getRow(firstRow);
const countRow2 = getRow(secondRow);

function getRow(Row) {
 let count = 0;
   for (let i=0; i < Row.length; i++) {
    if (Row.charAt(i) === "а") {
        count++;} 
     }
     return count;
}
 
(countRow1 > countRow2)? console.log(firstRow):console.log(secondRow);


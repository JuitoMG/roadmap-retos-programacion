// Function that accepts another function as an argument 
function processArray(func, arr) {
    return arr.map(func);
}

function square(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4];
const squares = processArray(square, numbers);
console.log(squares);

// Function that returns another function
function createSum(x) {
    return function(y) {
        return x + y;
    };
}

const sum5 = createSum(5);
console.log(sum5(20));

// Using filter, map and reduce
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers10.filter(num => num % 2 === 0);
const evenSquares = evenNumbers.map(num => num * num); 
const sumEvenSquares = evenSquares.reduce((total, num) => total + num, 0);

console.log(evenNumbers);
console.log(evenSquares);
console.log(sumEvenSquares);

// Extra Exercise //

const students =  [{
    name: 'Isaac',
    birthdate: new Date(2001, 9, 21),
    qualifications: [9.0, 10, 9.5, 9.8] 
},
{
    name: 'Juan',
    birthdate: new Date(2001, 6, 22),
    qualifications: [9, 8, 8.5, 9.5]
},
{
    name: 'Luis',
    birthdate: new Date(2003, 10, 5),
    qualifications: [6, 7, 7.5, 8]
},
{
    name: 'María',
    birthdate: new Date(2000, 4, 20),
    qualifications: [10, 9.5, 10, 10]
}]; 

const studentAverage = students.map(student => {
    const average = student.qualifications.reduce((sum, score) => sum + score, 0) / student.qualifications.length;
    return { name: student.name, average: average.toFixed(2) };
});
console.log(studentAverage);

const bestStudents = studentAverage.filter(student => student.average >= 9);
console.log(bestStudents);

const datesOfBirthInOrder = students.sort((a, b) => b.birthdate - a.birthdate);
datesOfBirthInOrder.forEach(student => {
    const date = student.birthdate;
    console.log(`\n${student.name}: ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
});

const allQualifications = students.flatMap(students => students.qualifications);
const highestScore = Math.max(...allQualifications);

console.log(`\nThe highest score is ${highestScore}`);
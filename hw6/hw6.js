const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


function getSubjects(students, index){
const sub = Object.keys(students[index].subjects);
for (let i = 0; i < sub.length; i++){
    const firstLetter = sub[i][0].toUpperCase();
    const withoutFirstLetter = sub[i].slice(1);
    sub[i] = (firstLetter + withoutFirstLetter).replace('_', ' ');
    
}
const name = Object.values(students[index].name).join('');
const funcLog = `Subjects for ${name}: [${sub.join(', ')}]`;
return funcLog;
}

console.log(getSubjects(students, 0));


function getAverageMark(student){
const makrs = Object.values(student.subjects);
const allMarks = makrs.flat();

let sumOfArray = allMarks.reduce((accumulator, number) =>{
  return accumulator + number;
})
const averageAllMarks = Math.round((sumOfArray/allMarks.length)*100)/100;   
return averageAllMarks; 

}


console.log(getAverageMark(students[0]));

function getStudentsInfo(students){
  const nameValue = Object.values(students.name).join('');
  const courseValue = Object.values(students)[1];
  const averageMark = getAverageMark(students);
  const studentsInfo = `"course": ${courseValue}, "name": ${nameValue}, "averageMark": ${averageMark}`;
  return studentsInfo;
}
console.log(getStudentsInfo(students[2]));

function getStudentsNames(students){
  const studentsNames = [];
  for (let i = 0; i < students.length; i++){
      studentsNames.push(Object.values(students[i].name).join(''));
  }
  studentsNames.sort();
  return studentsNames; 

}
console.log(getStudentsNames(students))

function getBestStudent(students){
  let bestMakr = 0;
  let bestStudent = '';
  console.log(bestMakr, bestStudent)
  for (let i = 0; i < students.length; i++){
    console.log(i)
    let averageMark = getAverageMark(students[i]);
    console.log(averageMark);
    if (bestMakr < averageMark){
        bestMakr = averageMark;
        bestStudent = students[i].name;}
    }
   return bestStudent;
}
console.log(getBestStudent(students))


function calculateWordLetters(text){
let obj = {};
const wordArr = [...text];
const funcLog = wordArr.reduce((el, current) =>{
  el[current] = (el[current] || 0) + 1;
  return el;
}, obj)

console.log(wordArr)  
return funcLog;

}
console.log(calculateWordLetters('dkdk'))


const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPairs(studetns){
    let girls = [students[2], students[3], students[5]]
    let boys = [students[0], students[1], students[4]]
    let pairs = [];
    
    for (let i = 0; i < girls.length; i++){
        pairs[i] = [boys[i] + ' і ' + girls[i]];

    }
  
    return pairs;
}
const pairs = getPairs(students);
console.log(pairs);


function takeThemesForPairs(pairs, themes){
    let themesForPairs = [];
    for (let i = 0; i < pairs.length; i++){
        themesForPairs[i] = [pairs[i], themes[i]]
    }
    return themesForPairs;
}
const themesForPairs = takeThemesForPairs(pairs, themes);
console.log(themesForPairs);

function getMarksForStudents(students, marks){
    let marksForStudents = [];
    for (let i = 0; i < students.length; i++){
        marksForStudents[i] = [students[i], marks[i]];
    }
    return marksForStudents;
}
const marksForStudents = getMarksForStudents(students, marks);
console.log(marksForStudents);



function getMarksForPairs(themesForPairs){
    marksForPairs = [];
    for (let i = 0; i < themesForPairs.length; i++){
        let randomMark = Math.ceil(Math.random() * 5);
        marksForPairs[i] = [themesForPairs[i], randomMark];

    }
    return marksForPairs;
}
const marksForPairsPrinted = getMarksForPairs(themesForPairs);
console.log(marksForPairs);
class Student{
    constructor(university, course, fullName, marks, dismiss = false ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismiss = dismiss;
    }
    get getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }
    get getMarks() {
        if (!this.dismiss){
            return `Оцінки студента ${this.fullName}: [${this.marks.join(', ')}]` ;
        }else{ return null; }
    }
    setMarks(mark){
        if(!this.dismiss){
            this.marks.push(mark);
            return `Оцінки студента ${this.fullName}: [${this.marks.join(', ')}]` ;
        }else{ return null;}
    }
    get getAverageMark(){
        let sumOfMarks = this.marks.reduce((accumulator, mark) => {return accumulator + mark})
        return Math.round((sumOfMarks/(this.marks.length))*100)/100;
    }
    dismissStudent(){
        return this.dismiss = true;
    }
    recoverStudent(){
        return this.dismiss = false;
    }
}

class BudgetStudent extends Student{
    constructor(university, course, fullName, marks, dismiss = false){
        super(university, course, fullName, marks, dismiss = false);
        this.getScholarship = function getScholarship(){
            if(this.getAverageMark >= 4 && !this.dismiss){
                console.log(`Студент ${this.fullName} отримує 1400 грн стипендії`);

            }else {
                console.log(`Студент ${this.fullName} не отримує стипендії`);
            }
        }
        setInterval(() => {
            this.getScholarship()
        }, 3*1000);
    }
}



const ostap = new Student('Вищої школи психології м. Одеса', '3', 'Остап Родоманський Бендер', [5, 4, 5, 4]);
const vasyl = new BudgetStudent('Вищої школи психології м. Одеса', '3', 'Василь Родоманський Бендер', [3, 4, 5, 4])

console.log(ostap.getInfo);
console.log(ostap.getMarks)
ostap.dismissStudent()
console.log(ostap.setMarks(4))
console.log(ostap.getAverageMark)
ostap.recoverStudent();
console.log(ostap.setMarks(5));
console.log(ostap.getAverageMark);
console.log(vasyl.setMarks(3))
console.log(vasyl.getAverageMark)

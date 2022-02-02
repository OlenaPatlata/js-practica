const listOfStudents = [
	{
		name: 'John',
		email: 'john@gmail.com',
	},
	{
		name: 'Jane',
		email: 'jane@gmail.com',
	},
	{
		name: 'Jack',
		email: 'jack@gmail.com',
	},
	{
		name: 'Mary',
		email: 'mary@gmail.com',
	},
	{
		name: 'Robert',
		email: 'robert@gmail.com',
	},
	{
		name: 'Ann',
		email: 'ann@gmail.com',
	},
	{
		name: 'Brad',
		email: 'brad@gmail.com',
	},
	{
		name: 'Lisa',
		email: 'lisa@gmail.com',
	},
	{
		name: 'Matthew',
		email: 'matthew@gmail.com',
	},
	{
		name: 'Sandra',
		email: 'sandra@gmail.com',
	},
];



const homeworkResults = [
	{
		topic: 'HTML Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'CSS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: false,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: false,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'JS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: false,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'DOM',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: false,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'AJAX',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: false,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
];
// __________________Задача 1, 31/01/2022
// 1. Вы должны создать конструктор функций 'Student', который вы можете вызвать с двумя аргументами name и email.
// Имя, адрес электронной почты и homeworkResult должны быть скрыты от пользователя. 
// Экземпляр Student должен  предоставить следующие методы для получения или изменения своего состояния:
// getName(): возвращает имя учащегося.
// getEmail(): возвращает адрес электронной почты учащегося.
// addHomeworkResult(тема, успех): этот метод можно вызвать с 2 аргументами: topic(string) и success(boolean). Этот метод должен добавить новый элемент в свойство homeworkResults учащегося.

// class Student {
//     #name;
//     #email;
//     #homeworkResults = [];
//     constructor(name, email) {
//         this.#name = name;
//         this.#email = email;
//     }
//     getName() {
//     return console.log(this.#name)
//     }
//     getEmail() {
//     return console.log(this.#email)
//     }
//     addHomeworkResult(topic, success) {
//         this.#homeworkResults.push({ topic, success })
//     }
//     getHomeworkResult() {
//         return console.log(this.#homeworkResults) 
//     }
// }
// const student = new Student('John', 'john@gmail.com') 

// student.getName()
// student.getEmail()
// student.addHomeworkResult("HTML", true)
// student.addHomeworkResult("JS", true)
// student.getHomeworkResult()

// __________________Задача 2, 31/01/2022
// 2. Необходимо создать конструктор функций 'FrontendLab' , который можно вызывать с двумя аргументами students и failedLimit.
// Экземпляр FrontendLab должен иметь 2 поля свойств: failedHomeworksLimit и studentsList. Эти поля должны быть скрыты от пользователя.
// Экземпляр Student должен предоставить следующие методы для получения или изменения своего состояния.
// printStudentsList(): этот метод записывает в консоль список учащихся с результатами их домашних заданий.
// addHomeworkResults(homeworkResults): этот метод можно вызвать с аргументом homeworkResult, объект с 2 полями: topic(string) и results(массив объектов с 2 полями: email(string) и success(boolean)). Этот метод должен обновить все объекты student в FrontendLab studentsList.
// printStudentsEligibleForTest(): этот метод должен регистрировать в консоли список студентов, которые не провалили больше домашних заданий, чем разрешено failedLimit. 

class FrontendLab{
    #failedHomeworksLimit = 0;
    #studentsList = [];
    constructor(studentsList, failedHomeworksLimit) {
        this.#studentsList = studentsList;
        this.#failedHomeworksLimit = failedHomeworksLimit;
        
    }
    addHomeworkResults(hwRes) {
        const copyHwRes = [...hwRes.results]
        const titlTems=hwRes.topic
        this.#studentsList.forEach(obj => {
			obj.homeWorkStudent = []
			console.log(obj.homeWorkStudent);
            copyHwRes.forEach(student => {
                if (student.email === obj.email) {
				return obj.homeWorkStudent.push({ topic:titlTems, success:student.success })
				}
        })
        return obj.homeWorkStudent
		})
	}

    printStudentsList() {
		this.#studentsList.forEach(({ name, email, homeWorkStudent }) => {
			console.log((`name: ${name}, email: ${email}`));
			console.log(homeWorkStudent);
		});
    }
    printStudentsEligibleForTest() {
        
    }

}
const lab = new FrontendLab(listOfStudents, 1);

lab.addHomeworkResults(homeworkResults[0])
lab.addHomeworkResults(homeworkResults[1])
lab.printStudentsList()
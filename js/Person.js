// attempt at subclassing
var Person = (function(){

	function Person (name){
		this.name = name;
	}

	return {
		Person
	};
})();

// var Student = (function(){

// 	function Student(name, grade){
// 		Person.Person.call(this, name);
// 		this.grade = grade;
// 	}

// 	return {
// 		Student : Student
// 	};
// })();
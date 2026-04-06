const name = "Nikko";
const age = 24;
const course = "IT";
const school = "JRU";
const dreamJob = "Tech Business Owner";

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I study ${course}`);
console.log(`I study at ${school}`);
console.log(`I want to become a ${dreamJob}`);

let score = 85;
if (score >= 75) {
    console.log("Passed")
} else {
    console.log("Failed")
}

function introduce() {
    console.log("Hello my name is Nikko");
    console.log("I study IT");
    console.log("I want to become a developer");
}

introduce();

const skills = ["HTML", "CSS", "JavaScript", "Git"];

console.log("My first skill is", skills[0]);
console.log("My second skill is", skills[1]);

const student = {
    name: "Nikko",
    age: 24,
    course: "IT",
    school: "JRU"
};

console.log("My name is", student.name);
console.log("I study IT at", student.school);
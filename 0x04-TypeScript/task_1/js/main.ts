// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional attribute
    location: string;
    [key: string]: any; // Allows any additional attribute
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example of a Directors object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Output:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

// Define the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

// Define the interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Define the classInterface
interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass class that adheres to classInterface
class StudentClass implements classInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}


// Task 1: Calculator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// Task 2: Array Operations
function calculateEvenSum() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(Number);
    const evenSum = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
    document.getElementById('evenSumResult').textContent = `Sum of even numbers: ${evenSum}`;
}

// Task 3: Object Manipulation
const Person = {
    firstName: '',
    lastName: '',
    age: 0,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge: function() {
        this.age += 1;
    }
};

function showPersonDetails() {
    Person.firstName = document.getElementById('firstName').value;
    Person.lastName = document.getElementById('lastName').value;
    Person.age = parseInt(document.getElementById('age').value);
    document.getElementById('personDetails').textContent = `Full Name: ${Person.getFullName()}, Age: ${Person.age}`;
}

function incrementAge() {
    Person.incrementAge();
    document.getElementById('personDetails').textContent = `Full Name: ${Person.getFullName()}, Age: ${Person.age}`;
}

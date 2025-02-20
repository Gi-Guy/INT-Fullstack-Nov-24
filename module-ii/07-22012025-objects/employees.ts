type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};

const employees: Employee[] = [];

for (let i = 0; i < 5; i++) {
    const name = prompt("Please enter employee name") ?? "";
    const age = Number(prompt("Please enter employee age"));
    const department = prompt("Please enter employee department") ?? "";
    const sallary = Number(prompt("Please enter employee sallary"));

    employees.push({
        name,
        age,
        department,
        sallary
    });
}

function findEmployee() { }

function removeEmployee() { }

function stats() {
    let employeeWithMaxSallary = employees[0];

    for (const employee of employees) {
        if (employee.sallary > employeeWithMaxSallary.sallary) {
            employeeWithMaxSallary = employee
        }
    }

    alert(`The employee with the highest sallary is: ${employeeWithMaxSallary.name}`);

    let employeeWithMinSallary = employees[0];

    for (const employee of employees) {
        if (employee.sallary < employeeWithMinSallary.sallary) {
            employeeWithMinSallary = employee
        }
    }

    alert(`The employee with the lowest sallary is: ${employeeWithMinSallary.name}`);

    let sallariesSum = 0;

    for (const employee of employees) {
        sallariesSum += employee.sallary;
    }

    alert(`The average sallary is ${sallariesSum / employees.length}`);

    const sallariesAverageByDepartment: Record<string, number> = {};

    for (const employee of employees) {
        // !sallariesAverageByDepartment[employee.department] === true iif sallariesAverageByDepartment[employee.department] is false or 0 or null or undefined or ""
        // if (!sallariesAverageByDepartment[employee.department]) {
        if (!(employee.department in sallariesAverageByDepartment)) {
            sallariesAverageByDepartment[employee.department] = 0;
        }

        sallariesAverageByDepartment[employee.department] += employee.sallary;
        sallariesAverageByDepartment[employee.department] /= 2;
    }

    for (const department in sallariesAverageByDepartment) {
        alert(`The average sallary in ${department} is: ${sallariesAverageByDepartment[department]}`);
    }
}

function readEmployee(): Employee | undefined {
    const name = prompt("Please enter employee name");

    if (!name) {
        return;
    }

    const age = readNumber("Please enter employee age");

    if (age === undefined) {
        return;
    }

    const department = prompt("Please enter employee department");

    if (!department) {
        return;
    }

    const sallary = readNumber("Please enter employee sallary");

    if (sallary === undefined) {
        return;
    }

    return {
        name,
        age,
        department,
        sallary,
    };
}

function readNumber(message: string) {
    let input = prompt(message);
    let number = Number(input);

    while (isNaN(number)) {
        if (input === null) {
            return;
        }

        input = prompt(`Invalid number.\n\n${message}`);
        number = Number(input);
    }

    return number;
}
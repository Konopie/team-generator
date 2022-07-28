

class Employee {
    constructor(name = '', id) {
        this.name = name;
        this.id = id;
        this.email = name + "@gmail.com";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
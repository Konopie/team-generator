const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id, school) {
        super(name, id);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getID() {
        return this.id;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern; 
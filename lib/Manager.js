const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id) {
        super(name, id);

        this.officeNumber = 1;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager; 
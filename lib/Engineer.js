const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id, github) {
        super(name, id);

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 
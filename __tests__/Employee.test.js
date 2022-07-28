const Employee = require('../lib/Employee.js');

test('create a employee oject', () => {
const employee = new Employee('Cody', 1);

expect(employee.name).toBe('Cody', 1);
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Cody', 1);

    expect(employee.getName()).toEqual(expect.stringContaining('Cody'));
});

test('gets employee id', () => {
    const employee = new Employee('Cody', 1);

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('Cody', 1)

    expect(employee.getEmail()).toEqual(expect.stringContaining('@gmail.com'));
});

test('get employee role', () => {
    const employee = new Employee('Cody', 1)

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
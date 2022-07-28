const Intern = require('../lib/Intern.js');

test('creates a Intern', () => {
    const intern = new Intern('Cody', 1, 'UNCC');

    expect(intern.name).toBe('Cody');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@gmail.com'));

    
})

test('gets Intern name', () => {
        const intern = new Intern('Cody', 1, 'UNCC');
    
        expect(intern.getName()).toEqual(expect.stringContaining('Cody'));
    });
    
    test('gets Intern id', () => {
        const intern = new Intern('Cody', 1, 'UNCC');
    
        expect(intern.getId()).toEqual(expect.any(Number));
    });
    
    test('get Intern email', () => {
        const intern = new Intern('Cody', 1, 'UNCC')
    
        expect(intern.getEmail()).toEqual(expect.stringContaining('@gmail.com'));
    });
    
    test('get intern role', () => {
        const intern = new Intern('Cody', 1, 'UNCC')
    
        expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
    });

    test('get school', () => {
        const intern = new Intern('Cody', 1, 'UNCC');

        expect(intern.getSchool()).toEqual(expect.any(String));
    })
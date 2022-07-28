const Engineer = require('../lib/Engineer.js');

test('creates a Engineer', () => {
    const engineer = new Engineer('Cody', 1, 'Konopie');

    expect(engineer.name).toBe('Cody');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@gmail.com'));

    
})

test('gets Engineer name', () => {
        const engineer = new Engineer('Cody', 1, 'Konopie');
    
        expect(engineer.getName()).toEqual(expect.stringContaining('Cody'));
    });
    
    test('gets Engineer id', () => {
        const engineer = new Engineer('Cody', 1, 'Konopie');
    
        expect(engineer.getId()).toEqual(expect.any(Number));
    });
    
    test('get Engineer email', () => {
        const engineer = new Engineer('Cody', 1, 'Konopie')
    
        expect(engineer.getEmail()).toEqual(expect.stringContaining('@gmail.com'));
    });
    
    test('get engineer role', () => {
        const engineer = new Engineer('Cody', 1, 'Konopie')
    
        expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
    });

    test('get GitHub username', () => {
        const engineer = new Engineer('Cody', 1, 'Konopie');

        expect(engineer.getGitHub()).toEqual(expect.any(String));
    })
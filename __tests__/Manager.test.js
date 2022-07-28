const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('Jason', 1);

    expect(manager.name).toBe('Jason');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@gmail.com'));

    
})

test('gets Manager name', () => {
        const manager = new Manager('Cody', 1);
    
        expect(manager.getName()).toEqual(expect.stringContaining('Cody'));
    });
    
    test('gets Manager id', () => {
        const manager = new Manager('Cody', 1);
    
        expect(manager.getId()).toEqual(expect.any(Number));
    });
    
    test('get Manager email', () => {
        const manager = new Manager('Cody', 1)
    
        expect(manager.getEmail()).toEqual(expect.stringContaining('@gmail.com'));
    });
    
    test('get Manager role', () => {
        const manager = new Manager('Cody', 1)
    
        expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
    });
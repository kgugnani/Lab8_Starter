// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone number true1', () => {
    expect(functions.isPhoneNumber('244-392-2323')).toBe(true);
});

test('Phone number true2', () => {
    expect(functions.isPhoneNumber('134-346-4573')).toBe(true);
});

test('Phone number false1', () => {
    expect(functions.isPhoneNumber('WHADDUP')).toBe(false);
});

test('Phone number false2', () => {
    expect(functions.isPhoneNumber('55555-555-5')).toBe(false);
});

test('Email true1', () => {
    expect(functions.isEmail('gugnanikartik23@gmail.com')).toBe(true);
});

test('Email true2', () => {
    expect(functions.isEmail('gugnanik23@gmail.com')).toBe(true);
});

test('Email false1', () => {
    expect(functions.isEmail('WHADDUP')).toBe(false);
});

test('Email false2', () => {
    expect(functions.isEmail('55555-555-5')).toBe(false);
});

test('Strong password true1', () => {
    expect(functions.isStrongPassword('Lost_inthesauce')).toBe(true);
});

test('Strong password true2', () => {
    expect(functions.isStrongPassword('WhydidIdo_this')).toBe(true);
});

test('Strong password false1', () => {
    expect(functions.isStrongPassword('pc')).toBe(false);
});

test('Strong password false2', () => {
    expect(functions.isStrongPassword('p')).toBe(false);
});

test('Date true1', () => {
    expect(functions.isDate('12/23/2002')).toBe(true);
});

test('Date true2', () => {
    expect(functions.isDate('07/13/2021')).toBe(true);
});

test('Date false1', () => {
    expect(functions.isDate('WHADDUP')).toBe(false);
});

test('Date false2', () => {
    expect(functions.isDate('55555-555-5')).toBe(false);
});

test('Hex true1', () => {
    expect(functions.isHexColor('#9F2B68')).toBe(true);
});

test('Hex true2', () => {
    expect(functions.isHexColor('#800020')).toBe(true);
});

test('Hex false1', () => {
    expect(functions.isHexColor('WHADDUP')).toBe(false);
});

test('Hex false2', () => {
    expect(functions.isHexColor('55555-555-5')).toBe(false);
});
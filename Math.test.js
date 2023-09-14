test('distance', () => {
    character.distance = 3;
    expect(character.distance).toBe(3);
});
test('stoned', () => {
    character.stoned = true;
    expect(character.stoned).toBe(true);
});
test('attack - no stoned', () => {
    magician.distance = 2;
    expect(magician.attack).toBe(90);
});
test('load', () => {
    const buffer = new ArrayBuffer(10);
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
});
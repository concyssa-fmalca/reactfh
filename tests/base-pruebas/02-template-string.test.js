import getSaludo from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template', () => {
    test('getSaludo',()=>{
        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    })


})
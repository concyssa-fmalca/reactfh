describe('Pruebas de demo',()=>{

test('Esta prueba no debe fallar', () =>{

//1. Inicialización
const message1 = "Hola mundo";

//2. Estímulo
const message2 = "Hola mundo".trim();

//3. Observar el comportamiento
expect(message2).toBe(message1);

})
})
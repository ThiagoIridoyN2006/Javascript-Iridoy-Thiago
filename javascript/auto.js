

console.log('Cargando inventario de autos...');

const inventario = [
    new Auto("Ford", "Mustang", 2022, 0, 45000),
    new Auto("Ford", "Ranger", 2021, 15000, 35000),
    new Auto("Toyota", "Corolla", 2023, 0, 25000),
    new Auto("Toyota", "RAV4", 2022, 20000, 28000),
    new Auto("Chevrolet", "Camaro", 2023, 0, 42000),
    new Auto("Chevrolet", "S-10", 2021, 30000, 32000)
];

console.log(`Inventario cargado: ${inventario.length} autos disponibles`);
console.log('Resumen del inventario:');
inventario.forEach(auto => {
    console.log(`- ${auto.marca} ${auto.modelo} (${auto.año})`);
});

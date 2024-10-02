

function filtrarPorMarca(marca) {
    console.log(`Filtrando autos de la marca: ${marca}`);
    const autosFiltrados = inventario.filter(auto => auto.marca.toLowerCase() === marca.toLowerCase());
    console.log('Autos encontrados:', autosFiltrados);
    return autosFiltrados;
}

function buscarAuto(marca, añoMin, añoMax, kmMax) {
    console.log('Iniciando búsqueda con los siguientes criterios:');
    console.log({
        marca: marca || 'Todas',
        añoMin: añoMin,
        añoMax: añoMax,
        kmMax: kmMax
    });

    const resultados = inventario.filter(auto => {
        const cumpleMarca = marca ? auto.marca.toLowerCase() === marca.toLowerCase() : true;
        const cumpleAño = auto.año >= añoMin && auto.año <= añoMax;
        const cumpleKm = auto.kilometraje <= kmMax;
        
        console.log(`\nEvaluando auto: ${auto.marca} ${auto.modelo}`);
        console.log(`Cumple marca: ${cumpleMarca}`);
        console.log(`Cumple año: ${cumpleAño} (${auto.año} está entre ${añoMin} y ${añoMax})`);
        console.log(`Cumple kilometraje: ${cumpleKm} (${auto.kilometraje} <= ${kmMax})`);
        
        return cumpleMarca && cumpleAño && cumpleKm;
    });

    console.log('\nResultados de la búsqueda:', resultados);
    return resultados;
}


function iniciarBusqueda() {
    console.log('=== Iniciando nueva búsqueda ===');
    
    
    const marca = document.getElementById('marca').value;
    const añoMin = parseInt(document.getElementById('añoMin').value) || 2000;
    const añoMax = parseInt(document.getElementById('añoMax').value) || 2024;
    const kmMax = parseInt(document.getElementById('kmMax').value) || 999999;
    
    console.log('Valores obtenidos del formulario:');
    console.log({
        marca,
        añoMin,
        añoMax,
        kmMax
    });


    const resultados = buscarAuto(marca, añoMin, añoMax, kmMax);
    
    
    const resultadosSection = document.getElementById('resultados');
    console.log(`Limpiando sección de resultados anteriores`);
    resultadosSection.innerHTML = '';
    
    if (resultados.length === 0) {
        console.log('No se encontraron resultados');
        resultadosSection.innerHTML = '<p>No se encontraron autos que cumplan con los criterios especificados.</p>';
    } else {
        console.log(`Mostrando ${resultados.length} resultados encontrados`);
        resultados.forEach((auto, index) => {
            console.log(`\nCreando tarjeta para auto ${index + 1}:`, auto);
            const autoElement = document.createElement('div');
            autoElement.className = 'auto-card';
            autoElement.innerHTML = `
                <h3>${auto.marca} ${auto.modelo}</h3>
                <p>Año: ${auto.año}</p>
                <p>Kilometraje: ${auto.kilometraje}km</p>
                <p>Precio: $${auto.precio}</p>
            `;
            resultadosSection.appendChild(autoElement);
        });
    }
    
    console.log('=== Búsqueda completada ===\n');
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada - E-commerce de Autos iniciado');
    console.log('Inventario disponible:', inventario);
});


function mostrarDetallesAuto(auto) {
    console.group(`Detalles del auto: ${auto.marca} ${auto.modelo}`);
    console.log(`Marca: ${auto.marca}`);
    console.log(`Modelo: ${auto.modelo}`);
    console.log(`Año: ${auto.año}`);
    console.log(`Kilometraje: ${auto.kilometraje}km`);
    console.log(`Precio: $${auto.precio}`);
    console.groupEnd();
}
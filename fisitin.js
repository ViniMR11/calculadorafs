// Adiciona eventos de clique para cada imagem de objeto
document.querySelectorAll('.object-image').forEach(image => {
    image.addEventListener('click', function() {
        const objectData = JSON.parse(this.getAttribute('data-object'));
        document.getElementById('length').value = objectData.length;
        document.getElementById('width').value = objectData.width;
        document.getElementById('thickness').value = objectData.thickness;
        document.getElementById('density').value = objectData.density;
        document.getElementById('specificHeat').value = objectData.specificHeat;
        document.getElementById('temperatureChange').value = objectData.temperatureChange;
    });
});

// Calcula a energia com base nos valores inseridos
document.getElementById('energyCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const thickness = parseFloat(document.getElementById('thickness').value);
    const density = parseFloat(document.getElementById('density').value);
    const specificHeat = parseFloat(document.getElementById('specificHeat').value);
    const temperatureChange = parseFloat(document.getElementById('temperatureChange').value);

    // Calcula o volume
    const volume = length * width * thickness; // m³

    // Calcula a massa
    const mass = volume * density; // kg

    // Calcula a energia
    const energy = mass * specificHeat * temperatureChange; // J

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Energia necessária: ${energy.toFixed(2)} Joules`;
});

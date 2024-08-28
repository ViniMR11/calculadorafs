// Dados fictícios para os objetos da casa
const objectData = {
    airConditioner: {
        label: 'Ar Condicionado (R$)',
        data: [80, 75, 90, 85, 100, 95, 90, 110],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    },
    refrigerator: {
        label: 'Geladeira (R$)',
        data: [40, 38, 45, 42, 48, 50, 47, 49],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    },
    washingMachine: {
        label: 'Máquina de Lavar (R$)',
        data: [30, 28, 35, 32, 38, 40, 37, 39],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
    },
    heater: {
        label: 'Aquecedor (R$)',
        data: [50, 48, 55, 52, 58, 60, 57, 59],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
    }
};

// Configuração inicial do gráfico de objetos
const configObjectExpense = {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
        datasets: []
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Inicialização do gráfico
const objectExpenseChart = new Chart(
    document.getElementById('objectExpenseChart'),
    configObjectExpense
);

// Função para atualizar o gráfico ao clicar em um objeto
document.getElementById('objects').addEventListener('click', function(event) {
    const selectedObject = event.target.getAttribute('data-object');
    if (selectedObject) {
        const data = objectData[selectedObject];
        configObjectExpense.data.datasets = [data];
        objectExpenseChart.update();
    }
});

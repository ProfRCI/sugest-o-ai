const gameMap = document.getElementById('game-map');
const gameLog = document.getElementById('game-log');
const actionButton = document.getElementById('action-button');

let currentLocation = 0;

const locations = [
    { name: "Entrada da Floresta", description: "Você está na entrada da floresta misteriosa." },
    { name: "Árvore Antiga", description: "Você encontrou uma árvore antiga com inscrições misteriosas." },
    { name: "Ruínas Esquecidas", description: "Você chegou a antigas ruínas, vestígios de uma civilização perdida." },
    { name: "Caverna Oculta", description: "Uma caverna oculta, talvez a entrada para a cidade perdida?" },
    { name: "Cidade Perdida", description: "Você encontrou a cidade perdida! Parabéns!" }
];

function updateGameLog(message) {
    const p = document.createElement('p');
    p.textContent = message;
    gameLog.appendChild(p);
    gameLog.scrollTop = gameLog.scrollHeight;
}

function updateGameMap() {
    gameMap.innerHTML = `<h2>${locations[currentLocation].name}</h2><p>${locations[currentLocation].description}</p>`;
}

function nextLocation() {
    if (currentLocation < locations.length - 1) {
        currentLocation++;
        updateGameMap();
        updateGameLog(`Você chegou a ${locations[currentLocation].name}.`);
    } else {
        updateGameLog("Você completou a aventura!");
        actionButton.disabled = true;
    }
}

actionButton.addEventListener('click', nextLocation);

// Inicializa o jogo
updateGameMap();

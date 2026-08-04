const container = document.getElementById("heart-container");

let centroX;
let centroY;
let escala;

function atualizarTela() {
    centroX = window.innerWidth / 2;
    centroY = window.innerHeight / 2;
    escala = Math.min(window.innerWidth, window.innerHeight) / 35;
}

atualizarTela();
window.addEventListener("resize", atualizarTela);

const pontos = [];

// Gerando os pontos do coração
for (let t = 0; t < Math.PI * 2; t += 0.05) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) 
            - 5 * Math.cos(2 * t) 
            - 2 * Math.cos(3 * t) 
            - Math.cos(4 * t);

    pontos.push({ x: x, y: y });
}

// Criando e adicionando cada palavra aos poucos
pontos.forEach((ponto, indice) => {
    // O setTimeout garante o tempo de espera (40ms entre cada palavra)
    setTimeout(() => {
        const palavra = document.createElement("span");
        palavra.className = "word";
        palavra.textContent = "I love you";

        const posX = centroX + (ponto.x * escala);
        const posY = centroY - (ponto.y * escala);

        palavra.style.left = `${posX}px`;
        palavra.style.top = `${posY}px`;

        container.appendChild(palavra);
    }, indice * 40); // 40 milissegundos de intervalo
});
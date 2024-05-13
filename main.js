const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let minutos = Math.floor(minutos / 60);
    let horas = Math.floor(horas / 24);
    let dias = Math.floor(dias / 24);
    let anos = Math.floor(anos / 1);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [anos,dias,horas,minutos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("Anos"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("Dias"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("Horas"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("Mim"+i).textContent = calculaTempo(tempos[i])[3];   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();
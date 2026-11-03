const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

let atual = 0;

// Mostra o banner selecionado
function mostrarSlide(numero) {
    slides.forEach(function(slide) {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(function(indicador) {
        indicador.classList.remove("ativo");
    });

    slides[numero].classList.add("ativo");
    indicadores[numero].classList.add("ativo");

    atual = numero;
}

// Próximo banner
document.getElementById("proximo").onclick = function() {
    atual++;

    if (atual >= slides.length) {
        atual = 0;
    }

    mostrarSlide(atual);
};

// Banner anterior
document.getElementById("anterior").onclick = function() {
    atual--;

    if (atual < 0) {
        atual = slides.length - 1;
    }

    mostrarSlide(atual);
};

// Clicar nos indicadores
indicadores.forEach(function(indicador, indice) {
    indicador.onclick = function() {
        mostrarSlide(indice);
    };
});

// Troca de banner a cada 6 segundos
setInterval(function() {
    atual++;

    if (atual >= slides.length) {
        atual = 0;
    }

    mostrarSlide(atual);
}, 6000);

mostrarSlide(0);
var times = [
    {
        modalidade: "Basquete",
        nome: "Lakers",
        quantidadeJogadores: 12,
        cor: "dourado",
        brasao: "https://static.vecteezy.com/ti/vetor-gratis/p3/15863698-logotipo-do-los-angeles-lakers-em-fundo-transparente-gratis-vetor.jpg"
    },
    {
        modalidade: "Futebol",
        nome: "São Paulo",
        quantidadeJogadores: 11,
        cor: "vermelho",
        brasao: "https://w7.pngwing.com/pngs/182/887/png-transparent-sao-paulo-f-c-hd-logo-thumbnail.png"
    },
    {
        modalidade: "Vôlei",
        nome: "Flamengo",
        quantidadeJogadores: 6,
        cor: "vermelho",
        brasao: "https://pbs.twimg.com/profile_images/1218003253696389122/q3dwZhqe_400x400.jpg"
    }
];

// Função para mostrar as informações na página
function mostrarInformacoes(corSelecionada) {
    var divInfo = document.getElementById("times-info");
    divInfo.innerHTML = ""; // Limpa o conteúdo anterior

    if (corSelecionada) {
        // Filtra os times com a cor selecionada
        var timesFiltrados = times.filter(function (time) {
            return time.cor === corSelecionada;
        });

        if (timesFiltrados.length > 0) {
            timesFiltrados.forEach(function (time) {
                // Cria os elementos para mostrar as informações de cada time
                var pModalidade = document.createElement("p");
                pModalidade.textContent = "Modalidade: " + time.modalidade;
                var pNome = document.createElement("p");
                pNome.textContent = "Nome: " + time.nome;
                var pQuantidadeJogadores = document.createElement("p");
                pQuantidadeJogadores.textContent = "Quantidade de Jogadores: " + time.quantidadeJogadores;

                var imgBrasao = document.createElement("img");
                imgBrasao.src = time.brasao;
                imgBrasao.alt = "Brasão do Time";

                // Adiciona os elementos à div
                divInfo.appendChild(pModalidade);
                divInfo.appendChild(pNome);
                divInfo.appendChild(pQuantidadeJogadores);
                divInfo.appendChild(imgBrasao);
            });
        } else {
            divInfo.textContent = "Nenhum time encontrado com essa cor.";
        }
    } else {
        // Se nenhum parâmetro de cor for fornecido, exibe todas as informações dos times
        times.forEach(function (time) {
            var pModalidade = document.createElement("p");
            pModalidade.textContent = "Modalidade: " + time.modalidade;
            var pNome = document.createElement("p");
            pNome.textContent = "Nome: " + time.nome;
            var pQuantidadeJogadores = document.createElement("p");
            pQuantidadeJogadores.textContent = "Quantidade de Jogadores: " + time.quantidadeJogadores;

            var imgBrasao = document.createElement("img");
            imgBrasao.src = time.brasao;
            imgBrasao.alt = "Brasão do Time";

            // Adiciona os elementos à div
            divInfo.appendChild(pModalidade);
            divInfo.appendChild(pNome);
            divInfo.appendChild(pQuantidadeJogadores);
            divInfo.appendChild(imgBrasao);
        });
    }
}

// Variável de controle para rastrear se as informações estão visíveis ou não
var informacoesVisiveis = false;

// Associando a função ao botão
document.getElementById("mostrar-informacoes").addEventListener("click", function () {
    if (informacoesVisiveis) {
        document.getElementById("times-info").style.display = "none";
        informacoesVisiveis = false;
    } else {
        mostrarInformacoes();
        document.getElementById("times-info").style.display = "block";
        informacoesVisiveis = true;
    }
});

// Inicia as informações ocultas
document.getElementById("times-info").style.display = "none";

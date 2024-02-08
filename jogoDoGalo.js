const prompt = require('prompt-sync')({ sigint: true })

// Chave para  a condição de saida do while.
let chave = '0';

//Tabuleiro
let tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];

// validar o caracter no momento da escolha da variavel.
// Função para validar o caractere

function validarCaractere(char) {
    return char != '' && char != ' ';
};

// função para validar as posições das jogadas, se é número, se está no range de 0 até 2 tanto para x ou Y, e se a ppsição é vazia
function validarPosicoes(x, y) {

    if (!isNaN(x) && !isNaN(y) && x >= 0 && x <= 2 && y >= 0 && y <= 2 && x != '' && x != ' ' && y != '' && y != ' ' && tabuleiro[x][y] == ' ') {
        return true;
    }
    return false;
}


//  Inserir ajogada no tabuleiro, as coordenadas na matraz bidimensional são feitas através do x e Y, o char é o caractér que assumirá a posição no tabulero.
function inserirJogadaNoTabuleiro(tabuleiro, char, x, y) {
    tabuleiro[x][y] = char;
    return tabuleiro;
}

// Função padrão que vai iterar o tabuleiro e depois mostrar
function mostraTabuleiro(char1, char2, jogador1, jogador2) {

    for (let i = 0; i < tabuleiro.length; i++) {

        let linhacaracteres = "";

        for (let j = 0; j < tabuleiro[i].length; j++) {
            linhacaracteres += tabuleiro[i][j];

            if (j + 1 != tabuleiro[i].length) {
                linhacaracteres += "|";
            }
        }
        console.log(linhacaracteres);
    }
}

// limpar o tabuleiro
function limparTab() {
    tabuleiro = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];
}

// Essa função verifica o primeiro as linhas e colunas depois a diagonal
function ehOFim(tabuleiro, jogador1, jogador2) {
    // Essa função vai verificar as linhas e as colunas do jogador1
    for (let i = 0; i < 3; i++) {
        if ((tabuleiro[i][0] == jogador1 && tabuleiro[i][1] == jogador1 && tabuleiro[i][2] == jogador1) ||
            (tabuleiro[0][i] == jogador1 && tabuleiro[1][i] == jogador1 && tabuleiro[2][i] == jogador1)) {
            console.log('Fim de Jogo o ' + jogador1 + ' ganhou');
            
            return true;
        }
    }

    // Essa função vai verificar as diagonais do jogador 1
    if ((tabuleiro[0][0] == jogador1 && tabuleiro[1][1] == jogador1 && tabuleiro[2][2] == jogador1) ||
        (tabuleiro[0][2] == jogador1 && tabuleiro[1][1] == jogador1 && tabuleiro[2][0] == jogador1)) {
        console.log('Fim de Jogo o ' + jogador1 + ' ganhou');
        
        return true;
    }
    // Essa função vai verificar as linhas e as colunas do jogador2
    for (let i = 0; i < 3; i++) {
        if ((tabuleiro[i][0] == jogador2 && tabuleiro[i][1] == jogador2 && tabuleiro[i][2] == jogador2) ||
            (tabuleiro[0][i] == jogador2 && tabuleiro[1][i] == jogador2 && tabuleiro[2][i] == jogador2)) {
            console.log('Fim de Jogo o ' + jogador2 + ' ganhou');
            
            return true;
        }
    }

    // Essa função vai verificar as diagonais do jogador 2
    if ((tabuleiro[0][0] == jogador2 && tabuleiro[1][1] == jogador2 && tabuleiro[2][2] == jogador2) ||
        (tabuleiro[0][2] == jogador2 && tabuleiro[1][1] == jogador2 && tabuleiro[2][0] == jogador2)) {
        console.log('\n');
        console.log('Fim de Jogo o ' + jogador2 + ' ganhou');
        
        return true;
    }

    return verificarEmpate(tabuleiro);

}

// essa função vai verificar as condições de empate do jogo, esta sendo chamada na função acima
function verificarEmpate(tabuleiro) {
    // Verificar se todas as células foram preenchidas e nenhum jogador venceu
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            // Se houver uma célula vazia, o jogo não está empatado
            if (tabuleiro[i][j] == ' ') {
                return false;
            }
        }
    }
    // Vai verificar por fim se nenhum jogador venceu e todas as células foram preenchidas, portanto é um empate
    console.log('Fim de Jogo, empate!!!!!');
    return true;
}






// o while vai iniciar e enquanto a chave não for o nove, que é atribuido quando digitamos a opção 0 do menu e após confirmamos atribuimos a variável "chave" o valor para sair do while.
while (chave != '9') {

    //MENU DO JOGO//
    console.log('\n');
    console.log('   BEM VINDO AO JOGO DO GALO \n');
    console.log(' _____________________________');
    console.log('|    * MENU DO JOGO *         |');
    console.log('| 1 - MODO 1 JOGADOR          |');
    console.log('| 2 - MODO 2 JOGADORES        |');
    console.log('| 0 - PARA SAIR               |');
    console.log('|_____________________________|');


    opcao = prompt('Opção: ');

    switch (opcao) {
        case '1':
            inputNome1 = prompt('Digite o seu nome: ');
            jogador1 = inputNome1;
            inputChar1 = prompt('Qual o caracter que gostava de usar: ');

            validarCaractere(inputChar1);
            while (!validarCaractere(inputChar1)) {
                //console.log("Caractere inválido. ");
                inputChar1 = prompt('Digite um caractere válido: ');
            }

            console.log("Caractere válido: ", inputChar1);
            char1 = inputChar1;
            jogador2 = 'jogador2';
            char2 = 'O';

            //Testar se o caractere de um jogador é igual ao outro se for vai ser mudado para que não haja iguais.
            if (char1 == char2) {
                char2 = 'X';
            }
            console.log('Nome do Jogador 1 : ' + jogador1 + ' caracter: ' + char1);
            console.log('Nome do Jogador 2 : ' + jogador2 + ' caracter: ' + char2);

            // a função é o fim é chamada aqui ni argumento do While, ela é um bool, enquanto ela não for o fim vai ficar em LOOP.
            while (!ehOFim(tabuleiro, char1, char2)) {
                console.log('-----------------------');
                console.log('Digite a sua Jogada');
                i = prompt('Digite a posição X: ');
                j = prompt('Digite a posição Y: ');

                //Testo se a posição tem as condições ideais para seguir em frente e atribuir as variáveis
                while (!validarPosicoes(i, j)) {
                    console.log('Digitastes uma posição inválida.')
                    i = prompt('Digite novamente a posição X: ');
                    j = prompt('Digite novamente a posição Y: ');
                }
                //insere a jogado no tab
                inserirJogadaNoTabuleiro(tabuleiro, char1, i, j);

                //console log aqui somente para mostrar no console de quem é a vez daquela jogada.
                console.log('Minha vez, >>>>>>>>>>>>>>');
                // mostrea a jogada atual
                mostraTabuleiro(char1, char2, jogador1, jogador2);
                //Finalmente se chegou ao fim chamamos o break para parar.
                if (ehOFim(tabuleiro, char1, char2)) {
                    break;
                }

                //Adicionar ehOFim(tabuleiro, char1, char2)a Jogada do computador
                //jogadaTab(tabuleiro, char2, i, j);


                let invalida = true;
                while (invalida) {
                    let aleatorioX = Math.floor(Math.random() * 3);
                    let aleatorioY = Math.floor(Math.random() * 3);
                    if (tabuleiro[aleatorioX][aleatorioY] == ' ') {
                        tabuleiro[aleatorioX][aleatorioY] = char2;
                        invalida = false;
                    }
                }

                //chamar a função para mostra o tabuleiro
                console.log('A vez do computador,>>>>>>>');
                mostraTabuleiro(char1, char2, jogador1, jogador2);
            }

            limparTab();

            break;

        case '2':

            inputNome1 = prompt('Digite o seu nome: ');
            jogador1 = inputNome1;
            inputChar1 = prompt('Qual o caracter que gostava de usar: ');
            char1 = inputChar1;
            inputNome2 = prompt('Digite o seu nome: ');
            jogador2 = inputNome2;
            inputChar2 = prompt('Qual o caracter que gostava de usar: ');
            //para evitar que existam 2 caractér 
            if (inputChar2 == char1) {
                console.log('Caractér já escolhido.');
                inputChar2 = prompt('Digite outro: ');
            }
            char2 = inputChar2;
            console.log('Nome do Jogador 1 : ' + jogador1 + ' caracter: ' + char1);
            console.log('Nome do Jogador 2 : ' + jogador2 + ' caracter: ' + char2);

            while (!ehOFim(tabuleiro, char1, char2)) {
                console.log('Jogador 1');
                console.log('Digite a sua Jogada');
                i = prompt('Digite a posição X: ');
                j = prompt('Digite a posição Y: ');

                while (!validarPosicoes(i, j)) {
                    console.log('Digitastes uma posição inválida.')
                    i = prompt('Digite novamente a posição X: ');
                    j = prompt('Digite novamente a posição Y: ');
                }


                //Verificar se a posição não está ocupada
                //aqui coloca a jogada no tabuleiro
                inserirJogadaNoTabuleiro(tabuleiro, char1, i, j);

                //Função para mostraro o tabuleiro
                mostraTabuleiro(char1, char2, jogador1, jogador2);

                if (ehOFim(tabuleiro, char1, char2)) {
                    break;
                }

                console.log('Jogador 2');
                console.log('Digite a sua Jogada');
                i = prompt('Digite a posição X: ');
                j = prompt('Digite a posição Y: ');

                while (!validarPosicoes(i, j)) {
                    console.log('Digitastes uma posição inválida.')
                    i = prompt('Digite novamente a posição X: ');
                    j = prompt('Digite novamente a posição Y: ');
                }

                //aqui inseri a jogada no tabuleiro
                inserirJogadaNoTabuleiro(tabuleiro, char2, i, j);

                //chamar a função para mostrar o tabuleiro
                mostraTabuleiro(char1, char2, jogador1, jogador2);

                if (ehOFim(tabuleiro, char1, char2)) {
                    break;
                }

            }
            limparTab();
            break;


        case '0':
            if (opcao == '0') {
                console.log('Tem certeza que deseja sair? ');
                let querSair = prompt('Digite 1 pra sair e 2 pra voltar ao menu: ');
                if (querSair == '1') {
                    chave = '9';
                } else {
                    chave = '0';
                }
            }
            break;

        default:
            break;
    }
}
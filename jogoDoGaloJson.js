const prompt = require('prompt-sync')({ sigint: true })
// Chave para o while tesar a condição de saida.
let chave = '0';

//Tabuleiro
let tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];

//Variaveis
// let char1 = '';
// let char2 = '';
// let jogador1 = '';
// let jogador2 = '';
// let posicao_i = '';
// let posicao_j = '';


// FUNÇÕES

function inserirJogadaNoTabuleiro(tabuleiro, char, x, y) {
    tabuleiro[x][y] = char;
    return tabuleiro;
}


function mostraTabuleiro(char1, char2, jogador1, jogador2) {

    //let tabuleiro = limparTab(); -> não vou precisar aqui

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


function limparTab() {
    tabuleiro = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];
}


function ehOFim(tabuleiro, jogador1, jogador2) {
    // Essa função vai verificar as linhas e as colunas do 
    for (let i = 0; i < 3; i++) {
        if ((tabuleiro[i][0] == jogador1 && tabuleiro[i][1] == jogador1 && tabuleiro[i][2] == jogador1) ||
            (tabuleiro[0][i] == jogador1 && tabuleiro[1][i] == jogador1 && tabuleiro[2][i] == jogador1)) {
            console.log('Fim de Jogo o ' + jogador1 + ' ganhou');
            return true;
        }
    }

    // Essa função vai verificar as diagonais
    if ((tabuleiro[0][0] == jogador1 && tabuleiro[1][1] == jogador1 && tabuleiro[2][2] == jogador1) ||
        (tabuleiro[0][2] == jogador1 && tabuleiro[1][1] == jogador1 && tabuleiro[2][0] == jogador1)) {
        console.log('Fim de Jogo o ' + jogador1 + ' ganhou');
        return true;
    }

    for (let i = 0; i < 3; i++) {
        if ((tabuleiro[i][0] == jogador2 && tabuleiro[i][1] == jogador2 && tabuleiro[i][2] == jogador2) ||
            (tabuleiro[0][i] == jogador2 && tabuleiro[1][i] == jogador2 && tabuleiro[2][i] == jogador2)) {
            console.log('Fim de Jogo o ' + jogador2 + ' ganhou');
            return true;
        }
    }

    // Verificar diagonais
    if ((tabuleiro[0][0] == jogador2 && tabuleiro[1][1] == jogador2 && tabuleiro[2][2] == jogador2) ||
        (tabuleiro[0][2] == jogador2 && tabuleiro[1][1] == jogador2 && tabuleiro[2][0] == jogador2)) {

        console.log('Fim de Jogo o ' + jogador2 + ' ganhou');
        return true;
    }

    return false;
}

// Apagar pois n]ao preciso
//function configJogo(escolha) {

//}


while (chave != '9') {

    //MENU DO JOGO//
    console.log('\n');
    console.log('   BEM VINDO AO JOGO DO GALO \n');
    console.log(' _____________________________');
    console.log('|    * MENU DO JOGO *         |');
    console.log('| 1 - MODO 1 JOGADOR          |');
    console.log('| 2 - MODO 2 JOGADORES        |');
    console.log('| 6 - VER HISTORICO           |');
    console.log('| 0 - PARA SAIR               |');
    console.log('|_____________________________|');


    opcao = prompt('Opção: ');

    switch (opcao) {
        case '1':
            inputNome1 = prompt('Digite o seu nome: ');
            jogador1 = inputNome1;
            inputChar1 = prompt('Qual o caracter que gostava de usar: ');
            char1 = inputChar1;
            jogador2 = 'jogador2';
            char2 = 'O';

            //Testar se o caracter do char1 == ao do char2.
            if(char1 == char2){
                char2 = 'X';
            }

            console.log('Nome do Jogador 1 : ' + jogador1 + ' caracter: ' + char1);
            console.log('Nome do Jogador 2 : ' + jogador2 + ' caracter: ' + char2);

            //Tenho que consertar essa parte, deveria ser um while 
            //enquanto o jogo não terminou pois quando digitava as variaveis x e y, 
            //voltava para o inicio do menu e não checava as posiçºoes do array
            //fica pedindo para entrar a jogada, dando erro, rever

            while (!ehOFim(tabuleiro, char1, char2)) {
                console.log('-----------------------');
                console.log('Digite a sua Jogada');
                i = prompt('Digite a posição X: ');
                j = prompt('Digite a posição Y: ');

                if(i != 0 || i != 1 || i|| 2 && j != 0 || j != 1 || j|| 2){
                    console.log('Digite uma posição válida entre 0 até 2');
                }

                inserirJogadaNoTabuleiro(tabuleiro, char1, i, j);
                
                console.log('\n');
                console.log('Minha vez, >>>>>>>>>>>>>>\n');
                mostraTabuleiro(char1, char2, jogador1, jogador2);
                //Adicionar a Jogada do computador
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
                console.log('\n');
                console.log('A vez do computador,>>>>>>>\n');
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
            char2 = inputChar2;
            console.log('Nome do Jogador 1 : ' + jogador1 + ' caracter: ' + char1);
            console.log('Nome do Jogador 2 : ' + jogador2 + ' caracter: ' + char2);

            while (!ehOFim(tabuleiro, inputChar1, char2)) {
                console.log('-----------xx------------');

                let invalida = true;
                while (invalida) {

                    console.log('Jogador1 Digite a sua Jogada');
                    i = prompt('Jogador1 Digite a posição X: ');
                    j = prompt('Jogador1 Digite a posição Y: ');

                    if (tabuleiro[i][j] == ' ') {
                        invalida = false;

                    }
                    else {
                        console.log('Entrada inválida');
                    }
                }

                //Verificar se a posição não está ocupada
                //aqui coloca a jogada no tabuleiro
                inserirJogadaNoTabuleiro(tabuleiro, char1, i, j);

                //Função para mostraro o tabuleiro
                mostraTabuleiro(char1, char2, jogador1, jogador2);

                invalida = true;

                while (invalida) {

                    console.log('Jogador2 Digite a sua Jogada');
                    i = prompt('Jogador2 Digite a posição X: ');
                    j = prompt('Jogador2 Digite a posição Y: ');

                    if (tabuleiro[i][j] == ' ') {
                        invalida = false;
                    }
                    else {
                        console.log('Entrada inválida');
                    }
                }

                //aqui inseri a jogada no tabuleiro
                inserirJogadaNoTabuleiro(tabuleiro, char2, i, j);

                //chamar a função para mostrar o tabuleiro
                mostraTabuleiro(char1, char2, jogador1, jogador2);

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
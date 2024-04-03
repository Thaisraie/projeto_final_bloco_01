import readlinesync = require("readline-sync");

export function main() {

    let opcao;

    while (true) {

        console.log("✦—————————————————————————————————————————————————————✦");
        console.log("                                                     ");
        console.log("                   RAIE ✿  MAKEUP                    ");
        console.log("                                                     ");
        console.log("✦—————————————————————————————————————————————————————✦");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar Produto pelo ID               ");
        console.log("            4 - Atualizar produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("✦—————————————————————————————————————————————————————✦");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("✦—————————————————————————————————————————————————————✦");
            console.log("\n    Obrigado(a) pela preferência, Volte sempre! ♥");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");

                switch (opcao) {
                    case 1:
                        readlinesync.question("Digite o nome do produto: ");
                        break;
                }
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                break;

            case 3:
                console.log("\n\nBuscar Produto pelo ID\n\n");
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}


function sobre(): void {
    console.log("\n");
    console.log("✦—————————————— Projeto Desenvolvido por: ——————————————✦");
    console.log("\n");
    console.log("           Thais Siqueira, contato no link abaixo:       ");
    console.log("          https://www.linkedin.com/in/thaisqusi/");
    console.log("\n");
    console.log("✦———————————————————————————————————————————————————————✦");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
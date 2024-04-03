import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Batom } from "./src/model/Batom";
import { Gloss } from "./src/model/Gloss";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, marca, cor, essencia: string;
    let tipoProduto = ['Hidratante', 'Cintilante'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Batom(produtoController.gerarId(), "batom", "tracta", 1, 100.00, "Vermelho"));

    produtoController.cadastrar(new Gloss(produtoController.gerarId(), "gloss", "Ruby Rose", 2, 90.00, "Baunilha"));

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
                console.log("\n✦—————————————— Cadastrar produto ——————————————✦\n");

                nome = readlinesync.question("Digite o nome do produto: ");

                marca = readlinesync.question("Digite a marca do produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        cor = readlinesync.question(`Digite a Cor do ${nome}: `);
                        produtoController.cadastrar(new Batom(produtoController.gerarId(),
                            nome, marca, tipo, preco, cor));
                        break;
                    case 2:
                        essencia = readlinesync.question(`Digite a Essencia do ${nome}: `);
                        produtoController.cadastrar(new Gloss(produtoController.gerarId(),
                            nome, marca, tipo, preco, essencia));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produtoController.listarTodas();

                keyPress()
                break;

            case 3:
                console.log("\n\nBuscar Produto pelo ID\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto");

                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar produto\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                let produto = produtoController.buscarNoArray(id);

                if (produto !== null){

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;
        
                    preco = readlinesync.questionFloat("Digite o preco: ");
                    
                    switch (tipo) {
                        case 1:
                            cor = readlinesync.question(`Digite a Cor do ${nome}: `);
                            produtoController.atualizar(new Batom(id, nome, "marca", tipo, preco, cor));
                            break;
                        case 2:
                            essencia = readlinesync.question(`Digite a Essencia do ${nome}: `);
                            produtoController.atualizar(new Gloss(id, nome, "marca", tipo, preco, essencia));

                            break;
                    }
                 

                }else
                    console.log("\nProduto não Encontrado!");

                keyPress()
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id);
                
                keyPress()        
                break;
            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress()
                break;
        }
    }

}


function sobre(): void {
    console.log("\n");
    console.log("✦—————————————— Projeto Desenvolvido por: ——————————————✦");
    console.log("\n");
    console.log("      Thais Siqueira. Entre em contato no link abaixo:       ");
    console.log("          https://www.linkedin.com/in/thaisqusi/");
    console.log("\n");
    console.log("✦———————————————————————————————————————————————————————✦");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
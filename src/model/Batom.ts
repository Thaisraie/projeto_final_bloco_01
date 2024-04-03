import { Produto } from "./Produto";

export class Batom extends Produto {

    private _cor: string;

    constructor(id: number, nome: string, marca: string, tipo: number, preco: number, cor: string) {
        super(id, nome, marca, tipo, preco) 
		this._cor = cor;
	}

	public get cor(): string {
		return this._cor;
	}

	public set cor(value: string) {
		this._cor = value;
	}

    public visualizar(): void {
        super.visualizar();
		console.log(`                 Cor do ${this.nome}: ${this._cor}`)
    }
}
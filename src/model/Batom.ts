import { Produto } from "./Produto";

export class Batom extends Produto {

    private _cor: string;

    constructor(cor: string, id: number, nome: string, tipo: number, preco: number) {
        super(id, nome, tipo, preco) 
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
        console.log(`Cor: ${this._cor}`);
    }
}
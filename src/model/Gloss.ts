import { Produto } from "./Produto";

export class Gloss extends Produto {

    private _essencia: string;  

	constructor(id: number, nome: string, marca: string, tipo: number, preco: number, essencia: string) {
        super(id, nome, marca, tipo, preco) 
		this._essencia = essencia;
	}

	public get essencia(): string {
		return this._essencia;
	}


	public set essencia(value: string) {
		this._essencia = value;
	}

    public visualizar(): void {
        super.visualizar();
		console.log(`                 Essencia do ${this.nome}: ${this._essencia}`) 
    }
}
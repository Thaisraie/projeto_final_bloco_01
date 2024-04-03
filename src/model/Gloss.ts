import { Produto } from "./Produto";

export class Gloss extends Produto {

    private _essencia: string;  

	constructor(essencia: string, id: number, nome: string, tipo: number, preco: number) {
        super(id, nome, tipo, preco) 
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
        console.log(`Essencia: ${this._essencia}`);  
    }
}
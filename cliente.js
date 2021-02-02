export class Cliente {
    email;
    _senha;

    constructor(email, senha) {
        this.email = email;
        this._senha = senha;
    }

    autenticar(senha) {
        if(senha == this._senha) return true;
        return false;
    }
}
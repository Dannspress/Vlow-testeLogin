export class Cliente {
    email;
    _senha;

    constructor(email, senha) {
        this.email = email;
        this._senha = senha;
    }

    autenticar(email, senha) {
        if(senha == this._senha && email == this.email) return true;
        return false;
    }

    // autenticar(email) {
    //     if(email == this.email) return true;
    //     return false;
    // }
}
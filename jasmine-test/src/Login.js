function loginClient(email, senha) {
  class Cliente {
    email;
    _senha;

    constructor(email, senha) {
      this.email = email;
      this._senha = senha;
    }

    autenticar(email, senha) { //método
      if (senha == this._senha && email == this.email) {
        return true
      } else {
        return false;
      }
    }
  }

  class ValidacaoSistema {
    static login(autenticavel, email, senha) {
      if (ValidacaoSistema.ehAutenticavel(autenticavel)) {
        return autenticavel.autenticar(email, senha);
      }
      return false;
    }

    static ehAutenticavel(autenticavel) {
      return 'autenticar' in autenticavel;
    }
  }

  let cliente = new Cliente(email, senha);
  return ValidacaoSistema.login(cliente, 'danielwalterwork@gmail.com', 'AA123aabc');

}
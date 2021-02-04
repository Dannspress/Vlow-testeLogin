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
        if (senha != this._senha) {
          return false
        } else {
          if (this.email == '') {
            return false
          }else {
            if (this.email.indexOf('@') < 1) {
              return 'Acrescente um @ ao endereço de E-mail'
            } else {
              if (this.email[this.email.length -1] == '@') {
                return 'Adicione algo após o @'
              }else {
                return false
              }
            }
          }
        };
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
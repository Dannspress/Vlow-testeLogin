export class ValidacaoSistema {
    static login(autenticavel, email, senha) {
        if(ValidacaoSistema.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(email, senha);
        }

       // return autenticavel.autenticar(email;)
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel;
    }
}
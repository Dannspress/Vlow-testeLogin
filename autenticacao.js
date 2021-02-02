export class ValidacaoSistema {
    static login(autenticavel, senha) {
        if(ValidacaoSistema.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel;
    }
}
describe('LOGIN TEST', () => {

    describe('Login VÁLIDO!', () => {
        describe('Login válido!', () => {
            it('Testar Senha e E-mail corretos', () => {
                expect(loginClient('danielwalterwork@gmail.com', 'AA123aabc')).toBeTruthy();
            });
        });
    });

    describe('Login INVÁLIDO!', () => {
        describe('SENHA', () => {
            it('Testar Senha incorreta (erro de digitação)', () => {
                expect(loginClient('danielwalterwork@gmail.com', 'A1B1C3')).toBeFalse();
            });

            it('Testar Senha incorreta (deixado em branco)', () => {
                expect(loginClient('danielwalterwork@gmail.com', '')).toBeFalse();
            });
        })

        describe('E-MAIL', () => {
            it('Testar E-mail incorreto (falta @)', () => {
                expect(loginClient('danielwalterwork', 'AA123aabc')).toBe('Acrescente um @ ao endereço de E-mail');
            });

            it('Testar E-mail incorreto (nada após o @)', () => {
                expect(loginClient('danielwalterwork@', 'AA123aabc')).toBe('Adicione algo após o @');
            });
            
            it('Testar E-mail incorreto (erro de digitação)', () => {
                expect(loginClient('danielwalter@gmail.com', 'AA123aabc')).toBeFalse();
            });

            it('Testar E-mail incorreto (deixado em branco)', () => {
                expect(loginClient('', 'AA123aabc')).toBeFalse();
            });
        })

        describe('SENHA & E-MAIL', () => {
            it('Testar E-mail e Senha incorretos (erro de digitação)', () => {
                expect(loginClient('danielwalter@gmail.com', 'A1B1C3')).toBeFalse();
            });

            it('Testar E-mail e Senha incorretos (deixado em branco)', () => {
                expect(loginClient('', '')).toBeFalse();
            });
        })
    });
});
import { ValidacaoSistema } from "./autenticacao.js";
import { Cliente } from './cliente.js';

const cliente = new Cliente('danielwalterwork@gmail.com', 'AA123aabc');

const clienteLogin = ValidacaoSistema.login(cliente, 'AA123aabc')
console.log(clienteLogin);
import React, { useState, useEffect } from 'react';
import {
  LoginContainer,
  AnimatedCircle,
  Text,
  Form,
  Field,
  Input,
  Button,
  Link,
  Icon,
  LogoContainer,
  LogoImage,
  ErrorText,
} from '../Login/stylesLogin';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import logoImage from '../../img/Games.png';

const Cadastro = () => {
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [emailTelefone, setEmailTelefone] = useState('');
  const [cadastrosAnteriores, setCadastrosAnteriores] = useState([]);
  const [errorSenha, setErrorSenha] = useState('');
  const [errorConfirmaSenha, setErrorConfirmaSenha] = useState('');
  const [errorCadastro, setErrorCadastro] = useState('');

  useEffect(() => {
    if (confirmaSenha && senha !== confirmaSenha) {
      setErrorConfirmaSenha('As senhas não coincidem');
    } else {
      setErrorConfirmaSenha('');
    }


    if (senha.length > 0 && senha.length < 6) {
      setErrorSenha('A senha deve ter pelo menos 6 caracteres');
    } else {
      setErrorSenha('');
    }

    if (cadastrosAnteriores.includes(emailTelefone)) {
      setErrorCadastro('O email ou telefone já foi cadastrado anteriormente');
    } else {
      setErrorCadastro('');
    }
  }, [senha, confirmaSenha, emailTelefone, cadastrosAnteriores]);

  const carregarCadastrosAnteriores = () => {

    const dadosExemplo = [];
    setCadastrosAnteriores(dadosExemplo);
  };


  useEffect(() => {
    carregarCadastrosAnteriores();
  }, []);

  const handleCadastrar = () => {
    if (!errorSenha && !errorConfirmaSenha && !errorCadastro) {
      console.log('Cadastro realizado com sucesso');

    }
  };

  return (
    <LoginContainer>
      <AnimatedCircle />
      <Text>Cadastre-se no Game Quest World</Text>
      <Form>
        <Field>
          <Icon className="icon">
            <FaEnvelope style={Icon.iconStyle} />
          </Icon>
          <Input
            type="text"
            placeholder="Email ou Telefone"
            value={emailTelefone}
            onChange={(e) => setEmailTelefone(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Icon className="icon">
            <FaLock style={Icon.iconStyle} />
          </Icon>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Icon className="icon">
            <FaLock style={Icon.iconStyle} />
          </Icon>
          <Input
            type="password"
            placeholder="Confirma Senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            required
          />
        </Field>
        <ErrorText error={errorSenha}>{errorSenha}</ErrorText>
        <ErrorText error={errorConfirmaSenha}>{errorConfirmaSenha}</ErrorText>
        <ErrorText error={errorCadastro}>{errorCadastro}</ErrorText>
        <Button onClick={handleCadastrar}>CADASTRAR</Button>
        <Link>
          Já tem uma conta?
          <a href="#"> Entrar</a>
        </Link>
      </Form>
      <LogoContainer>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoContainer>
    </LoginContainer>
  );
};

export default Cadastro;

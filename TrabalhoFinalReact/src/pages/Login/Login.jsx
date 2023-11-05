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
} from './stylesLogin';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import logoImage from '../../img/Games.png';

const Login = () => {
  const [senha, setSenha] = useState('');
  const [emailTelefone, setEmailTelefone] = useState('');
  const [errorSenha, setErrorSenha] = useState('');

  useEffect(() => {

    if (senha.length > 0 && senha.length < 6) {
      setErrorSenha('A senha deve ter pelo menos 6 caracteres');
    } else {
      setErrorSenha('');
    }
  }, [senha]);

  const handleEntrar = () => {
    if (!errorSenha) {
      console.log('Login realizado com sucesso');

    }
  };

  return (

    <>
    
    <LoginContainer>
      <AnimatedCircle />
      <Text>Faça login no Game Quest World</Text>
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
        <ErrorText error={errorSenha}>{errorSenha}</ErrorText>
        <Button onClick={handleEntrar}>ENTRAR</Button>
        <Link>
          Esqueceu a senha?
          <a href="#"> Clique Aqui!</a>
        </Link>
      </Form>
      <LogoContainer>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoContainer>
    </LoginContainer>
    </>
  );
};

export default Login;

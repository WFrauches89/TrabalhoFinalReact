import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../global/globalStyle';
import {NavLogin} from '../../components/NavBarLogin/index';
import {Footer} from '../../components/footer/index';
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
import instance from '../../services/api';

const Login = () => {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [errorCadastro, setErrorCadastro] = useState('');
  const [cadastrosAnteriores, setCadastrosAnteriores] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');


  const carregarCadastrosAnteriores = async () => {
    try {
      const response = await instance.get("/cadastros");
      setCadastrosAnteriores(response.data);
     console.log(response.data);
    } catch (error) {
      console.error("Erro ao carregar cadastros anteriores", error);
    }
  };
  useEffect(() => {
    carregarCadastrosAnteriores();
  }, [email]);

  const handleEntrar = async () => {
    if (email === '' || senha === '') {
      setLoginError('Preencha todos os campos.');
      setLoginSuccess('');
      return;
    }
    for (const element of cadastrosAnteriores){
      console.log(element.email === email )
      console.log(element.senha === senha )
      if (element.email === email && element.senha ===senha) {
        window.location.href = '/home';
        return
      }
      else{
        setLoginSuccess('');
      }
    }
  };

  return (
    <>
      <NavLogin />
      <GlobalStyle />
      <LoginContainer>
        <AnimatedCircle />
        <Text>Faça login no Game Quest World</Text>
      
          <Field>
            <Icon className="icon">
              <FaEnvelope />
            </Icon>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Icon className="icon">
              <FaLock />
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
          <ErrorText error={errorCadastro}>{errorCadastro}</ErrorText>
          <ErrorText error={loginError}>{loginError}</ErrorText>
          <ErrorText error={loginSuccess}>{loginSuccess}</ErrorText>
          <Button onClick={handleEntrar}>ENTRAR</Button>
          <Link>
            Não possui conta?
            <a href="/cadastro"> Clique Aqui!</a>
          </Link>
        
        <LogoContainer>
          <LogoImage src={logoImage} alt="Logo" />
        </LogoContainer>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;

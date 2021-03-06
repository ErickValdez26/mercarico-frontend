import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './Style';
import Logo from '../../assets/logo.svg';

const LoginPage = () => {
    return (
        <Container>
            <img src={Logo} alt="mercado"/>
            <Wrapper>
                <h2>Inicio de sesión</h2>
                <LoginForm />
                <p>Ayudanos a crecer en todo el Perú</p>
                <Link className="link" to="/new-account">¿No tienes una cuenta? Registrese aquí!</Link>
            </Wrapper>
        </Container>
    )
}

export default LoginPage;
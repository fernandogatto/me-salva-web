import React from 'react';

import {
    Container as MaterialContainer,
    Box,
    Typography,
} from '@mui/material';

import { logo } from '@/assets';

import { Container } from './styles';
import { NavLink } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer = (): JSX.Element => {
    return (
        <Container>
            <MaterialContainer className="footer-row">
                <Box className="logo-footer-container">
                    <img
                        src={logo}
                        alt="Logo"
                        className="logo"
                    />

                    <Typography className="description">
                        uAcademy {currentYear}
                    </Typography>

                    <Typography className="description">
                        Nenhum direito reservado
                    </Typography>
                </Box>

                <Box>
                    <nav>
                        <NavLink
                            to="/"
                            activeClassName="active"
                        >
                            Início
                        </NavLink>

                        <NavLink
                            to="/cursos"
                            activeClassName="active"
                        >
                            Cursos
                        </NavLink>

                        <NavLink
                            to="/planos"
                            activeClassName="active"
                        >
                            Planos
                        </NavLink>
                    </nav>
                </Box>
            </MaterialContainer>
        </Container>
    );
}

export default Footer;

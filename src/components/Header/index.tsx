import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import {
    Box,
    Button,
    Drawer,
    IconButton,
} from '@mui/material';

import { Close, Menu as MenuIcon } from '@mui/icons-material';

import { logo } from '@/assets';

import { Container } from './styles';

const Header = () => {
    const [mobileView, setMobileView] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth <= 768
                ? setMobileView(true)
                : setMobileView(false);
        }

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const NavBar = () => (
        <>
            {mobileView && (
                <IconButton
                    aria-label="Fechar"
                    aria-haspopup={false}
                    edge="end"
                    onClick={() => setMenuIsOpen(false)}
                >
                    <Close />
                </IconButton>
            )}

            <Box className="container-actions-header">
                <nav>
                    <NavLink
                        to="/"
                        exact
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

                <Button
                    aria-label="Fazer login"
                    variant="outlined"
                    component={Link}
                    to="/login"
                    target="_blank"
                    className="login"
                >
                    Entrar
                </Button>
            </Box>
        </>
    );

    const displayDesktop = () => {
        return <NavBar />;
    }

    const displayMobile = () => {
        return menuIsOpen && (
            <Drawer
                anchor="right"
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
            >
                <NavBar />
            </Drawer>
        );
    }

    return (
        <Container className="container-header">
            <Box className="header-row">
                <img
                    src={logo}
                    alt="Logo"
                />

                {mobileView && (
                    <IconButton
                        aria-label="Menu"
                        aria-haspopup={true}
                        edge="start"
                        onClick={() => setMenuIsOpen(true)}
                        className="menu-button"
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {mobileView ? displayMobile() : displayDesktop()}
            </Box>
        </Container>
    );
}

export default Header;

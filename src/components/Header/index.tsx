import React from 'react';

import {
    Box,
} from '@mui/material';

import { logo } from '@/assets';

import { Container } from './styles';

const Header = () => {
    return (
        <Container className="container-header">
            <Box className="header-row">
                <img
                    src={logo}
                    alt="Logo"
                />
            </Box>
        </Container>
    );
}

export default Header;

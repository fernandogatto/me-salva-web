import React from 'react';

import {
    Container as MaterialContainer,
    Box,
    Typography,
} from '@mui/material';

import { Container } from './styles';

import Title from '../Title';

const Footer = (): JSX.Element => {
    return (
        <Container>
            <MaterialContainer className="container-footer">
                <Title
                    dataAos="fade-up"
                    style={{ color: '#FFF' }}
                >
                    Fim do curso
                </Title>
            </MaterialContainer>
        </Container>
    );
}

export default Footer;

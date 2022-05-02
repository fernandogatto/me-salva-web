import React, { useEffect, useState } from 'react';

import {
    Box,
    Container as MaterialContainer,
    Typography,
} from '@mui/material';

import {
    Footer,
    Header,
    TabContainer,
    Welcome,
    Title,
    FloatContainer,
} from '@/components';

import { student } from '@/assets';

import { Container } from './styles';

const Home = (): JSX.Element => {
    return (
        <Container>
            <Header />

            <FloatContainer>
                <Box className="float-content-children">
                    <Title variant="h6">
                        Conteúdo
                    </Title>

                    <nav>
                        <Box className="nav-item">
                            <a
                                href="#summary"
                            >
                                Sumário
                            </a>
                        </Box>

                        <Box className="nav-item">
                            <a href="#summary">
                                Trilha de aprendizado
                            </a>
                        </Box>
                    </nav>
                </Box>
            </FloatContainer>

            <Welcome />

            <MaterialContainer className="container-info-about">
                <Box className="container-about">
                    <Typography className="description">
                        Eduquem as crianças e não será necessário castigar os homens.
                    </Typography>

                    <Title variant="h2" dataAos="fade-up">
                        Pitágoras
                    </Title>
                </Box>
            </MaterialContainer>

            <MaterialContainer>
                <Box className="container-summary" id="">
                    <Box className="summary-item">
                        <Title variant="h3" dataAos="fade-right">
                            Sumário
                        </Title>

                        <Box className="container-grid">
                            <Box
                                className="item-grid"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                <Title variant="h3">
                                    Regra de três
                                </Title>

                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </Box>

                            <Box
                                className="item-grid"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-offset="100"
                            >
                                <Title variant="h3">
                                    Área e volume
                                </Title>

                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </Box>

                            <Box
                                className="item-grid"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-offset="200"
                            >
                                <Title variant="h3">
                                    Porcentagem
                                </Title>

                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </Box>

                            <Box
                                className="item-grid"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-offset="300"
                            >
                                <Title variant="h3">
                                    Moda e mediana
                                </Title>

                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="summary-item">
                        <img
                            src={student}
                            alt="Estudante"
                        />
                    </Box>
                </Box>
            </MaterialContainer>

            <TabContainer />

            <Footer />
        </Container>
    );
}

export default Home;

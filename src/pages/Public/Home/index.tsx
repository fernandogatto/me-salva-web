import React from 'react';

import { Link } from 'react-router-dom';

import {
    Box,
    Container as MaterialContainer,
    Typography,
} from '@mui/material';

import {
    Footer,
    Header,
    Plans,
    MainCourses,
    Welcome,
    Title,
} from '@/components';

import { student } from '@/assets';

import { Container } from './styles';

const Home = (): JSX.Element => {
    return (
        <Container>
            <Header />

            <Welcome />

            <MaterialContainer className="container-info-about">
                <Box className="container-about">
                    <Title variant="h2" dataAos="fade-up">
                        Sobre nós
                    </Title>

                    <Box className="container-numbers">
                        <Box
                            className="container-item"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            <Typography className="number">
                                +40 mil
                            </Typography>

                            <Typography className="description">
                                Estudantes
                            </Typography>
                        </Box>

                        <Box
                            className="container-item"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-offset="100"
                        >
                            <Typography className="number">
                                +12 mil
                            </Typography>

                            <Typography className="description">
                                Usuários ativos
                            </Typography>
                        </Box>

                        <Box
                            className="container-item"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-offset="200"
                        >
                            <Typography className="number">
                                +100
                            </Typography>

                            <Typography className="description">
                                Horas de conteúdo
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </MaterialContainer>

            <MaterialContainer>
                <Box className="container-evolution">
                    <Box className="evolution-item">
                        <Title variant="h3" dataAos="fade-right">
                            Por que escolher a uAcademy?
                        </Title>

                        <Box className="container-grid">
                            <Box
                                className="item-grid"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                <Title variant="h3">
                                    Formação completa
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
                                    Aulas avançadas
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
                                    Especialização
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
                                    Monitoria
                                </Title>

                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="evolution-item">
                        <img
                            src={student}
                            alt="Estudante"
                        />
                    </Box>
                </Box>
            </MaterialContainer>

            <MainCourses />

            <Plans />

            <Footer />
        </Container>
    );
}

export default Home;

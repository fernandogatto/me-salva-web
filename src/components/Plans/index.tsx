import React from 'react';

import Title from '../Title';

import {
    Container as MaterialContainer,
    Box,
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
} from '@mui/material';

import { Container } from './styles';

const Plans = (): JSX.Element => {
    return (
        <Container className="plans-container">
            <MaterialContainer>
                <Title
                    variant="h2"
                    dataAos="fade-up"
                >
                    Nossos planos
                </Title>

                <Box className="plans-grid">
                    <Card
                        className="plan-item"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                    >
                        <CardContent>
                            <Title variant="h4">
                                Essentials
                            </Title>

                            <Typography className="description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Typography>

                            <Typography className="description">
                                Plano mensal
                            </Typography>

                            <Title variant="h5" style={{ textAlign: 'left' }}>
                                R$ 10,00
                            </Title>
                        </CardContent>

                        <CardActions>
                            <Button
                                aria-label="Garantir Essentials"
                                variant="contained"
                            >
                                Garantir
                            </Button>
                        </CardActions>
                    </Card>

                    <Card
                        className="plan-item"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-offset="100"
                    >
                        <CardContent>
                            <Title variant="h4">
                                Pro
                            </Title>

                            <Typography className="description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Typography>

                            <Typography className="description">
                                Plano mensal
                            </Typography>

                            <Title variant="h5" style={{ textAlign: 'left' }}>
                                R$ 100,00
                            </Title>
                        </CardContent>

                        <CardActions>
                            <Button
                                aria-label="Garantir Pro"
                                variant="contained"
                            >
                                Garantir
                            </Button>
                        </CardActions>
                    </Card>

                    <Card
                        className="plan-item"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-offset="200"
                    >
                        <CardContent>
                            <Title variant="h4">
                                Ultimate
                            </Title>

                            <Typography className="description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Typography>

                            <Typography className="description">
                                Plano mensal de <strong><s>R$ 400,00</s></strong> por
                            </Typography>

                            <Title variant="h5" style={{ textAlign: 'left' }}>
                                R$ 200,00
                            </Title>
                        </CardContent>

                        <CardActions>
                            <Button
                                aria-label="Garantir Ultimate"
                                variant="contained"
                            >
                                Garantir
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </MaterialContainer>
        </Container>
    );
}

export default Plans;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
    Container as MaterialContainer,
    Box,
    Button,
    IconButton,
    Typography,
    Tooltip,
} from '@mui/material';

import { PlayArrowOutlined } from '@mui/icons-material';

import { Title, VideoDialog } from '@/components';

import { Container } from './styles';

const Welcome = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    return (
        <Container>
            <VideoDialog
                dialogOpen={dialogIsOpen}
                handleCloseDialog={() => setDialogIsOpen(false)}
                title="Vídeo"
                videoEmbed="https://www.youtube.com/embed/aCW0ZI_o0c0"
            />

            <Box className="container-welcome">
                <MaterialContainer className="container-info">
                    <Box className="container-items">
                        <Title variant="h1" dataAos="fade-up">
                            Curso online
                        </Title>

                        <Typography
                            className="description"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            Mantenha o foco para absorver melhor o conteúdo.
                        </Typography>

                        <Box className="buttons-row">
                            <Button
                                aria-label="Ver cursos"
                                variant="contained"
                                component={Link}
                                to="/cursos"
                                className="button"
                                data-aos="fade-right"
                                data-aos-anchor-placement="right-left"
                            >
                                Ver curso
                            </Button>

                            <Tooltip
                                title="Ver vídeo"
                                arrow
                                className="button"
                            >
                                <Button
                                    aria-label="Ver vídeo"
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => setDialogIsOpen(true)}
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left-right"
                                >
                                    <PlayArrowOutlined />
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>
                </MaterialContainer>
            </Box>
        </Container>
    );
}

export default Welcome;

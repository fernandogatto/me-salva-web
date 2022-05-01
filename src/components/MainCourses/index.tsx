import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
    Box,
    Button,
    Container as MaterialContainer,
    Tab,
    Typography,
} from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import Title from '../Title';

import { Container } from './styles';

const MainCourses = () => {
    const [value, setValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box className="container-info-courses">
                <MaterialContainer className="container-courses">
                    <Title variant="h2" dataAos="fade-up">
                        Principais cursos
                    </Title>

                    <TabContext value={String(value)}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleTabChange}
                                aria-label="Aba de tipo de usuário"
                            >
                                <Tab label="Curso um" value="0" />
                                <Tab label="Curso dois" value="1" />
                                <Tab label="Curso três" value="2" />
                            </TabList>
                        </Box>

                        <TabPanel value="0">
                            <Typography
                                className="description"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima sed itaque exercitationem maxime in porro commodi quam praesentium aut beatae tenetur, ratione distinctio consectetur aspernatur temporibus soluta ipsa dolorum?
                            </Typography>

                            <Button
                                variant="contained"
                                component={Link}
                                to="/cursos"
                                className="button"
                                data-aos="fade-right"
                            >
                                Quero conhecer
                            </Button>
                        </TabPanel>

                        <TabPanel value="1">
                            <Typography
                                className="description"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima sed itaque exercitationem maxime in porro commodi quam praesentium aut beatae tenetur, ratione distinctio consectetur aspernatur temporibus soluta ipsa dolorum?
                            </Typography>

                            <Button
                                variant="contained"
                                component={Link}
                                to="/cursos"
                                className="button"
                                data-aos="fade-right"
                            >
                                Quero conhecer
                            </Button>
                        </TabPanel>

                        <TabPanel value="2">
                            <Typography
                                className="description"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima sed itaque exercitationem maxime in porro commodi quam praesentium aut beatae tenetur, ratione distinctio consectetur aspernatur temporibus soluta ipsa dolorum?
                            </Typography>

                            <Button
                                variant="contained"
                                component={Link}
                                to="/cursos"
                                className="button"
                                data-aos="fade-right"
                            >
                                Quero conhecer
                            </Button>
                        </TabPanel>
                    </TabContext>
                </MaterialContainer>
            </Box>
        </Container>
    );
}

export default MainCourses;

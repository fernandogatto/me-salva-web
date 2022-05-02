import React, { useState } from 'react';

import {
    Box,
    Button,
    Checkbox,
    Container as MaterialContainer,
    FormControlLabel,
    FormGroup,
    Pagination,
    Tab,
    Typography,
    Alert,
    colors
} from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import Title from '../Title';

import Slider from '../Slider';

import Toast from '@/common/helpers/Toast';

import { IOptionProps } from '@/common/interfaces';

import { Container } from './styles';

import { errorNotification, successNotification } from '@/assets';

import exercises from '@/common/constants/Exercises';
import videos from '@/common/constants/Videos';

const TabContainer = () => {
    // Aba
    const [tabValue, setTabValue] = useState(0);

    // Paginacao
    const [exercisePage, setExercisePage] = useState(1);

    // Indice de exercicio ativo
    const [exerciseActive, setExerciseActive] = useState(0);

    // Resposta do usuario no exercicio ativo
    const [answer, setAnswer] = useState({} as IOptionProps);

    // Valores respondidos pelo usuario
    const [userAnswers, setUserAnswers] = useState<Array<number>>([]);

    // Array de exercicios ja respondidas
    const [exercisesAnswred, setExercisesAnswred] = useState<Array<number>>([]);

    // Quantidade de respostas certas do usuario
    const [rightAnswers, setRightAnswers] = useState(0);

    // Funções de mudança de ação
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handlePageChange = (event: any, value: number) => {
        setExercisePage(value);

        setExerciseActive(value - 1);

        setAnswer({} as IOptionProps);
    }

    const handleCheckChange = (event: any, option: IOptionProps) => {
        setAnswer(option);
    }

    const handleSubmit = () => {
        const question = exercises[exerciseActive];

        if (question.correct === answer.value) {
            Toast.showSuccess('Certo', 'Você acertou a questão');

            const audio = new Audio(successNotification);

            audio.play();

            setRightAnswers(rightAnswers + 1);
        } else {
            Toast.showError('Errado', 'Você errou a questão');

            const audio = new Audio(errorNotification);

            audio.play();
        }

        setUserAnswers([...userAnswers, answer.value]);

        setExercisesAnswred([...exercisesAnswred, question.id]);
    }

    // Componentes
    const Videos = () => {
        return (
            <Slider
                array={videos}
            />
        );
    }

    const Exercises = () => {
        return (
            <>
                <Box className="container-question">
                    {exercises
                    .map((exercise: any, index: number) =>
                        exercisePage === index + 1 && (
                            <Box key={exercise.id}>
                                {/* Caso o usuario tente responder fora de ordem */}
                                {exercisePage - 1 > userAnswers.length && (
                                    <Alert severity="info" style={{ marginBottom: 20 }}>
                                        Responda a questão anterior!
                                    </Alert>
                                )}

                                <Typography className="description">
                                    {exercise.label}
                                </Typography>

                                {exercise.image !== null && (
                                    <img
                                        src={exercise.image}
                                    />
                                )}

                                <FormGroup className="form-group">
                                    {exercise.options.map((option: any) => (
                                        <FormControlLabel
                                            key={option.value}
                                            control={
                                                <Checkbox
                                                    checked={option.value === answer.value || option.value === userAnswers[index]}
                                                    onChange={(event: any, checked: boolean) => handleCheckChange(event, option)}
                                                    disabled={(!!exercisesAnswred.find(element => element === exercise.id) || exercisePage - 1 !== userAnswers.length)}
                                                />
                                            }
                                            label={option.label}
                                            style={{
                                                borderRadius: 18,
                                                fontWeight: 'bold',
                                                backgroundColor: option.value === userAnswers[index]
                                                    ? option.value === exercise.correct
                                                        ? colors.green[100] : colors.red[100]
                                                    : ''
                                            }}
                                        />
                                    ))}
                                </FormGroup>

                                {!!exercisesAnswred.find(element => element === exercise.id) && (
                                    <Typography className="description form-group">
                                        Resposta certa: {exercise.options[exercise.correct]?.label}
                                    </Typography>
                                )}

                                <Button
                                    aria-label="Responder questão"
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={(!!exercisesAnswred.find(item => item === exercise.id) || !answer.label)}
                                >
                                    Responder
                                </Button>
                            </Box>
                        )
                    )}
                </Box>

                <Box className="container-pagination">
                    <Pagination
                        count={exercises.length}
                        page={exercisePage}
                        color="primary"
                        variant="outlined"
                        shape="circular"
                        onChange={handlePageChange}
                    />
                </Box>
            </>
        );
    }

    return (
        <Container>
            <Box className="container-info-study" id="course">
                <MaterialContainer className="container-study">
                    <Title variant="h2" dataAos="fade-up">
                        Trilha de aprendizado
                    </Title>

                    <TabContext value={String(tabValue)}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                aria-label="Aba de aprendizado"
                                onChange={handleTabChange}
                                className="tab-list"
                            >
                                <Tab label="Vídeo aulas" value="0" />
                                <Tab label="Exercícios" value="1" />

                                {/* Exibir nota ao final do questionario */}
                                {userAnswers.length === exercises.length && (
                                    <Typography className="grade description">
                                        Nota: {rightAnswers} / {exercises.length}
                                    </Typography>
                                )}
                            </TabList>
                        </Box>

                        <TabPanel value="0">
                            <Videos />
                        </TabPanel>

                        <TabPanel value="1">
                            <Exercises />
                        </TabPanel>
                    </TabContext>
                </MaterialContainer>
            </Box>
        </Container>
    );
}

export default TabContainer;

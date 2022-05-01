import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { format } from 'date-fns';

import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
    Tooltip,
    IconButton,
    Button,
    CircularProgress,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { ArrowBack } from '@mui/icons-material';

// import UserOperations from '@/infrastructure/User/UserOperations';

import { Title } from '@/components';

import { ContainerSignUp, SignUpBackground } from './styles';

const SignUp = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [inputTextData, setInputTextData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const [inputSelectData, setInputSelectData] = useState({
        genero: '',
    });

    const [inputDateData, setInputDateData] = useState({
        dataNascimento: new Date(),
    });

    const [inputError, setInputError] = useState({
        nome: false,
        genero: false,
        email: false,
        senha: false,
        confirmarSenha: false,
        senhasDiferentes: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputTextChange = (event: any) => {
        const { name, value } = event.target;

        setInputTextData({...inputTextData, [name]: value});
    }

    const handleInputSelectChange = (event: any) => {
        const { name, value } = event.target;

        setInputSelectData({ ...inputSelectData, [name]: value });
    }

    const handleInputDateChange = (value: Date, name: string) => {
        setInputDateData({ ...inputDateData, [name]: format(new Date(value), "MM/dd/yyyy") });
    }

    const handleConfirmPassword = (event: any) => {
        const { value } = event.target;

        const name = 'senhasDiferentes';

        if (value !== inputTextData.senha) {
            setInputError({...inputError, [name]: true});
        } else {
            setInputError({...inputError, [name]: false});
        }
    }

    const handleSubmit = async () => {
        try {
            const {
                nome,
                email,
                senha,
                confirmarSenha,
            } = inputTextData;

            const {
                genero,
            } = inputSelectData;

            const {
                dataNascimento,
            } = inputDateData;

            setInputError({
                nome: nome === '' ? true : false,
                genero: genero === '' ? true : false,
                email: email === '' ? true : false,
                senha: senha === '' ? true : false,
                confirmarSenha: confirmarSenha === '' ? true : false,
                senhasDiferentes: inputError.senhasDiferentes,
            });

            if (
                nome !== '' &&
                genero !== '' &&
                email !== '' &&
                senha !== '' &&
                confirmarSenha !== '' &&
                !inputError.senhasDiferentes
            ) {
                const data = {
                    nome,
                    genero,
                    dataNascimento: format(new Date(dataNascimento), "yyyy-MM-dd"),
                    email,
                    senha,
                };

                setIsSubmitting(true);

                // await dispatch(UserOperations.createUser(data));

                setIsSubmitting(false);

                history.goBack();
            }
        } catch (err) {
            console.log('handleSubmit', err);

            setIsSubmitting(false);
        }
    }

    return (
        <ContainerSignUp>
            <Box className="container-content">
                <Tooltip title="Voltar" arrow>
                    <IconButton
                        aria-label="Voltar página"
                        component={Link}
                        to="/login"
                    >
                        <ArrowBack />
                    </IconButton>
                </Tooltip>

                <Title
                    variant="h1"
                >
                    Cadastrar usuário
                </Title>

                <Box className="container-form">
                    <TextField
                        required
                        error={inputError.nome}
                        variant="outlined"
                        type="text"
                        name="nome"
                        label="Nome"
                        fullWidth
                        value={inputTextData.nome}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                        className="input"
                        helperText={inputError.nome && 'Campo obrigatório'}
                    />

                    <TextField
                        required
                        error={inputError.email}
                        variant="outlined"
                        type="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        value={inputTextData.email}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                        className="input"
                        helperText={inputError.email && 'Campo obrigatório'}
                    />

                    <FormControl
                        required
                        error={inputError.genero}
                        className="input"
                        disabled={isSubmitting}
                    >
                        <InputLabel>
                            Gênero
                        </InputLabel>

                        <Select
                            value={inputSelectData.genero}
                            label="Gênero"
                            name="genero"
                            onChange={handleInputSelectChange}
                        >
                            <MenuItem value="">
                                <em>Gênero</em>
                            </MenuItem>

                            <MenuItem value="Feminino">
                                Feminino
                            </MenuItem>

                            <MenuItem value="Masculino">
                                Masculino
                            </MenuItem>

                            <MenuItem value="Outros">
                                Outros
                            </MenuItem>
                        </Select>

                        {inputError.genero && (
                            <FormHelperText>
                                Campo obrigatório
                            </FormHelperText>
                        )}
                    </FormControl>

                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            label="Data de nascimento"
                            value={inputDateData.dataNascimento}
                            inputFormat={
                                format(new Date(inputDateData.dataNascimento), "dd/MM/yyyy")
                            }
                            onChange={(value: any) => {
                                handleInputDateChange(value, 'dataNascimento');
                            }}
                            disabled={isSubmitting}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className="input"
                                />
                            )}
                        />
                    </LocalizationProvider>

                    <TextField
                        required
                        error={inputError.senha}
                        variant="outlined"
                        type="password"
                        name="senha"
                        label="Senha"
                        fullWidth
                        value={inputTextData.senha}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                        className="input"
                        helperText={inputError.senha && 'Campo obrigatório'}
                    />

                    <TextField
                        required
                        error={inputError.confirmarSenha || inputError.senhasDiferentes}
                        variant="outlined"
                        type="password"
                        name="confirmarSenha"
                        label="Confirmar senha"
                        fullWidth
                        value={inputTextData.confirmarSenha}
                        onChange={(event: any) => {
                            handleInputTextChange(event);

                            handleConfirmPassword(event);
                        }}
                        disabled={isSubmitting}
                        className="input"
                        helperText={
                            (inputError.confirmarSenha && 'Campo obrigatório') ||
                            (inputError.senhasDiferentes && 'As senhas são diferentes')
                        }
                    />

                    <Box mt={2} className="grid-button">
                        <Box className="wrapper">
                            {isSubmitting && (
                                <CircularProgress
                                    className="circular-progress"
                                    style={{ width: 24, height: 24 }}
                                />
                            )}

                            <Button
                                aria-label="Submeter formulário"
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                            >
                                Salvar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <SignUpBackground />
        </ContainerSignUp>
    )
}

export default SignUp;

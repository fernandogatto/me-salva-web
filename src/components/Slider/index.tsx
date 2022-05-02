import React, { useState } from 'react';

import {
    Box,
    Tooltip,
    IconButton,
    Typography,
    Chip,
} from '@mui/material';

import {
    ArrowBack,
    ArrowForward,
    Circle,
    CircleOutlined,
} from '@mui/icons-material';

import Title from '../Title';

import { ContainerSlider } from './styles';

import { IVideoProps } from '@/common/interfaces';

interface ISliderProps {
    array: Array<IVideoProps>;
    isLoading?: boolean;
    hasError?: boolean;
    onPress?: () => void;
}

const Slider = ({
    array,
    isLoading = false,
    hasError = false,
    onPress
}: ISliderProps): JSX.Element => {
    const [slideIndex, setSlideIndex] = useState(1);

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(array.length);
        }
    }

    const nextSlide = () => {
        if (slideIndex !== array.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === array.length) {
            setSlideIndex(1);
        }
    }

    const goToSlide = (index: number) => {
        setSlideIndex(index + 1);
    }

    return (
        <ContainerSlider>
            <Box className="slider-title">
                <Tooltip title="Voltar" placement="top" arrow>
                    <IconButton
                        aria-label="Voltar slider"
                        size="small"
                        onClick={prevSlide}
                    >
                        <ArrowBack />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Avançar" placement="top" arrow>
                    <IconButton
                        aria-label="Avançar slide"
                        size="small"
                        onClick={nextSlide}
                    >
                        <ArrowForward />
                    </IconButton>
                </Tooltip>

                <Box className="dots-row">
                    {!isLoading && !hasError && array.map((item: IVideoProps, index: number) => (
                        <Box
                            key={index}
                            className={'dot-item'}
                        >
                            <Tooltip title={item.title} placement="top" arrow>
                                <IconButton
                                    aria-label="Dot"
                                    size="small"
                                    color="primary"
                                    onClick={() => goToSlide(index)}
                                >
                                    {index === slideIndex-1
                                        ? <Circle />
                                        : <CircleOutlined />
                                    }
                                </IconButton>
                            </Tooltip>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box className="container-content">
                {!isLoading && !hasError && array && array.length === 0 && (
                    <Typography className="description">
                        Nenhum resultado encontrado
                    </Typography>
                )}

                {!isLoading && !hasError && array.map((item: IVideoProps, index: number) => index === slideIndex-1 && (
                    <Box key={index}>
                        <Box className="container-item">
                            <Box className="container-name">
                                <Title variant="h5">
                                    {item.title}
                                </Title>

                                <Chip label={item.category} color="primary" />
                            </Box>

                            <iframe width="100%" height="600" src={item.linkEmbed} title="YouTube video player"></iframe>
                        </Box>
                    </Box>
                ))}
            </Box>
        </ContainerSlider>
    )
}

export default Slider;

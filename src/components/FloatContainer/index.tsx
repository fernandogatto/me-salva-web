import React, { ReactNode, useEffect, useState } from 'react';

import { IconButton, Box } from '@mui/material';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { Container } from './styles';

interface IFloatContainerProps {
    children: ReactNode;
}

const FloatContainer = ({
    children
}: IFloatContainerProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen === true) {
            showContent();
        } else {
            hideContent();
        }
    }, [isOpen]);

    const showContent = () => {
        const floatContainer = document.getElementById("float-container");

        const floatContent = document.getElementById("float-content");

        if (floatContainer) floatContainer.style.transition = "all 0.3s linear";
        if (floatContainer) floatContainer.style.width = "400px";
        if (floatContent) floatContent.style.display = "inline-block";
    };

    const hideContent = () => {
        const floatContainer = document.getElementById("float-container");

        const floatContent = document.getElementById("float-content");

        if (floatContainer) floatContainer.style.transition = "all 0.1s linear";
        if (floatContainer) floatContainer.style.width = "50px";
        if (floatContent) floatContent.style.display = "none";
    };

    return (
        <Container id="float-container">
            <IconButton
                className={`control-button ${
                    isOpen && "control-button-selected"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ArrowForwardIos /> : <ArrowBackIos />}
            </IconButton>

            <Box id="float-content" className="float-content">
                {children}
            </Box>
        </Container>
    );
}

export default FloatContainer;

import React, { ReactNode, CSSProperties } from 'react';

import { Typography } from '@mui/material';

import { Container } from './styles';

interface ITitleProps {
    children: ReactNode;
    style?: CSSProperties;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined;
    dataAos?: string | "";
}

const Title = ({
    children,
    style = {},
    variant,
    dataAos
}: ITitleProps): JSX.Element => {
    return (
        <Container className="title-component">
            <Typography
                variant={variant}
                className="title"
                style={style}
                data-aos={dataAos}
                data-aos-anchor-placement="bottom-bottom"
            >
                {children}
            </Typography>
        </Container>
    );
}

export default Title;

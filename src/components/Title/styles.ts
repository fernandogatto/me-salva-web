import styled from "styled-components";

export const Container = styled.div`
    &.title-component {
        .title {
            color: ${props => props.theme.palette.primary.dark};
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
        }
    }
`;

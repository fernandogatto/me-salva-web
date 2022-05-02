import styled from "styled-components";

export const Container = styled.div`
    z-index: 99999;
    display: flex;
    position: fixed;
    overflow: hidden;
    right: 0;

    .control-button {
        width: 50px;
        height: 82px;
        border-radius: 18px 0px 0px 18px;
        background-color: ${props => props.theme.palette.primary.main};
        transition: .2s ease all;

        svg {
            color: ${props => props.theme.palette.primary.contrastText};
        }

        &:hover {
            background-color: ${props => props.theme.palette.primary.dark};
        }
    }

    .control-button-selected {
        background-color: ${props => props.theme.palette.primary.dark};
    }

    .float-content {
        display: none;
        width: 100%;
        height: 100vh;
        padding: 30px;
        background: ${props => props.theme.palette.primary.dark} 0% 0% no-repeat padding-box;
    }
`;

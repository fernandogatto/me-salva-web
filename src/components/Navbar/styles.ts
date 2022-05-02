import styled from "styled-components";

export const Container = styled.div`
    &.float-content-children {
        display: flex;
        flex-direction: column;

        .title {
            color: ${props => props.theme.palette.primary.contrastText};
        }

        nav {
            .nav-items {
                display: flex;
                flex-direction: column;

                .nav-item {
                    padding-bottom: 20px;
                    border-bottom: 1px solid ${props => props.theme.palette.primary.contrastText};
                    color: ${props => props.theme.palette.primary.contrastText};
                    font-weight: bold;
                    transition: .2s ease all;
                    cursor: pointer;

                    & + .nav-item {
                        margin-top: 20px;
                    }

                    &:hover {
                        opacity: .6;
                    }

                    &.active {
                        color: ${props => props.theme.palette.primary.main};
                    }
                }
            }
        }
    }
`;

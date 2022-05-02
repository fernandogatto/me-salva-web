import styled from "styled-components";

export const Container = styled.div`
    .container-info-study {
        background-color: ${props => props.theme.palette.secondary.main};

        .container-study {
            padding: 60px 0;

            .tab-list {
                align-items: center;

                .Mui-selected {
                    background-color: ${props => props.theme.palette.primary.contrastText};
                    color: ${props => props.theme.palette.primary.main};
                    border-radius: 18px 18px 0 0;
                }

                .grade {
                    margin-left: 20px;
                    font-weight: bold;
                }
            }

            .MuiTabPanel-root {
                background-color: ${props => props.theme.palette.primary.contrastText};
                border-radius: 0 0 18px 18px;
            }

            .form-group {
                margin-bottom: 30px;
            }

            .container-pagination {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
            }
        }
    }
`;

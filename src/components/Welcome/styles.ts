import styled from "styled-components";

import { home } from '@/assets';

export const Container = styled.div`
    .container-welcome {
        height: 100vh;
        width: 100%;
        background:
        linear-gradient(rgba(177, 15, 46, .95), rgba(177, 15, 46,.8)),
            url(${home})
            no-repeat center center;
        background-size: cover;

        .container-info {
            height: calc(100vh - 86px);
            position: relative;

            .container-items {
                flex: 1;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }

            .title {
                text-align: left;
                font-size: 55px;
                color: ${props => props.theme.palette.primary.contrastText};
            }

            .description {
                color: #f9f9f9;
            }

            .buttons-row {
                display: flex;
                align-items: center;
                margin-top: 60px;

                .button + .button {
                    margin-left: 16px;
                }

                .button-secondary {
                    font-family: "Roboto","Helvetica","Arial",sans-serif;
                    font-weight: 500;
                    font-size: 0.875rem;
                    line-height: 1.75;
                    cursor: pointer;
                    -webkit-letter-spacing: 0.02857em;
                    -moz-letter-spacing: 0.02857em;
                    -ms-letter-spacing: 0.02857em;
                    letter-spacing: 0.02857em;
                    text-transform: uppercase;
                    min-width: 64px;
                    padding: 6px 16px;
                    border-radius: 4px;
                    -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
                    transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
                    color: #121212;
                    background-color: #E4C5AF;
                    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                    border-radius: 18px;

                    &:hover {
                        -webkit-text-decoration: none;
                        text-decoration: none;
                        background-color: rgb(159,137,122);
                        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
                    }
                }
            }
        }
    }
`;

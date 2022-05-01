import styled from 'styled-components';

import { home } from '@/assets';

export const ContainerSignUp = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    .container-content {
        max-width: 768px;
        width: 100%;
        padding: 45px 30px;
        overflow-y: scroll;

        .title {
            margin-top: 16px;
            margin-bottom: 32px;
            font-size: 32px;
            text-align: left;
            color: ${props => props.theme.palette.primary.main};
        }
    }

    .container-form {
        align-items: center;
        .container-flex {
            display: flex;
            margin-bottom: 16px;
            @media(max-width: 768px) {
                flex-direction: column;
            }
            .item-flex {
                flex: 1;
                &:nth-child(1) {
                    margin-right: 8px;
                    @media(max-width: 768px) {
                        margin-right: 0;
                        margin-bottom: 16px;
                    }
                }
                &:nth-child(2) {
                    margin-left: 8px;
                    @media(max-width: 768px) {
                        margin-left: 0;
                    }
                }
            }
        }

        .input {
            width: 100%;
            & + .input {
                margin-top: 16px;
            }
        }

        .grid-button {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .wrapper {
                position: relative;

                .circular-progress {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -12px;
                    margin-left: -12px;
                }
            }
        }
    }
`;

export const SignUpBackground = styled.div`
    flex: 1;
    background: url(${home}) no-repeat center center;
    background-size: cover;
`;

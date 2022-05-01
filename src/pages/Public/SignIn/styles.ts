import styled from 'styled-components';

import { home } from '@/assets';

export const ContainerSignIn = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    .container-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        max-width: 768px;
        width: 100%;
        padding: 45px 30px;
        text-align: center;

        .container-flex {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container-title {
            margin-bottom: 24px;
        }

        img {
            height: 90px;
            margin-right: 8px;
        }

        h1.title {
            font-size: 54px;
            margin-bottom: 0;
            color: ${props => props.theme.palette.primary.main};
        }

        h2.title {
            font-size: 24px;
            margin-bottom: 0;
            color: ${props => props.theme.palette.primary.main};
        }
    }

    .container-form {
        align-items: center;

        .input {
            width: 100%;

            & + .input {
                margin-top: 16px;
            }
        }

        .grid-button {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .container-links {
                a + a {
                    margin-left: 16px;
                }
            }

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

export const SignInBackground = styled.div`
    flex: 1;
    background: url(${home}) no-repeat center center;
    background-size: cover;
`;

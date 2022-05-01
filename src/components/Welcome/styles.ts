import styled from "styled-components";

import { home } from '@/assets';

export const Container = styled.div`
    .container-welcome {
        height: 100vh;
        width: 100%;
        background:
        linear-gradient(rgba(1, 1, 55, .95), rgba(1, 1, 55,.8)),
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
                font-size: 45px;
                color: #FFF;
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
            }
        }
    }
`;

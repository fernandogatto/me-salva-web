import styled from "styled-components";

import { plans } from '@/assets';

export const Container = styled.div`
    position: relative;
    background-color: #F0EFF1;

    .menu-button {
        color: #fff;
    }

    .container-header {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        nav {
            a {
                color: #FFF;
            }
        }
    }

    .container-info-about {
        padding: 0;
        position: relative;

        .container-about {
            position: absolute;
            top: -85px;
            width: 100%;
            padding: 45px;
            background-color: #FFF;
            border-radius: 18px;
            text-align: center;

            @media(max-width: 425px) {
                position: relative;
                top: 0;
                border-radius: 0;
            }

            .container-numbers {
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;

                .container-item {
                    text-align: center;
                    margin: 0 15px;

                    .number {
                        font-size: 48px;
                        font-weight: bold;
                        color: ${props => props.theme.palette.primary.main};
                    }

                    .description {
                        color: #4E504B;
                    }
                }
            }
        }
    }

    .container-evolution {
        margin-top: 270px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 30px;

        @media(max-width: 768px) {
            grid-template-columns: 1fr;

            @media(max-width: 425px) {
                margin-top: 60px;
            }
        }

        .evolution-item:nth-child(1) {
            text-align: left;
            padding-bottom: 60px;

            .title {
                text-align: left;
            }

            .container-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 28px;
                row-gap: 18px;

                @media(max-width: 425px) {
                    grid-template-columns: 1fr;
                }

                .item-grid {
                    align-self: stretch;

                    .title {
                        font-size: 24px;
                        margin-bottom: 12px
                    }
                }
            }
        }

        .evolution-item:nth-child(2) {
            align-self: flex-end;
            justify-self: center;

            img {
                width: 100%;
            }
        }
    }

    .plans-container {
        background:
            linear-gradient(rgba(1, 1, 55, .8), rgba(1, 1, 55, .95)),
            url(${plans})
            no-repeat center center;
        background-size: cover;

        & > div > div.title-component > .title {
            color: #FFF;
        }
    }
`;

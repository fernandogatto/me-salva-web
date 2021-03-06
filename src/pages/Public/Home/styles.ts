import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    .menu-button {
        color: ${props => props.theme.palette.primary.contrastText};
    }

    .container-header {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        nav {
            a {
                color: ${props => props.theme.palette.primary.contrastText};
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
            background-color: ${props => props.theme.palette.primary.contrastText};
            border-radius: 18px;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;

            @media(max-width: 425px) {
                position: relative;
                top: 0;
                border-radius: 0;
            }

            .description {
                font-size: 30px;
                font-weight: bold;
                text-align: left;
            }

            .title {
                text-align: left;
                font-size: 24px;
                margin-bottom: 0;
                color: ${props => props.theme.palette.primary.main}
            }
        }
    }

    .container-summary {
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

        .summary-item:nth-child(1) {
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

                    .title-component:nth-child(1) .title {
                        font-size: 24px;
                        margin-bottom: 0;
                    }

                    .title-component:nth-child(2) .title {
                        font-size: 60px;
                        margin-bottom: 0;
                        color: ${props => props.theme.palette.primary.main};
                    }
                }
            }
        }

        .summary-item:nth-child(2) {
            align-self: flex-end;
            justify-self: center;

            img {
                width: 100%;
            }
        }
    }
`;

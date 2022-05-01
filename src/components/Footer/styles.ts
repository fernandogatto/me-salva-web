import styled from "styled-components";

export const Container = styled.div`
    background-color: #333;
    padding: 60px 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;

    .footer-row {
        display: flex;
        justify-content: space-between;

        @media(max-width: 425px) {
            flex-direction: column-reverse;
            align-items: center;
        }

        .logo-footer-container {
            @media(max-width: 425px) {
                flex-direction: column-reverse;
                align-items: center;
                text-align: center;
                margin-top: 30px;
            }
        }

        .logo {
            height: 90px;
            object-fit: contain;
        }
    }

    .description {
        color: #fff;
    }

    nav {
        @media(max-width: 425px) {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        a {
            padding: 0 18px;
            font-weight: bold;
            text-transform: uppercase;
            transition: .2s ease all;
            color: #fff;

            &:hover {
                color: ${props => props.theme.palette.primary.main};
            }

            @media(max-width: 425px) {
                padding: 18px 0;
            }
        }
    }
`;

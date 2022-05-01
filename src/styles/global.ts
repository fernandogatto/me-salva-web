import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        font-family: 'Roboto';
        color: #377FFE;
    }

    a, p, li {
        font-family: 'Roboto';
    }

    a {
        text-decoration: none;
        color: #1B1B1B;
        transition: .2s ease all;
    }

    p {
        white-space: pre-wrap;
    }

    .description {
        color: #4E504B;
    }

    .container-grid-area {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
        column-gap: 32px;
        row-gap: 32px;
        grid-template-areas:
            "header sidebar"
            "main sidebar"
            "footer sidebar";

        @media(max-width: 767px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "header"
                "sidebar"
                "main"
                "footer";
        }

        .item-header {
            grid-area: header;
        }

        .item-main {
            grid-area: main;
        }

        .item-sidebar {
            grid-area: sidebar;
            height: fit-content;
        }

        .item-footer {
            grid-area: footer;
        }
    }

    .container-header-page {
        display: flex;
        align-items: center;
        margin-bottom: 32px;

        h1 {
            margin-right: 16px;
            line-height: 48px;
        }
    }

    .container-back-page {
        margin-bottom: 32px;

        h1 {
            margin-top: 16px;
        }
    }

    /* Dialogs */

    .MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperFullScreen {
        border-radius: 18px;
    }

    /* Menu */

    .MuiPaper-root.MuiDrawer-paper {
        padding: 0 30px;
        width: 100%;
        max-width: 250px;

        & > button {
            display: flex;
            justify-content: end;
        }

        nav {
            display: flex;
            flex-direction: column;
            margin-top: 20px;

            a {
                display: flex;
                align-items: center;
                text-transform: uppercase;
                font-size: 14px;

                + a {
                    margin-top: 8px;
                }

                &.active {
                    color: #377FFE;
                }

                svg {
                    margin-right: 8px;
                }
            }
        }

        .login {
            margin-top: 30px;
        }

        .logoff {
            margin-top: auto;
            margin-right: auto;
            padding-left: 16px;
            justify-content: flex-start;
            font-size: 14px;
        }
    }

    /* Scrollbar */

    /* Works on Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: #C1C1C1 transparent;
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 6px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #CECECE;
        border-radius: 12px;
    }
`;

import styled from "styled-components";

export const Container = styled.div`
    &.container-header {
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 30px 15px;
        z-index: 1;
    }

    .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            height: 60px;
        }

        .container-actions-header {
            display: flex;
            align-items: center;

            nav {
                margin-right: 45px;

                a {
                    padding: 0 18px;
                    font-weight: bold;
                    text-transform: uppercase;
                    transition: .2s ease all;

                    &.active {
                        color: ${props => props.theme.palette.primary.main};
                        position: relative;

                        &:before {
                            content: '';
                            position: absolute;
                            top: 28px;
                            left: 50%;
                            transform: translateX(-50%);
                            height: 6px;
                            width: 6px;
                            border-radius: 50%;
                            background-color: ${props => props.theme.palette.primary.main};
                        }
                    }

                    &:hover {
                        color: ${props => props.theme.palette.primary.main};
                    }
                }
            }
        }
    }
`;

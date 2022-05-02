import styled from 'styled-components';

export const ContainerSlider = styled.div`
    width: 100%;

    .slider-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .dots-row {
            display: flex;
            align-items: center;
            margin-left: 20px;

            .dot-item {
                position: relative;
                display: block;

                /* + & .dot-item {
                    margin-left: 8px;
                }

                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 12px;
                    height: 12px;
                    background-color: ${props => props.theme.palette.primary.main};
                    border-radius: 50%;
                } */
            }
        }
    }

    .container-content {
        .container-item {
            iframe {
                @media(max-width: 768px) {
                    height: 500px;
                }

                @media(max-width: 425px) {
                    height: 300px !important;
                }
            }

            .container-name {
                display: flex;
                align-items: center;
                margin-bottom: 30px;

                .title {
                    text-align: left;
                    margin-bottom: 0;
                    margin-right: 10px;
                }
            }
        }
    }
`;

import styled from 'styled-components';

export const ContainerSlider = styled.div`
    width: 100%;

    .slider-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .title {
            margin-right: 16px;
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
                .title {
                    text-align: left;
                }
            }
        }
    }
`;

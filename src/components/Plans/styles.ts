import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 0;
    width: 100%;

    .plans-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;

        @media(max-width: 425px) {
            grid-template-columns: 1fr;
        }

        .plan-item {
            text-align: left;
            justify-self: center;

            .description {
                margin-bottom: 16px;
            }
        }
    }
`;

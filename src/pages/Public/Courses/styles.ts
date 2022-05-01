import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
    }
`;

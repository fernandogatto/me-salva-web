import styled from "styled-components";

export const Container = styled.div`
    z-index: 99999;
    display: flex;
    position: fixed;
    overflow: hidden;
    right: 0;

    .control-button {
        width: 50px;
        height: 82px;
        border-radius: 18px 0px 0px 18px;
        background-color: #1a2633;

        svg {
            color: #FFF;
        }

        &:hover {
            background-color: #2c3e50;
        }
    }

    .control-button-selected {
        background-color: #2c3e50;
    }

    .float-content {
        display: none;
        width: 100%;
        height: 100vh;
        padding: 30px;
        background: var(--unnamed-color-2c3e50) 0% 0% no-repeat padding-box;
        background: #2c3e50 0% 0% no-repeat padding-box;
    }
`;

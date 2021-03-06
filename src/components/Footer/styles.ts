import styled from "styled-components";

import { footer } from '@/assets';

export const Container = styled.div`
    height: 50vh;
    width: 100%;
    background:
    linear-gradient(rgba(177, 15, 46, .8), rgba(177, 15, 46,.95)),
        url(${footer})
        no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;

    .container-footer {
        .title {
            font-size: 48px;
        }
    }
`;

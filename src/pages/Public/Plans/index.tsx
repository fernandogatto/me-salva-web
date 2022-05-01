import React from 'react';

import { Footer, Header, Plans as PlansComponent } from '@/components';

import { Container } from './styles';

const Plans = (): JSX.Element => {
    return (
        <Container>
            <Header />

            <main>
                <PlansComponent />
            </main>

            <Footer />
        </Container>
    );
}

export default Plans;

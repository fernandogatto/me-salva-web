import React from 'react';

import { Footer, Header, MainCourses } from '@/components';

import { Container } from './styles';

const Courses = (): JSX.Element => {
    return (
        <Container>
            <Header />

            <main>
                <MainCourses />
            </main>

            <Footer />
        </Container>
    );
}

export default Courses;

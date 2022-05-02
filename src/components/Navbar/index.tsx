import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import Title from '../Title';

import { Container } from './styles';

const Navbar = (): JSX.Element => {
    return (
        <Container className="float-content-children">
            <Title variant="h6">
                Conteúdo
            </Title>

            <nav>
                <ul className="nav-items">
                    <Link
                        activeClass="active"
                        to="summary"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-item"
                    >
                        Sumário
                    </Link>

                    <Link
                        activeClass="active"
                        to="course"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="nav-item"
                    >
                        Trilha de aprendizado
                    </Link>
                </ul>
            </nav>
        </Container>
    );
}

export default Navbar;

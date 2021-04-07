import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Background, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Background>
      <Container>
        <p>Vanderllee</p>
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <li>Cursos</li>
          <li>Portfolio</li>
          <li>Contato</li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;

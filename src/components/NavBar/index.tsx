import React, { useState, useCallback } from 'react';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Background, Container, MenuDrawer } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  return (
    <Background>
      <Container>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <p>Vanderllee</p>
        </Link>
        <FiMenu size={28} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <li>Cursos</li>
          <li>Portfolio</li>
          <Link to="contato">
            <li>Contato</li>
          </Link>
        </ul>
      </Container>
      <MenuDrawer isOpen={open}>
        <FiX size={28} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <li>Cursos</li>
          <li>Portfolio</li>
          <Link to="contato" onClick={(): void => handleOpen()}>
            <li>Contato</li>
          </Link>
          <FiSun size={28} color="#D4AE8B" />
        </ul>
      </MenuDrawer>
    </Background>
  );
};

export default NavBar;

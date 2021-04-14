import React, { useState, useCallback } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
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
          <Link to="cursos">
            <li>Cursos</li>
          </Link>
          <Link to="portfolio">
            <li>portfolio</li>
          </Link>
          <Link to="contato">
            <li>Contato</li>
          </Link>
        </ul>
      </Container>
      <MenuDrawer isOpen={open}>
        <FiX size={28} color="#fff" onClick={(): void => handleOpen()} />
        <ul>
          <Link to="cursos" onClick={(): void => handleOpen()}>
            <li>Cursos</li>
          </Link>
          <Link to="portfolio" onClick={(): void => handleOpen()}>
            <li>Portfolio</li>
          </Link>
          <Link to="contato" onClick={(): void => handleOpen()}>
            <li>Contato</li>
          </Link>
        </ul>
      </MenuDrawer>
    </Background>
  );
};

export default NavBar;

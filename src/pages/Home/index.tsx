import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

import { Container, Hello, Section, SocialMedia } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Hello>
        <h1>Heei!</h1>
      </Hello>
      <Section>
        <p>
          Meu nome é José Vanderli, sou Desenvolvedor Fullstack com foco nas
          tecnologias: React JS e Node JS
        </p>
        <SocialMedia>
          <a
            href="https://www.instagram.com/vanderllee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} />
            <p>@vanderllee</p>
          </a>
          <a
            href="https://www.github.com/vanderllee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} />
            <p>Vanderllee</p>
          </a>
        </SocialMedia>
      </Section>
    </Container>
  );
};

export default Home;

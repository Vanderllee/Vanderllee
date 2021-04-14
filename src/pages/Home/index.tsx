/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import minhafoto from '../../assets/minhafoto.jpeg';
import { Container, Hello, Section, SocialMedia } from './styles';

const Home: React.FC = () => (
  <Container>
    <Hello>
      <img src={minhafoto} width={170} height={170} alt="picture" />
      <h1>Heei!</h1>
    </Hello>
    <Section>
      <p>
        Meu nome é José Vanderli,
        <br />
        sou Desenvolvedor Fullstack com
        <br />
        foco nas tecnologias web e mobile
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
          <p>vanderllee</p>
        </a>
        <a
          href="https://www.youtube.com/channel/UCIhsI9U96yZh_FVx6XLZHig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} />
          <p>vanderllee</p>
        </a>
      </SocialMedia>
    </Section>
  </Container>
);

export default Home;

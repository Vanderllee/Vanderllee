import React, { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GrMail } from 'react-icons/gr';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import MinhaFoto from '../../assets/minhafoto.jpeg';

import {
  Container,
  Form,
  Contact,
  SocialMedia,
  CopyToClipBoard,
} from './styles';

const Contato: React.FC = () => {
  const [loading, setLoading] = useState(0);

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();

    const inputs = document.getElementsByTagName('input');
    const description = document.getElementsByTagName('textarea')[0].value;

    const formData = {
      name: inputs[0].value,
      email: inputs[1].value,
      subject: inputs[2].value,
      description,
    };

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.subject === '' ||
      formData.description === ''
    ) {
      toast('📝 Favor preencher todos os campos', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyStyle: {
          fontFamily: 'Roboto',
          fontSize: 18,
          color: '#272727',
        },
      });

      return;
    }

    toast.info('📤 Enviando e-mail...', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyStyle: { fontFamily: 'Roboto', fontSize: 20 },
    });

    setLoading(1);

    fetch('https://formspree.io/f/xdoyknzd', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('🚀 E-mail enviado com sucesso!', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Roboto', fontSize: 20 },
          });
        } else {
          toast.error('😓 Erro ao enviar o e-mail', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Roboto', fontSize: 20 },
          });
        }

        for (let i = 0; i < 3; i += 1) {
          inputs[i].value = '';
        }

        document.getElementsByTagName('textarea')[0].value = '';

        setLoading(0);
      })
      .catch(() => {
        toast.error('😓 Erro ao enviar o e-mail', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          bodyStyle: { fontFamily: 'Roboto', fontSize: 20 },
        });

        setLoading(0);
      });
  }, []);

  return (
    <Container>
      <Contact>
        <GrMail size={30} />
        <img src={MinhaFoto} width={600} height={600} alt="minha imagem" />
        <SocialMedia>
          <CopyToClipBoard>
            <p id="clipboard">vanderllee@gmail.com</p>
          </CopyToClipBoard>

          <a
            href="https://www.github.com/vanderllee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
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
          <a
            href="https://www.instagram.com/vanderllee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
            <p>@vanderllee</p>
          </a>
        </SocialMedia>
      </Contact>
      <Form onSubmit={onHandleSubmit} loading={loading}>
        <h1>Entre em contato</h1>
        <input type="text" name="name" placeholder="Nome" />
        <br />
        <input type="email" name="email" placeholder="E-mail" />
        <br />
        <input type="text" name="subject" placeholder="Assunto" />
        <br />
        <textarea name="description" placeholder="Descrição" cols={120} />
        <br />
        <button type="submit">enviar</button>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Contato;

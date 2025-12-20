import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';

export const NotFound: React.FC = () => (
  <Container className="py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
    <Typography variant="h1" className="text-9xl text-primary mb-4">404</Typography>
    <Typography variant="h3" className="mb-4">Página no encontrada</Typography>
    <Typography variant="body" className="mb-8 max-w-md">
      Lo sentimos, la página que buscas no existe o ha sido movida.
    </Typography>
    <Link to="/">
      <Button>Volver al inicio</Button>
    </Link>
  </Container>
);

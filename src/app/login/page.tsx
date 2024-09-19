"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Typography, Container } from '@mui/material';
// import api from '../../services/api';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // const response = await api.post('/auth/login', { email, password });
      // localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
        Entrar
      </Button>
      <Button variant="text" color="primary" fullWidth onClick={() => router.push('/account')} sx={{ mt: 1 }}>
        Criar Conta
      </Button>
    </Container>
  );
};

export default Login;

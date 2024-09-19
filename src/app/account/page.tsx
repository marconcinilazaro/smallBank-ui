// src/app/pages/account/page.tsx

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import api from '../services/api'; // Ajuste o caminho se necessário

const OpenAccount = () => {
  const [name, setName] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const router = useRouter();

  const handleOpenAccount = async () => {
    try {
      await api.post('/accounts', { name, initialBalance });
      router.push('/dashboard');
    } catch (error) {
      console.error('Erro ao abrir conta:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8
        }}
      >
        <Typography variant="h4" gutterBottom>
          Abrir Conta
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
            mt: 2
          }}
        >
          <TextField
            fullWidth
            label="Nome"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Saldo Inicial"
            variant="outlined"
            margin="normal"
            type="number"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenAccount}
            sx={{ mt: 2 }}
          >
            Abrir Conta
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OpenAccount;

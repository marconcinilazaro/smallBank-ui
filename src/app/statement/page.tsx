"use client";

import { useState, useEffect } from 'react';
import { CircularProgress, Typography, List, ListItem, ListItemText } from '@mui/material';
import api from '../services/api';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
}

const Statement = () => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/accounts/balance');
        setBalance(response.data.balance);
        setTransactions(response.data.transactions);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar extrato', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Extrato
      </Typography>
      <Typography variant="h6">Saldo: {balance}</Typography>
      <List>
        {transactions.map((tx) => (
          <ListItem key={tx.id}>
            <ListItemText primary={tx.description} secondary={`Valor: R$ ${tx.amount}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Statement;

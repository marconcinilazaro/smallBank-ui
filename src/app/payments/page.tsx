import { Button, Typography } from '@mui/material';

const Payments = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Pagamentos
      </Typography>
      <Button variant="contained" color="primary">
        Débito
      </Button>
      <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
        Crédito
      </Button>
      <Button variant="contained" style={{ marginLeft: 10 }}>
        Transferência
      </Button>
    </div>
  );
};

export default Payments;

import { useState } from 'react';
import { CssBaseline, Container, CircularProgress } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading] = useState(false);

  return (
    <div>
      <CssBaseline />
      <Header />
      
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container component="main" maxWidth="lg">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
        </Container>
      </div>
    </div>
  );
}

export default MyApp;

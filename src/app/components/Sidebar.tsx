import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{ width: 250, backgroundColor: '#f5f5f5', height: '100vh', paddingTop: 20 }}>
      <List>
        <Link href="/statement" passHref>
          <ListItem>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary="Extratos" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/payments" passHref>
          <ListItem>
            <ListItemIcon><PaymentIcon /></ListItemIcon>
            <ListItemText primary="Pagamentos" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/wallet" passHref>
          <ListItem>
            <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
            <ListItemText primary="Carteira" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;

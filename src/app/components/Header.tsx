import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          SmallBank
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

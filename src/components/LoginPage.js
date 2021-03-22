import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {
  ThemeProvider, makeStyles

} from '@material-ui/core/styles';

const LoginPage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles()

  const handleLogin = (prop) => (event) => {

  };
  return (
    <div className="login">
      <form >
        <TextField id="standard-basic" label="UserName" />
        <TextField id="filled-basic" label="Password" variant="filled" />

      </form>
      
      <Button variant="outlined" color="primary" className="btnLogin">
          Login
        </Button>

    </div>

  );
};
export default LoginPage;
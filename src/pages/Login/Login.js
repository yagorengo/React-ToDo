
import React, {useState} from "react";
import {Button,TextField,Grid,Paper,Typography} from "@material-ui/core";
import Home from '../Home/Home.js';
import './Login.scss';
const accountsBD =  [
    {userName:'User1', id: 1, password:"pass1"},
    {userName:'User2', id: 2, password:"pass2"},
    {userName:'User3', id: 3, password:"pass3"},
    {userName:'User4', id: 4, password:"pass4"},
    {userName:'User5', id: 5, password:"pass5"}]
    

const Login = ()=> {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [accounts] = useState(accountsBD);
    const [isLogin, setIsLogin] = useState(false)
    const [userLogin, setUserLogin] = useState(null);
    function handleChange(name, value) {
        if(name === 'username'){
            setUser(value)
        }else{
            setPass(value)
        }
    }
    function ifMatch(account){
        const userMatch =   accounts.filter( acc=> acc.userName === account.user && acc.password === account.pass)
        if(userMatch.length > 0){
            let cuenta = JSON.stringify(userMatch[0]);
            localStorage.setItem('account', cuenta);
            setUserLogin(userMatch[0])
            setIsLogin(true)
        }      
    }

    function handleSubmit() {
      let account = {user, pass}
      if(account){
          ifMatch(account);
      }
        }

    return (
    <div>
        {!isLogin ?
        <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
            <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
            >
                <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
                >
                <Grid item>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                </Grid>
                    <Grid item>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                            <TextField
                            type="email"
                            placeholder="Email"
                            fullWidth
                            name="username"
                            variant="outlined"
                            value={user}
                            onChange={(event) =>handleChange(event.target.name,event.target.value)}
                            required
                            autoFocus
                            />
                            </Grid>
                            <Grid item>
                            <TextField
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name="password"
                            variant="outlined"
                            value={pass}
                            onChange={(event) =>handleChange(event.target.name,event.target.value)}
                            required
                            />
                            </Grid>
                            <Grid item>
                                <Button
                                variant="contained"
                                color="primary"
                                type="button"
                                className="button-block"
                                onClick={handleSubmit}
                                >
                                Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Grid>
    :<Home user= {userLogin.id}/> }
        
    </div>
);
}

export default Login;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export default class Login extends React.Component{
	constructor(props) {
        super(props);
		this.state = {username : '', password : ''}
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
    };
	
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="username" autoComplete="email" autoFocus onChange={this.handleInputChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
									onChange={this.handleInputChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
	
	handleSubmit(e){
		//e.preventDefault();
		console.log(this.state);
		if(localStorage.getItem('username')===this.state.username && localStorage.getItem('password')===this.state.password){
			localStorage.setItem('isLoggedIn', true);
		}else{
			localStorage.setItem('isLoggedIn', false);
		}
	}
	
	handleInputChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

}

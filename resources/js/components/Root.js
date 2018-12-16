import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './AppBar';
import Drawer from './Drawer';
import Home from './Home';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
    fontFamily:[
        'Roboto',
        'Microsoft YaHei',
    ],
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Root extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.editTitle = this.editTitle.bind(this);
        this.state = {
            mobileOpen: false,
            title: '主页',
        };
    };

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    editTitle(title) {
        document.querySelector('title').innerHTML = '王保的博客 - ' + title;
        this.setState({ title: title });
    };

    render() {

        const { classes } = this.props;

        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar
                            handleDrawerToggle={this.handleDrawerToggle}
                            title={this.state.title}
                         />
                        <Drawer
                            handleDrawerToggle={this.handleDrawerToggle}
                            mobileOpen={this.state.mobileOpen}
                        />
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Route exact path="/" component={Home} />
                        </main>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    };

}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);

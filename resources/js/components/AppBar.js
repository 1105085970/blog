import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
});

class MyAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleDrawerToggle = props.handleDrawerToggle;
    }

    render() {

        const { classes,title } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    {title}
                </Typography>
              </Toolbar>
            </AppBar>
          );

    }

}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);

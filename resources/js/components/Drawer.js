import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
    },
});

class MyDrawer extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerToggle = props.handleDrawerToggle;
    }

    render() {

        const { classes,theme,mobileOpen } = this.props;

        const activeStyle = {
            backgroundColor: '#e0e0e0',
            display: 'block',
        }

        const drawer = (
            <div>
                <div className={classes.toolbar} >
                    <List>
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="王保的博客" secondary="v1.0" />
                        </ListItem>
                    </List>
                </div>
                <Divider />
                <List>
                    <NavLink exact to="/" activeStyle={activeStyle}>
                        <ListItem button >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="主页" />
                        </ListItem>
                    </NavLink>
                    <NavLink exact to="/about" activeStyle={activeStyle}>
                        <ListItem button >
                            <ListItemIcon>
                              <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="关于" />
                        </ListItem>
                    </NavLink>
                </List>
            </div>
        );

        return (
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                      container={this.props.container}
                      variant="temporary"
                      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                      open={mobileOpen}
                      onClose={this.handleDrawerToggle}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                      }}
                    >
                      {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                    >
                      {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        );

    }

}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyDrawer);

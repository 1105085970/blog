import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit * 2,
    },
});

class Home extends React.Component{

    constructor(props) {
        super(props);
    };

    render() {

        const { classes } = this.props;

        const card = (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );

        return (
            <div>
                {card}
            </div>
        )
    }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

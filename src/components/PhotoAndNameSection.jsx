import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import './PhotoAndNameSection.css';

export default class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='photoAndNameSection'>
                <div id='photoAndNameContainer'>
                    <Grid container spacing={40}>
                        <Grid item md={6} xs={12}>
                            <div id='photoContainer'>
                                <div id='image'>
                                    <img id='selfieImg' src='./images/selfie.jpg' alt='selfie'/>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div id='nameContainer'>
                                <Typography variant='display3' gutterBottom>邱賢祐</Typography>
                                <Typography variant='display2' gutterBottom>Jimmy Chiu</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
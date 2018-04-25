import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avater from 'material-ui/Avatar';

import SelfIntro from 'components/SelfIntro.jsx';
import SelfInfo from 'components/SelfInfo.jsx';

import './InformationSection.css';

export default class InformationSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='informationSection' className='gray-bg'>
                <Typography component='h2' variant='display3' align='center' gutterBottom>ABOUT ME</Typography>
                <div id='informationContent'>
                    <Grid container spacing={40}>
                        <Grid item md={6} xs={12}>
                            <SelfIntro/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <SelfInfo/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

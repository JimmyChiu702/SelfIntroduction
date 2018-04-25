import React from 'react';

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
                    <div id='photoContainer'>
                        <div id='image'>
                            <img id='selfieImg' src='./images/selfie.jpg' alt='selfie'/>
                        </div>
                    </div>
                    <div id='nameContainer'>
                        <Typography variant='display3' gutterBottom>邱賢祐</Typography>
                        <Typography variant='display2' gutterBottom>Jimmy Chiu</Typography>
                    </div>
                </div>
            </div>
        );
    }
}
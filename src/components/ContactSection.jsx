import React from 'react';

import Typography from 'material-ui/Typography';

import './ContactSection.css';

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='contactSection'>
                <div>
                    <div id='contactSectionTitle'>
                        <Typography component='h2' variant='display2' align='center'>Contact</Typography>
                    </div>
                    <div id='contactContent'>
                        <Typography component='text' variant='body1' align='center' id='contactText'>
                            有興趣或有問題非常歡迎聯絡我!
                        </Typography>
                        <a href='mailto:jimmychiu702@gmail.com'>
                            <img src='./images/email.png' id='emailIcon'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
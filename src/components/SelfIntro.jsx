import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import './SelfIntro.css';

export default class SelfIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper id='intro'>
                <div id='introContent'>
                    <Typography component='h3' variant='display2' align='center' gutterBottom>自我介紹</Typography>
                    <Typography component='p' variant='body1' align='center' id='introText'>
                        你好，我是邱賢祐，<br/>目前就讀清大資工大三，<br/>現在致力於前後端的開發，<br/>期許自己能夠創造被大眾喜愛的應用
                    </Typography>         
                </div>                   
            </Paper>
        );
    }
}
import React from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import './SkillDomain.css';

export default class SkillDomain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <div className='skillDomainContainer'>
                    <Typography component='h3' variant='display2' align='center' gutterBottom>
                        {this.props.title}
                    </Typography>
                    {this.props.skills.map((s, i) => (
                        <Typography component='h4' variant='body1' align='center' gutterBottom className='skill'>
                            {s}
                        </Typography>
                    ))}
                </div>
            </Paper>
        );
    }
}
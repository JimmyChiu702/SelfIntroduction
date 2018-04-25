import React from 'react';

import Typography from 'material-ui/Typography';

import './SkillDomain.css';

export default class SkillDomain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography component='h3' variant='display2' align='center'>
                    {this.props.title}
                </Typography>
                {this.props.skills.map((s, i) => (
                    <Typography component='h4' variant='display1' align='center'>
                        {s}
                    </Typography>
                ))}
            </div>
        );
    }
}
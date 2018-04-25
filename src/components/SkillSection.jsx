import React from 'react';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'

import SkillDomain from 'components/SkillDomain.jsx';

import './SkillSection.css';

export default class SkillSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='skillSection'>
                <div className='sectionTitle'>
                    <Typography component='h2' variant='display3' align='center'>SKILLS</Typography>
                </div>
                <Grid container spacing={24}>
                    {skillDomain.map((obj, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <SkillDomain {...obj}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

const skillDomain = [
    { 
        'title': 'Language',
        'skills': [
            'C / C++',
            'javascript',
            'python',
            'JAVA'
        ]
    },{
        'title': 'Front-end',
        'skills': [
            'HTML + CSS',
            'React',
            'Redux',
            'React Native'
        ]
    },{
        'title': 'Back-end',
        'skills': [
            'Node.js',
            'PostgreSQL',
            'Redis',
            'AWS'
        ]
    }
];
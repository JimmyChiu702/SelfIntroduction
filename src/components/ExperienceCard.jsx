import React from 'react';

import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './ExperienceCard.css';

export default class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardMedia
                        className='experienceImg'
                        image={this.props.img}
                        title={this.props.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">{this.props.title}</Typography>
                        <Typography component="p">{this.props.text}</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
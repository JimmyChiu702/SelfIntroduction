import React from 'react';

import PhotoAndNameSection from 'components/PhotoAndNameSection.jsx';
import InformationSection from 'components/InformationSection.jsx';
import ExperienceSection from 'components/ExperienceSection.jsx';
import SkillSection from 'components/SkillSection.jsx';
import ContactSection from 'components/ContactSection.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PhotoAndNameSection/>
                <InformationSection/>
                <ExperienceSection/>
                <SkillSection/>
                <ContactSection/>
            </div>
        );
    }
}
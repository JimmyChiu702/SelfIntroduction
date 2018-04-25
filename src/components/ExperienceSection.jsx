import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ExperienceCard from 'components/ExperienceCard.jsx';

import './ExperienceSection.css';

export default class ExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='gray-bg'>
                <div id='experienceSection'>
                    <div className='sectionTitle'>
                        <Typography component='h2' variant='display3' align='center'>EXPERIENCE</Typography>
                    </div>
                    <div className='list'>
                        <div className='listTitle'>
                            <Typography component='h3' variant='display2' align='center'>Activity</Typography>
                        </div>
                        <Grid container spacing={40}>
                            {cardContent[0].map((obj, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <ExperienceCard {...obj}/>  
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div className='list'>
                        <div className='listTitle'>
                            <Typography component='h3' variant='display2' align='center'>COMPUTER SCIENCE</Typography>
                        </div>
                        <Grid container spacing={40}>
                            {cardContent[1].map((obj, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <ExperienceCard {...obj}/>  
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

const cardContent = [
    [
        {
            img: './images/ruralService.jpg',
            title: '偏鄉服務學習',
            text: '給孩子們一個難忘的回憶!',
            date: 'fdsfsdfsd',
        },{
            img: './images/classTrip.jpg',
            title: '主辦三天兩夜的班遊',
            text: '大家一起揮灑青春的色彩!',
            date: 'fdsfsdfsd',
        },{
            img: './images/clubShow.jpg',
            title: '清大熱舞社成果發表',
            text: '呈現一場視覺饗宴!',
            date: 'fdsfsdfsd',
        },{
            img: './images/nthuCamp.jpg',
            title: '清大紫荊季服務學長姊',
            text: '帶學弟妹認識美麗的校園!',
            date: 'fdsfsdfsd',
        },{
            img: './images/csCamp.jpg',
            title: '2016清大資工營',
            text: '帶學弟妹進入資工的世界!',
            date: 'fdsfsdfsd',
        }
    ],[
        {
            img: './images/manual.jpg',
            title: '網站製作',
            text: '為清大招生策略中心製作教師用網站',
            date: 'fdsfsdfsd',
        },{
            img: './images/familia.jpg',
            title: 'Familia',
            text: '一款聯絡家人感情的APP',
            date: 'fdsfsdfsd',
        },{
            img: './images/server.jpg',
            title: '主機維護',
            text: '為清大學科所轉移並維護主機',
            date: 'fdsfsdfsd',
        },{
            img: './images/data.jpg',
            title: '後臺資料管理',
            text: '為清大語言中心管理後台資料',
            date: 'fdsfsdfsd',
        }
    ]
];

import React from 'react';

import Paper from 'material-ui/Paper';

import './SelfInfo.css';

export default class SelfInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper id='info'>
                <div id='tableContainer'>
                    <table>
                        {info.map((obj, i) => (
                            <tr>
                                <th>
                                    {obj.key}
                                </th>
                                <td>
                                    {obj.value}
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </Paper>
        );
    }
}

const info = [
    {
        'key': '姓名',
        'value': '邱賢祐 (Jimmy Chiu)'
    },{
        'key': '生日',
        'value': '1997/07/02'
    },{
        'key': '手機',
        'value': '0953970702'
    },{
        'key': 'email',
        'value': 'jimmychiu702@gmail.com'
    },{
        'key': '學歷',
        'value': '國立清華大學資工系大三'
    }
];
import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme();

import './index.css';

window.onload = function() {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Main />
        </MuiThemeProvider>,
        document.getElementById('root')
    );
};

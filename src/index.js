import React from 'react';
import ReactDOM from 'react-dom/client';

import AppComponent from './App';
import {DummyComponent}  from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<AppComponent username="john"></AppComponent>
<AppComponent username='peter'></AppComponent>
</>
)

//JSX - JS +XHTML
//JSX Rules
/*
JS formats like variables - {}
*/

//components
/**
 * return JSX
 * class component
 * functional component
 */

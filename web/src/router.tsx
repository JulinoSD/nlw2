import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function router(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/classes" component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default router
import React from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import TeacherItem from '../../Components/TeacherItem';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teacher">
                    <Input name="Subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da semana"/>
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList
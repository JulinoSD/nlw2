import React, { useState, FormEvent } from 'react';
import Select from '../../Components/Select'

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import api from '../../services/api';

import './styles.css';


function TeacherList() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teacher" onSubmit={searchTeachers}>
                    <Select
                        name="Subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Informática', label: 'Informática' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekday(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda feira' },
                            { value: '2', label: 'Terça feira' },
                            { value: '3', label: 'Quarta feira' },
                            { value: '4', label: 'Quinta feira' },
                            { value: '5', label: 'Sexta feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button type="submit" onClick={searchTeachers}>
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                {/* <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem /> */}
            </main>
        </div>
    )
}

export default TeacherList
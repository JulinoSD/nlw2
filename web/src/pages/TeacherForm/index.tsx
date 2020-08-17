import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import warning from '../../assets/warning.svg';

import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';
import api from '../../services/api';
import './styles.css';



function TeacherForm() {
    const history = useHistory()
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState(
        [
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]
    )

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])
    }

    function handleCreateClasse(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=> {
            alert('Cadastro agendado com sucesso!')
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro, dados insuficientes ou problemas com a conexão da base de dados')
        })
    }

    function setScheduleEventeValue(position: number, field: string, value: string) {

        const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItem);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível você dar aulas!" description="O primeiro passo é preencher este formulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClasse}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>

                        <legend>Sobre a aula</legend>
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

                        <Input
                            name="cost"
                            label="Custo de hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div className="schedule_item" key={scheduleItem.week_day}>
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value = {scheduleItem.week_day}
                                        onChange={(e) => setScheduleEventeValue(index, 'week_day', e.target.value)}
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
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value = {scheduleItem.from}
                                        onChange={(e) => setScheduleEventeValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value = {scheduleItem.to}
                                        onChange={(e) => setScheduleEventeValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warning} alt="Imagem de aviso" />
                        Importante! <br />
                        Preeencha todos os dados
                    </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm
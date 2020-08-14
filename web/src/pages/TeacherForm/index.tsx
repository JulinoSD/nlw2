import React from 'react';
import PageHeader from '../../Components/PageHeader'
import Input from '../../Components/Input';
import warning from '../../assets/warning.svg'
import './styles.css'


function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível você dar aulas!" description="O primeiro passo é preencher este formulário de inscrição" />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />

                </fieldset>
                <fieldset>

                    <legend>Sobre a aula</legend>
                    <Input name="Subject" label="Matéria" />
                    <Input name="cost" label="Custo de hora por aula" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warning} alt="Imagem de aviso" />
                        Importante! <br />
                        Preeencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm
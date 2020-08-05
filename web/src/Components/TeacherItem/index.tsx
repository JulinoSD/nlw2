import React from 'react';

import whatIcon from '../../assets/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://www.facebook.com/photo?fbid=1833278073457805&set=a.178029572316005" alt="qualquer imagem"/>
            <div>
                <strong>Julino Segunda Dídimo</strong>
                <span>Auxiliar</span>
            </div>
        </header>

        <p>Porque de fato eu não sei o que sei</p>

        <footer>
            <p>Preço/hora <strong>25R$</strong></p>
            <button type="button">
                <img src={whatIcon} alt="Ícon do whatsapp"/>
                entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem
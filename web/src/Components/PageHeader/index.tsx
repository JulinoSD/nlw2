import React from 'react';
import {Link} from 'react-router-dom';

import backIcon from '../../assets/back.svg';
import logoImg from '../../assets/logo.svg';
import './styles.css';

interface PageHeaderProps {
    title: string
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Botão de voltar"/>
                </Link>
                <img src={logoImg} alt="Logotipo"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            </div>
            {props.children}
        </header>
    )
}
export default PageHeader
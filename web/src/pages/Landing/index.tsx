import React from 'react'

import LogoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import studyIcon from '../../assets/study.svg';
import giveClassesIcon from '../../assets/give-classes.svg';
import purpleHeartIcon from'../../assets/purple-heart.svg';

import './styles.css';

function Landing(){
   return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={LogoImg} alt="Logo da marca"/>
                   <h2>Sua plataforma de estudos online</h2>
               </div>
               <img 
               src={landingImg} 
               alt="Imagens de duas pessoas" className="hero-image"
               />
               <div className="buttons-container">
                   <a href="#" className="study">
                       <img src={studyIcon} alt="Ícone de botão"/>
                       estudar
                   </a>
                   <a href="#" className="give-classes">
                       <img src={giveClassesIcon} alt="Ícone de botão"/>
                       estudar
                   </a>
               </div>
               <span className="total-connections">
                       Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração de púrpura"/>
                </span>
            </div>
       </div>
   ) 
}

export default Landing;
import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/28990547?s=460&v=4" alt="Eduardo"/>
                <div>
                    <strong>Eduardo Lima</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Integer ac laoreet dui, id luctus enim. Cras scelerisque sagittis porta.
                <br/><br/>
                Sed ut efficitur neque. Cras molestie leo non consequat pharetra.
                <br/>
                Fusce sagittis eget justo ut imperdiet. Suspendisse congue quis felis in ultrices.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 90,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
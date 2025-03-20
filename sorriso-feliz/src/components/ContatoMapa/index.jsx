import React from "react";
import './ContatoMapa.css'

import dentista01 from '../../assets/dentista01.jpg'
import dentista02 from '../../assets/dentista02.jpg'
import dentista03 from '../../assets/dentista03.jpg'

export default function ContatoMapa(){

    const dentistas = [
        {
            nome: 'Dra Ana Paula',
            foto: dentista01,
            horarios: 'Segunda a Sexta: 8h - 14h',
        },
        {
            nome: 'Dra Maristela',
            foto: dentista02,
            horarios: 'terça a Quinta e Sábado: 10h - 18h',
        },
        {
            nome: 'Dra Maria Fernanda',
            foto: dentista03,
            horarios: 'Segunda a Quarta e Sexta: 13h - 19h',
        }
    ];

    return(
        <section className="contato-mapa">
            <h2>Horario de Atendimento</h2>

            <div className="dentistas-container">
                {dentistas.map((dentista, index) =>(
                    <div key={index} className="dentista-card">
                        <img src={dentista.foto} alt={dentista.foto} />
                        <h3>{dentista.nome}</h3>
                        <p>{dentista.horarios}</p>
                    </div>
                ))}
            </div>

            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.3930240059583!2d-46.72218207869948!3d-23.64783202093297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce510e8d3746ed%3A0x3e9f3a76e1ebfb69!2sSenai%20Santo%20Amaro%20-%20Su%C3%AD%C3%A7o-Brasileira!5e0!3m2!1spt-PT!2sbr!4v1742491986476!5m2!1spt-PT!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                title="Mapa Clinica">
                </iframe>
            </div>
            <div className="telefones">
                <p>Telefone: (11) 1234-5678</p>
                <p>Whatsapp: (11) 8765-4321</p>
           </div>

        </section>
    )

}
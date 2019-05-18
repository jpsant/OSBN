import React, { Component } from 'react';
import classes from './css/InfoSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class InfoSection extends Component {
    render() {
        return (
            <>
                <div className={classes.infoContainer}>
                    <TransitionDiv title=" & A Orquestra" />
                    <div className={classes.textContainer}>
                        <h2 className={classes.infoText}>
                            A Orquestra Sanfônica Balaio Nordeste teve origem em uma oficina de acordeon realizada pela “Associação Cultural Balaio Nordeste” e a FUNJOPE
                            (Fundação Cultural de João Pessoa) em março de 2010. Com arranjos próprios e produção musical do maestro Lucílio e de alguns músicos participantes,
                            a Orquestra vem se firmando como um dos produtos culturais mais genuínos e expressivos da música nordestina, e conta, na sua formação atual, com 14 integrantes:
                            o maestro, oito acordeonistas, duas flautistas e três percussionistas.
                        </h2>
                        <h2 className={classes.infoText}>
                            A Orquestra já se apresentou em vários estados brasileiros e, por dois anos consecutivos (2015/2016) na França, onde participou do maior festival de acordeon do país,
                            "Le Printemps des Bretelles", sendo que em 2016, a convite do Setor Cultural da Embaixada do Brasil na França, realizou também um concerto na noite de inauguração do salão internacional do livro,
                            “Livre Paris 2016”, se apresentando ainda no Teatro Lúcio Costa, na Fundação “Maison du Brésil”, em Paris.
                        </h2>
                        <h2 className={classes.infoText}>
                            Em maio de 2017, a Orquestra foi contemplada pelo programa Ibermúsicas e viajou para o Peru onde se apresentou no festival FESTIFOLCOR, em Arequipa.
                        </h2>
                        <h2 className={classes.infoText}>
                            Em junho de 2017, gravou no Theatro Santa Roza, em João Pessoa, o DVD “Orquestra Sanfônica em Ritmos de Nordeste” com a participação de artistas renomados como Irah Caldeira,
                            Pinto do Acordeon, Cezzinha e Silvério Pessoa.
                        </h2>
                        <h2 className={classes.infoText}>
                            O repertório da Orquestra apresenta grandes mestres da música brasileira, como Luiz Gonzaga, Jackson do Pandeiro, Chico César,  Sivuca, dentre outros, levando o público a cantar e dançar ao som de cirandas,
                            coco de roda, baião, xote, e muito forró.
                        </h2>
                    </div>
                </div>
            </>
        );
    }
}

export default InfoSection;
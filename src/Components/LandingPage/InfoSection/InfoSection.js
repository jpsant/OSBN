import React, { Component } from 'react';
import classes from './css/InfoSection.module.css';
import { connect } from 'react-redux';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class InfoSection extends Component {
    render() {
        return (
            <>
                <div className={classes.infoContainer}>
                    <TransitionDiv title={this.props.language === 'portuguese' ? '& A Orquestra!' :
                        this.props.language === 'english' ? '& The Orchestra!' :
                            this.props.language === 'french' ? '& L\'orchestre!' : ''} />
                    <div className={classes.textContainer}>
                        <h2>
                            {this.props.language === 'portuguese' ? `A Orquestra Sanfônica Balaio Nordeste teve origem em uma oficina de acordeon realizada pela “Associação Cultural Balaio Nordeste” e a FUNJOPE (Fundação Cultural de João Pessoa) em março de 2010. Com arranjos próprios e produção musical do maestro Lucílio e de alguns músicos participantes,
                            a Orquestra vem se firmando como um dos produtos culturais mais genuínos e expressivos da música nordestina, e conta, na sua formação atual, com 14 integrantes:
                            o maestro, oito acordeonistas, duas flautistas e três percussionistas.` :
                            this.props.language === 'english' ? `The Orchestra Sanfônica Balaio Nordeste originated in an accordion workshop held by the "Balaio Nordeste Cultural Association" and FUNJOPE (Cultural Foundation of João Pessoa) in March 2010. With its own arrangements and musical production of maestro Lucílio and some of the participating musicians,
                            the Orchestra has established itself as one of the most genuine and expressive cultural products of northeastern music, and counts, in its current formation, with 14 members:
                            the maestro, eight accordionists, two flute players and three percussionists.` :
                            this.props.language === 'french' ? `
                            Le Orquestra Sanfônica Balaio Nordeste a été créé en mars 2010 lors d'un atelier d'accordéon organisé par l'association culturelle Balaio Nordeste et la FUNJOPE (Fondation culturelle de João Pessoa).
                            L’Orchestre s’est établi comme l’un des produits culturels les plus authentiques et les plus expressifs de la musique du Nord-Est et compte, dans sa formation actuelle, 14 membres:
                            le maestro, huit accordéonistes, deux flûtistes et trois percussionnistes.` : ''}
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `A Orquestra já se apresentou em vários estados brasileiros e, por dois anos consecutivos (2015/2016) na França, onde participou do maior festival de acordeon do país,
                            "Le Printemps des Bretelles", sendo que em 2016, a convite do Setor Cultural da Embaixada do Brasil na França, realizou também um concerto na noite de inauguração do salão internacional do livro,
                            “Livre Paris 2016”, se apresentando ainda no Teatro Lúcio Costa, na Fundação “Maison du Brésil”, em Paris.` : 
                            this.props.language === 'english' ? `The Orchestra has performed in several Brazilian states and for two consecutive years (2015/2016) in France, where it participated in the country's largest accordion festival,
                            "Le Printemps des Bretelles", and in 2016, at the invitation of the Cultural Sector of the Embassy of Brazil in France, also held a concert on the opening night of the international book fair,
                            "Livre Paris 2016", performing at the Teatro Lúcio Costa, at the "Maison du Brésil" Foundation in Paris.` : 
                            this.props.language === 'french' ? `L'Orchestre s'est produit dans plusieurs États brésiliens et deux années consécutives (2015/2016) en France, où il a participé au plus grand festival d'accordéon du pays.
                            "Le Printemps des Bretelles" et en 2016, à l'invitation du secteur culturel de l'ambassade du Brésil en France, ont également donné un concert lors de la soirée d'ouverture du salon international du livre,
                            "Livre Paris 2016", au Teatro Lúcio Costa, à la Fondation "Maison du Brésil" à Paris.` : ''}
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `Em maio de 2017, a Orquestra foi contemplada pelo programa Ibermúsicas e viajou para o Peru onde se apresentou no festival FESTIFOLCOR, em Arequipa.` :
                            this.props.language === 'english' ? `In May 2017, the Orchestra was contemplated by the Ibermúsicas program and traveled to Peru where it performed at the FESTIFOLCOR festival in Arequipa.` : 
                            this.props.language === 'french' ? `En mai 2017, le programme Ibermúsicas a permis à l'orchestre de se rendre au Pérou, où il s'est produit lors du festival FESTIFOLCOR à Arequipa.` : ''}
`}
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `Em junho de 2017, gravou no Theatro Santa Roza, em João Pessoa, o DVD “Orquestra Sanfônica em Ritmos de Nordeste” com a participação de artistas renomados como Irah Caldeira,
                            Pinto do Acordeon, Cezzinha e Silvério Pessoa.` : 
                            this.props.language === 'english' ? `In June of 2017, he recorded in the Theatro Santa Roza, in João Pessoa, the DVD "Orphestra Sanfônica in Ritmos de Nordeste" with the participation of renowned artists like Irah Caldeira,
                            Pinto do Acordeon, Cezzinha and Silvério Pessoa.` : 
                            this.props.language === 'french' ? `In June of 2017, he recorded in the Theatro Santa Roza, in João Pessoa, the DVD "Orphestra Sanfônica in Ritmos de Nordeste" with the participation of renowned artists like Irah Caldeira,
                            Pinto do Acordeon, Cezzinha and Silvério Pessoa.` : ''}
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `O repertório da Orquestra apresenta grandes mestres da música brasileira, como Luiz Gonzaga, Jackson do Pandeiro, Chico César,  Sivuca, dentre outros, levando o público a cantar e dançar ao som de cirandas,
                            coco de roda, baião, xote, e muito forró.` :
                            this.props.language === 'english' ? `The repertoire of the Orchestra presents great masters of Brazilian music, such as Luiz Gonzaga, Jackson do Pandeiro, Chico César, Sivuca, among others, leading the audience to sing and dance to the sound of cirandas,
                            coco de roda, baião, xote, and much forró.` : 
                            this.props.language === 'french' ? `Le répertoire de l'orchestre présente de grands maîtres de la musique brésilienne, tels que Luiz Gonzaga, Jackson do Pandeiro, Chico César, Sivuca, entre autres, amenant le public à chanter et à danser au son des cirandas,
                            coco de roda, baião, xote, et beaucoup pour foro.` : ''}
                        </h2>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(InfoSection);
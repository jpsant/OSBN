import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './css/InfoSection.module.css';
import YouTube from 'react-youtube';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class InfoSection extends Component {

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div style={{ backgroundColor: '#b05f24' }}>
                <TransitionDiv bgColor="#c76d2b" title={this.props.language === 'portuguese' ? 'A Orquestra' :
                    this.props.language === 'english' ? 'The Orchestra' :
                        this.props.language === 'french' ? 'L\'orchestre' : ''} />
                <div className={classes.infoContainer}>
                    <div className={classes.textContainer}>
                        <h2>
                            {this.props.language === 'portuguese' ? `A Orquestra Sanfônica Balaio Nordeste é o produto de maior visibilidade da entidade e surgiu da necessidade de inovação no cenário 
                            musical e hoje difunde a cultura nordestina e particularmente a paraibana por onde passa.` :
                                this.props.language === 'english' ? `The Orchestra Sanfônica Balaio Nordeste originated in an accordion workshop held by the "Balaio Nordeste Cultural Association" and FUNJOPE (Cultural Foundation of João Pessoa) in March 2010. With its own arrangements and musical production of maestro Lucílio and some of the participating musicians,
                            the Orchestra has established itself as one of the most genuine and expressive cultural products of northeastern music, and counts, in its current formation, with 14 members:
                            the maestro, eight accordionists, two flute players and three percussionists.` :
                                    this.props.language === 'french' ? `
                            Le Orquestra Sanfônica Balaio Nordeste a été créé en mars 2010 lors d'un atelier d'accordéon organisé par l'association culturelle Balaio Nordeste et la FUNJOPE (Fondation culturelle de João Pessoa).
                            L’Orchestre s’est établi comme l’un des produits culturels les plus authentiques et les plus expressifs de la musique du Nord-Est et compte, dans sa formation actuelle, 14 membres:
                            le maestro, huit accordéonistes, deux flûtistes et trois percussionnistes.` : ''}
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `Com dois DVD’s no currículo, rompeu as fronteiras do Brasil e se apresentou no maior festival de acordeon da França, retornando no ano seguinte como convidada de honra. Em 2017 
                            Orquestra foi contemplada pelo programa Ibermúsicas e viajou para o Peru, onde se apresentou no festival FESTIFOLCOR, em Arequipa..` :
                                this.props.language === 'english' ? `The Orchestra has performed in several Brazilian states and for two consecutive years (2015/2016) in France, where it participated in the country's largest accordion festival,
                            "Le Printemps des Bretelles", and in 2016, at the invitation of the Cultural Sector of the Embassy of Brazil in France, also held a concert on the opening night of the international book fair,
                            "Livre Paris 2016", performing at the Teatro Lúcio Costa, at the "Maison du Brésil" Foundation in Paris.` :
                                    this.props.language === 'french' ? `L'Orchestre s'est produit dans plusieurs États brésiliens et deux années consécutives (2015/2016) en France, où il a participé au plus grand festival d'accordéon du pays.
                            "Le Printemps des Bretelles" et en 2016, à l'invitation du secteur culturel de l'ambassade du Brésil en France, ont également donné un concert lors de la soirée d'ouverture du salon international du livre,
                            "Livre Paris 2016", au Teatro Lúcio Costa, à la Fondation "Maison du Brésil" à Paris.` : ''}
                        </h2>
                        <h2>
                            {
                                this.props.language === 'portuguese' ? 'Já se apresentou nos mais variados palcos do Brasil, participando de projetos que fomentam a música regional.' :
                                    this.props.language === 'english' ? 'In May 2017, the Orchestra was contemplated by the Ibermúsicas program and traveled to Peru where it performed at the FESTIFOLCOR festival in Arequipa.' :
                                        this.props.language === 'french' ? 'En mai 2017, le programme Ibermúsicas a permis à l\'orchestre de se rendre au Pérou, où il s\'est produit lors du festival FESTIFOLCOR à Arequipa.' : ''
                            }
                        </h2>
                        <h2>
                            {this.props.language === 'portuguese' ? `O desafio é fazer com que a OSBN tenha um calendário permanente de apresentações, seja no estado, seja nos palcos do Brasil e de outros países` :
                                this.props.language === 'english' ? `In June of 2017, he recorded in the Theatro Santa Roza, in João Pessoa, the DVD "Orphestra Sanfônica in Ritmos de Nordeste" with the participation of renowned artists like Irah Caldeira,
                            Pinto do Acordeon, Cezzinha and Silvério Pessoa.` :
                                    this.props.language === 'french' ? `En juin 2017, il a enregistré au Theatro Santa Roza, à João Pessoa, le DVD "Orphestra Sanfônica in Ritmos de Nordeste", avec la participation d'artistes de renom tels que Irah Caldeira,
                            Pinto do Acordeon, Cezzinha et Silvério Pessoa.` : ''}
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
                    <div className={classes.videoContainer}>
                        <div className={classes.video1}>
                            <YouTube
                                videoId="gcLEq0KySI4"
                                opts={opts}
                                onReady={this._onReady}
                                className={classes.videoPlayer1}
                            />
                        </div>
                        <div className={classes.video2}>
                            <YouTube
                                videoId="Ib7lBJd7Av8"
                                opts={opts}
                                onReady={this._onReady}
                                className={classes.videoPlayer2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(InfoSection);
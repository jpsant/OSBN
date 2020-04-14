import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import YouTube from 'react-youtube';
import IntersectionVisible from 'react-intersection-visible';
import { Fade } from 'react-reveal';

import TransitionDiv from '../../UI/transitionDiv';
import LazyLoad from 'react-lazy-load';

class InfoSection extends Component {

    state = {
        show: false
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <>
                <IntersectionVisible onShow={() => this.setState({ show: true })}>
                    <div style={{ backgroundColor: '#b05f24' }}>
                        <TransitionDiv show={this.state.show} bgColor="#c76d2b" title={this.props.language === 'portuguese' ? 'A Orquestra' :
                            this.props.language === 'english' ? 'The Orchestra' :
                                this.props.language === 'french' ? 'L\'orchestre' : ''} />
                        <div className="info-container">
                            <div className="info-container__text-container">
                                <h2>
                                    {this.props.language === 'portuguese' ? `A Orquestra Sanfônica Balaio Nordeste é o produto de maior visibilidade da entidade e surgiu da necessidade de inovação no cenário 
                            musical e hoje difunde a cultura nordestina e particularmente a paraibana por onde passa.` :
                                        this.props.language === 'english' ? `The Balaio Nordeste Orchestra is the most visible product of the entity and emerged from the need for innovation in the music scene and today spreads the northeastern Brazilian culture and particularly the Paraibana where it passes.` :
                                            this.props.language === 'french' ? `
                                            Le Balaio Nordeste Orchestra est le produit le plus visible de l’entité. Il découle du besoin d’innovation sur la scène musicale et propage aujourd’hui dans le nord-est de la culture brésilienne, et en particulier dans la région de Paraibana.` : ''}
                                </h2>
                                <h2>
                                    {this.props.language === 'portuguese' ? `Com dois DVD’s no currículo, rompeu as fronteiras do Brasil e se apresentou no maior festival de acordeon da França, retornando no ano seguinte como convidada de honra. Em 2017 
                            Orquestra foi contemplada pelo programa Ibermúsicas e viajou para o Peru, onde se apresentou no festival FESTIFOLCOR, em Arequipa..` :
                                        this.props.language === 'english' ? `With two DVDs in the curriculum, the Orchestra broke the borders of Brazil and performed at the largest accordion festival in France, returning the following year as a guest of honor. In 2017 the Orchestra was awarded by the Ibermúsicas program and traveled to Peru, where it performed at the FESTIFOLCOR festival in Arequipa.` :
                                            this.props.language === 'french' ? `Avec deux DVD au programme, l'orchestre a brisé les frontières du Brésil et s'est produit lors du plus grand festival d'accordéon en France, avant de revenir l'année suivante en tant qu'invité d'honneur. En 2017, l'Orchestre a été récompensé par le programme Ibermúsicas et s'est rendu au Pérou, où il s'est produit lors du festival FESTIFOLCOR à Arequipa.` : ''}
                                </h2>
                                <h2>
                                    {
                                        this.props.language === 'portuguese' ? 'Já se apresentou nos mais variados palcos do Brasil, participando de projetos que fomentam a música regional.' :
                                            this.props.language === 'english' ? 'The Orchestra has performed on various stages in Brazil, participating in projects that promote regional music.' :
                                                this.props.language === 'french' ? 'L\'Orchestre s\'est produit sur diverses scènes au Brésil, participant à des projets de promotion de la musique régionale.' : ''
                                    }
                                </h2>
                                <h2>
                                    {this.props.language === 'portuguese' ? `O desafio é fazer com que a OSBN tenha um calendário permanente de apresentações, seja no estado, seja nos palcos do Brasil e de outros países` :
                                        this.props.language === 'english' ? `The challenge is to make OSBN have a permanent schedule of presentations, either in the state or on the stage in Brazil and other countries.` :
                                            this.props.language === 'french' ? `Le défi consiste à faire en sorte que OSBN ait un calendrier de présentations permanent, soit dans l’état, soit au Brésil et dans d’autres pays.` : ''}
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
                            <div className="info-container__video-container">

                                <Fade bottom>
                                    <div className="info-container__video-container-video1">
                                        <LazyLoad offsetVertical={500} debounce={false} throttle={250}>
                                            <YouTube
                                                videoId="gcLEq0KySI4"
                                                opts={opts}
                                                onReady={this._onReady}
                                                className="info-container__video-container-video1-videoPlayer1"
                                            />
                                        </LazyLoad>
                                    </div>
                                </Fade>
                                <Fade bottom>
                                    <div className="info-container__video-container-video2">
                                        <LazyLoad offsetVertical={500} debounce={false} throttle={250}>
                                            <YouTube
                                                videoId="Ib7lBJd7Av8"
                                                opts={opts}
                                                onReady={this._onReady}
                                                className="info-container__video-container-video2-videoPlayer2"
                                            />
                                        </LazyLoad>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </IntersectionVisible>
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
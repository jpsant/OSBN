import React, { Component } from 'react';
import classes from './css/dvdsection.module.css';

import { Fade } from 'react-reveal';
import Helmet from 'react-helmet';
import ReactPageScroller from 'react-page-scroller';

import LeftUp from '../../UI/animated-components/animated-left-up/LeftUp';
import RightUp from '../../UI/animated-components/animated-right-up/RightUp';
import LeftDown from '../../UI/animated-components/animated-left-down/LeftDown';
import RightDown from '../../UI/animated-components/animated-right-down/RightDown';

import UpArabesco from '../../UI/animated-components/animated-up-arabesco/up-arabesco';
import DownArabesco from '../../UI/animated-components/animated-down-arabesco/down-arabeso';
import Dancers from '../../UI/animated-components/animated-dancers/Dancers';
import Bird from '../../UI/animated-components/animated-Bird/Birds';
import Sky from '../../UI/animated-components/animated-sky/sky';
import Cactus from '../../UI/animated-components/animated-cactus/cactus';

import FullUp from '../../UI/animated-components/animated-full-up/full-up';
import FullDown from '../../UI/animated-components/animated-full-down/full-down';
import Accordion from '../../UI/animated-components/animated-accordion/accordion';
import Drum from '../../UI/animated-components/animated-drum/drum';
import Triangle from '../../UI/animated-components/animated-triangle/triangle';
import Flute from '../../UI/animated-components/animated-flute/flute';

import LateralLeft from '../../UI/animated-components/animated-lateral-left/lateralLeft';
import LateralRight from '../../UI/animated-components/animated-lateral-right/lateralRight';

import Pagination from '../../UI/dvdPagination/pagination';

class DvdSection extends Component {

    state = {
        currentPage: 0
    }

    handlePageChange = (number) => {
        this.setState({ currentPage: number}); // set currentPage number, to reset it from the previous selected.
    };

    render() {
        return (
            <>
                <Helmet>
                    <title>Orquestra Sanfônica Balaio Nordeste DVD</title>
                    <meta name="description" content="Página Promocional do DVD da Orquestra Sanfônica Balaio Nordeste"></meta>
                </Helmet>
                <LeftUp show={this.state.currentPage === 0 ? true : false} />
                <RightUp show={this.state.currentPage === 0 ? true : false} />
                <LeftDown show={this.state.currentPage === 0 ? true : false} />
                <RightDown show={this.state.currentPage === 0 ? true : false} />

                {/* Como os arquivos CSS sem o .module afetam a aplicação inteira tomei o cuidado de utilizar nomes únicos para as classes
                    E as classes e animações dos Arabescos estão no arquivo CSS do componente 'Arabesco-left-up'.
                */}

                <div className={classes.animationsContainer}>
                    <DownArabesco show={this.state.currentPage === 1 ? true : false} />
                    <UpArabesco show={this.state.currentPage === 1 ? true : false} />

                    <Dancers show={this.state.currentPage === 1 ? true : false} />
                    <Bird show={this.state.currentPage === 1 ? true : false} />
                    <Sky show={this.state.currentPage === 1 ? true : false} />
                    <Cactus show={this.state.currentPage === 1 ? true : false} />

                    <FullUp show={this.state.currentPage === 2 ? true : false} />
                    <FullDown show={this.state.currentPage === 2 ? true : false} />

                    <Accordion show={this.state.currentPage === 2 ? true : false} />
                    <Drum show={this.state.currentPage === 2 ? true : false} />
                    <Flute show={this.state.currentPage === 2 ? true : false} />
                    <Triangle show={this.state.currentPage === 2 ? true : false} />

                    <LateralLeft show={this.state.currentPage === 3 ? true : false} />
                    <LateralRight show={this.state.currentPage === 3 ? true : false} />

                    <Pagination changePage={this.handlePageChange} page={this.state.currentPage} />

                </div>

                <ReactPageScroller pageOnChange={this.handlePageChange} customPageNumber={this.state.currentPage} >
                    <div className={classes.section1}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <div className={classes.titleContainer}>
                            <h1 className={this.state.currentPage === 0 ? classes.hat : classes.hatOut}>&</h1>
                            <h1 className={this.state.currentPage === 0 ? classes.title : classes.titleOut}>Orquestra Sanfônica Balaio Nordeste</h1>
                        </div>
                        <div className={classes.bodyContainer}>
                            <h1 className={this.state.currentPage === 0 ? classes.subtitle : classes.subtitleOut}>DVD Promocional.</h1>
                        </div>
                    </div>
                    <div className={classes.section2}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Ffinal_5dd8229506e13f0014424e08_673406.mp4?alt=media&token=fafc2cdf-b14d-40be-a987-913dfc26ae38'} type='video/mp4' />
                            </video>
                        </div>
                        <div className={classes.textContainer}>
                            <h1 className={this.state.currentPage === 1 ? classes.hat : classes.hatOut}>&</h1>
                            <h2 className={this.state.currentPage === 1 ? classes.text : classes.textOut}>A Orquestra Sanfônica Balaio Nordeste difunde a Cultura Nordestina, apresentando
                            seus valores e mantendo viva a sua tradição e de seus personagens.</h2>
                        </div>

                    </div>
                    <div className={classes.section3}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2FARTISTAS1.mp4?alt=media&token=31c31b98-ca11-4860-95ca-7ab6c9114a14'} type='video/mp4' />
                            </video>
                        </div>
                        <div className={classes.textContainer}>
                            <h1 className={this.state.currentPage === 2 ? classes.hat : classes.hatOut}>&</h1>
                            <h2 className={this.state.currentPage === 2 ? classes.text : classes.textOut}>Ao som de Cirandas, Côco de Roda, Baião, Xote e muito Forró
                            A Orquestra Sanfônica Balaio Nordeste divide o palco com grandes mestres da Música Brasileira, como Luiz Gonzaga, Jackson do Pandeiro, Chico César, Sivuca, dentre outros.</h2>
                        </div>
                    </div>
                    <div className={classes.section4}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <div className={classes.textContainer}>

                        </div>
                    </div>
                </ReactPageScroller>
            </>
        )
    }
}

export default DvdSection;


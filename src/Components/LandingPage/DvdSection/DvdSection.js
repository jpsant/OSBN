import React, { Component } from 'react';
import classes from './css/dvdsection.module.css';
import video1 from './video/video1.mp4';

import ReactPageScroller from 'react-page-scroller';
import { Fade } from 'react-reveal';

class DvdSection extends Component {

    state = {
        currentPage: 1
    }

    handlePageChange = (number) => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    render() {
        console.log(this.state.currentPage)
        return (
            <>
                <ReactPageScroller pageOnChange={this.handlePageChange}>
                    <div className={classes.section1}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <Fade top duration={3500}>
                            <div className={classes.titleContainer}>
                                <h1 className={classes.hat}>&</h1>
                                <h1>Orquestra Sanfônica Balaio Nordeste</h1>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={classes.bodyContainer}>
                                <h1>DVD Promocional.</h1>
                            </div>
                        </Fade>
                    </div>
                    <div className={classes.section2}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <Fade top duration={3500}>
                            <div className={classes.titleContainer}>
                                <h1 className={classes.hat}>&</h1>
                                <h1>Orquestra Sanfônica Balaio Nordeste</h1>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={classes.bodyContainer}>
                                <h1>DVD Promocional da Orquestra.</h1>
                            </div>
                        </Fade>
                    </div>
                    <div className={classes.section3}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <Fade top duration={3500}>
                            <div className={classes.titleContainer}>
                                <h1 className={classes.hat}>&</h1>
                                <h1>Orquestra Sanfônica Balaio Nordeste</h1>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={classes.bodyContainer}>
                                <h1>DVD Promocional da Orquestra.</h1>
                            </div>
                        </Fade>
                    </div>
                </ReactPageScroller>
            </>
        )
    }
}

export default DvdSection;


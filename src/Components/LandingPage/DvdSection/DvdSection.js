import React, { Component } from 'react';
import classes from './css/dvdsection.module.css';

import { Fade } from 'react-reveal';
import ReactPageScroller from 'react-page-scroller';

import LeftUp from '../../UI/animated-left-up/LeftUp';
import RightUp from '../../UI/animated-right-up/RightUp';
import LeftDown from '../../UI/animated-left-down/LeftDown';
import RightDown from '../../UI/animated-right-down/RightDown';

import UpArabesco from '../../UI/animated-up-arabesco/up-arabesco';
import DownArabesco from '../../UI/animated-down-arabesco/down-arabeso';
import Dancers from '../../UI/animated-dancers/Dancers';

import FullUp from '../../UI/animated-full-up/full-up';
import FullDown from '../../UI/animated-full-down/full-down';

class DvdSection extends Component {

    state = {
        currentPage: 1
    }

    handlePageChange = (number) => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    render() {
        return (
            <>
                <LeftUp show={this.state.currentPage === 1 ? true : false} />
                <RightUp show={this.state.currentPage === 1 ? true : false} />
                <LeftDown show={this.state.currentPage === 1 ? true : false} />
                <RightDown show={this.state.currentPage === 1 ? true : false} />

                <div className={classes.animationsContainer}>
                    <DownArabesco show={this.state.currentPage === 2 ? true : false} />
                    <UpArabesco show={this.state.currentPage === 2 ? true : false} />
                    <Dancers show={this.state.currentPage === 2 ? true : false  } />


                    <FullUp show={this.state.currentPage === 3 ? true : false} />
                    <FullDown show={this.state.currentPage === 3 ? true : false} />
                </div>

                <ReactPageScroller pageOnChange={this.handlePageChange}>
                    <div className={classes.section1}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        <div className={classes.titleContainer}>
                            <h1 className={this.state.currentPage === 1 ? classes.hat : classes.hatOut}>&</h1>
                            <h1 className={this.state.currentPage === 1 ? classes.title : classes.titleOut}>Orquestra Sanfônica Balaio Nordeste</h1>
                        </div>
                        <div className={classes.bodyContainer}>
                            <h1 className={this.state.currentPage === 1 ? classes.subtitle: classes.subtitleOut}>DVD Promocional.</h1>
                        </div>
                    </div>
                    <div className={classes.section2}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        
                    </div>
                    <div className={classes.section3}>
                        <div className={classes.container}>
                            <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                                <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                            </video>
                        </div>
                        
                    </div>
                </ReactPageScroller>
            </>
        )
    }
}

export default DvdSection;


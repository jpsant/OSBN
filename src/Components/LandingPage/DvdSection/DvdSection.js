import React, { Component } from 'react';
import classes from './css/dvdsection.module.css';
import ReactPageScroller from 'react-page-scroller';

class DvdSection extends Component {

    state = {
        currentPage: null
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
                        <h1>section1</h1>
                    </div>
                    <div className={classes.section2}>
                        <h1>section2</h1>
                    </div>
                    <div className={classes.section3}>
                        <h1>section3</h1>
                    </div>
                </ReactPageScroller>
            </>
        )
    }
}

export default DvdSection;
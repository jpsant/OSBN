import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class NewsPost extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias/' + this.props.language + '.json')
            .then(response => {
                this.setState({ post: response.data, id: this.props.match.params.id });
            })
    }

    state = {
        post: false,
        id: null
    }

    render() {

        let post = null;
        if (this.state.post) {
            let result = null;
            let item = this.state.post;
            post = Object.values(item).map(item => {
                return item.id === this.state.id ? console.log(item) : null;
            })
        }

        return (
            <>
                {post}
                <h1>post in: {this.props.language}, {this.props.match.params.id}</h1>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(NewsPost);
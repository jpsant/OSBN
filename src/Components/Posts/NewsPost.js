import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import FullPost from '../UI/fullPost/fullPost';

class NewsPost extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias/' + this.props.language + '.json')
            .then(response => {
                this.setState({ post: response.data, id: this.props.match.params.id });
            });
    }

    state = {
        post: false,
        id: null,
    }

    render() {

        let post = null;
        if (this.state.post) {
            let item = this.state.post;
            post = Object.values(item).map(item => {
                return item.id === this.state.id ? <FullPost key={item.id} language={this.props.language} text={item.noticia} image={item.imagem} title={item.titulo} /> : null;
            })
        }

        return (
            <>
                {/* <h1>post in: {this.props.language}, {this.props.match.params.id}</h1> */}
                {post}
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
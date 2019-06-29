import React, { Component } from 'react';
import classes from './css/Menu.module.css';

class Menu extends Component {
    render() {

        return (
            <>
                <div className={classes.pageContainer}>
                    <div className={classes.titleContainer}>
                        <h1 className={classes.title}>Gerenciamento de Páginas</h1>
                        <h2>Escolha qual seção editar :</h2>
                    </div>
                    <div className={classes.cardsContainer}>
                        <div className={classes.card1}>
                            <div className={classes.title}>
                                <h1>Seção de Notícias</h1>
                                <h3>Adicionar nova Notícia ou Editar notícias existentes:</h3>
                            </div>
                            <div className={classes.buttons}>
                                <div className={classes.addContainer}>
                                    <button onClick={this.props.newsAdd} className={classes.add}>Adicionar</button>
                                </div>
                                <div className={classes.editContainer}>
                                    <button onClick={this.props.newsEdit} className={classes.edit}>Editar</button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card2}>
                            <div className={classes.title}>
                                <h1>Seção de Fotos</h1>
                                <h3>Adicionar novas fotos ou Remover fotos existentes:</h3>
                            </div>
                            <div className={classes.buttons}>
                                <button onClick={this.props.galleryEdit} className={classes.edit}>Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;
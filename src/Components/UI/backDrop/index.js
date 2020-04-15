import React from 'react';
import './styles.scss'

const backDrop = (props) => {
    return (
        props.show ? <div className="Backdrop" style={{opacity: '1', width: '100%'}} onClick={props.clicked} ></div> : <div className="Backdrop" style={{opacity: '0', width: '0%'}} onClick={props.clicked} ></div>
    );
}

export default backDrop;
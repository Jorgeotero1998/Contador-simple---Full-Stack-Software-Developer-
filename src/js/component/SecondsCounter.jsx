import React from 'react';

const SecondsCounter = (props) => {
    let tiempoStr = props.seconds.toString().padStart(6, '0');
    let digitos = tiempoStr.split('');
    
    const estiloCaja = {
        background: '#1a1a1a',
        color: 'white',
        fontSize: '80px',
        padding: '20px',
        borderRadius: '10px',
        minWidth: '85px',
        textAlign: 'center',
        margin: '5px',
        fontFamily: 'sans-serif'
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black'}}>
            <div style={{display: 'flex'}}>
                <div style={estiloCaja}><i className='far fa-clock'></i></div>
                {digitos.map((n, i) => (
                    <div key={i} style={estiloCaja}>{n}</div>
                ))}
            </div>
            <div style={{marginTop: '30px'}}>
                <button className="btn btn-outline-light mx-2" onClick={props.alPausar}>
                    {props.pausado ? 'Resumir' : 'Pausar'}
                </button>
                <button className="btn btn-outline-danger mx-2" onClick={props.alReiniciar}>Reiniciar</button>
            </div>
        </div>
    );
};

export default SecondsCounter;

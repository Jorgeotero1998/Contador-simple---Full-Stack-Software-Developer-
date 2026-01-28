import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './component/SecondsCounter.jsx';

const root = ReactDOM.createRoot(document.querySelector('#app'));

let segundos = 0;
let estaPausado = false;
let tiempoAlerta = prompt("¿A los cuántos segundos quieres la alerta?", "10");

const renderApp = () => {
    root.render(
        <SecondsCounter 
            seconds={segundos} 
            pausado={estaPausado}
            alPausar={() => { estaPausado = !estaPausado; renderApp(); }}
            alReiniciar={() => { segundos = 0; renderApp(); }}
        />
    );
};

setInterval(() => {
    if (!estaPausado) {
        segundos++;
        renderApp();
        if (segundos == tiempoAlerta) {
            alert('¡Se ha alcanzado el tiempo de ' + tiempoAlerta + ' segundos!');
        }
    }
}, 1000);

renderApp();

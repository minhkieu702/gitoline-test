import React, {Component} from "react";
import cr from './images/cr.jpg';
import m from './images/m.jpg';
import messi from './images/messi.jpg';
import neymar from './images/neymar.jpg';
import kante from './images/kante.jpg';
import kane from './images/kane.jpg';
import haaland from './images/haaland.jpg';
export default class Player extends Component{
    render(){
        return(
            <div className="container">
                <div className="column">
                    <div className="card">
                    <img src={cr}/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src={haaland}/>
                        <h3>haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <img src={neymar}/>
                        <h3>neymar</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}
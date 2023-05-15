import React, {Component} from "react";
import { Players } from "./shared/ListOfPlayers";
export default class Player extends Component{
    render(){
        return(
            // <div className="container">
            //     <div className="column">
            //         <div className="card">
            //         <img src={cr}/>
            //             <h3>Cristiano Ronaldo</h3>
            //             <p className="title">Manchester United</p>
            //             <p><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img src={haaland}/>
            //             <h3>haaland</h3>
            //             <p className="title">Manchester City</p>
            //             <p><button>Detail</button></p>
            //         </div>
            //     </div>
            //     <div className="column">
            //         <div className="card">
            //         <img src={neymar}/>
            //             <h3>neymar</h3>
            //             <p className="title">PSG</p>
            //             <p><button>Detail</button></p>
            //         </div>
            //     </div>
            // </div>
            <div className="container">
                {Players.map((player)=>(
                    <div className="column">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL+player.img}/>
                        <h3>{player.name}</h3>
                        <p className="title"></p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                ))}
            </div>
        )       
    }
}
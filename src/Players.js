import React, {Component} from "react";
export default class Players extends Component{
    render(){
        return(
            <div className="App">
<div className="container">
          <div className="column">
              <div className="card">
              <img src='images/cr.jpg'/>
                  <h3>Cristiano Ronaldo</h3>
                  <p className="title">Manchester United</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
          <div className="column">
              <div className="card">
              <img src='images/haaland.jpg'/>
                  <h3>haaland</h3>
                  <p className="title">Manchester City</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
          <div className="column">
              <div className="card">
              <img src='images/neymar.jpg'/>
                  <h3>neymar</h3>
                  <p className="title">PSG</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
          <div className="column">
              <div className="card">
              <img src='images/kante.jpg'/>
                  <h3>kante</h3>
                  <p className="title">PSG</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
          <div className="column">
              <div className="card">
              <img src='images/kane.jpg'/>
                  <h3>kane</h3>
                  <p className="title">Totteham</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
          <div className="column">
              <div className="card">
              <img src='images/messi.jpg'/>
                  <h3>messi</h3>
                  <p className="title">PSG</p>
                  <p><button>Detail</button></p>
              </div>
          </div>
      </div>
    </div>
        )
    }
}
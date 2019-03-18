import React, { Component } from 'react';



class Home extends Component {
  homeBody1 = () => {
    return(
      <div className="container">
        <div className="d-flex row">
          <div className="card homeCard1 col-md-6 mt-5" >
            <img className="card-img-top" src="https://cdn-static.farfetch-contents.com/cms-cm/us/media/94128/data/4df0550d37d2ab4c86c661ddc6f79bf0.jpg?ratio=1x1&minWidth=637" alt="Ambush" />
            <div className="card-body px-0">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/home" className="btn btn-outline-dark">SHOP NOW</a>
            </div>
          </div>
          <div className="card homeCard1 col-md-6 mt-2 mt-5" >
            <img className="card-img-top" src="https://cdn-static.farfetch-contents.com/cms-cm/us/media/94126/data/18e7bb3b9403573af76bc9f045990999.jpg?ratio=1x1&minWidth=637" alt="Liam Hodges" />
            <div className="card-body px-0">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/home" className="btn btn-outline-dark">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
      )
    }

    footer = () => {
      return(
        <div className="row d-block">
          
        </div>  
      )
    }
  
  
  render() {
    return (
      <div>
        {this.homeBody1()}
        {this.footer()}
      </div>
    )
  }
}

export default (Home)


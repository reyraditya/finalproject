import React, { Component } from 'react';

import Footer from './Footer';

import '../css/allDesigners.css'


class AllDesigners extends Component {
    render(){
        return (
            <div className="allDesigners">
                <div className="container-fluid d-flex mx-2">
                    <div className="panel-group mt-5 pt-5 col-2">

                    {/* All categories */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse1">all categories</a>
                                </h6>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span><a href="/alldesigner">Optical</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigner">Sunglasses</a></span>
                                    </li>
                                    <li className="list-group-item mb-4">
                                        <span><a href="/alldesigner">all</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* All Designers */}
                        <div className="panel panel-default mb-5">
                            <div className="panel-heading">
                                <h6 className="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse2">all designers</a>
                                </h6>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/31-phillip-lim">3.1 phillip lim</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/acne-studios">acne studios</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/balenciaga">balenciaga</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/balenciaga">berluti</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/calvin-klein">calvin klein 205w39nyc</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/comme-des-garcons">comme des garçons</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/dior">dior homme</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/dries-van-noten">dries van noten</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/fendi">fendi</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/gucci">gucci</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/jacquemus">jacquemus</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/jil-sander">jil sander</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/kenzo">kenzo</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/lemaire">lemaire</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/loewe">loewe</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/maison-margiela">maison margiela</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/marni">marni</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/martine-rose">martine rose</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/peter-do">peter do</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/prada">prada</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/raf-simons">raf simons</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/sacai">sacaï</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/saint-laurent">saint laurent</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/thom-browne">thom browne</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/valentino">valentino</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/versace">versace</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/thom-browne">thom browne</a></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><a href="/alldesigners/designers/yohji-yamamoto">yohji yamamoto</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Display product */}
                    <div className="displayProduct text-center mt-5 pt-5 col-8">
                        <div className="row">
                        {/* Card product item */}
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M204005_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">blue cotton sweatshirt</p></a>
                                        <p className="card-text">480€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M177001_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">blue denim cut-out jacket</p></a>
                                        <p className="card-text">1345€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M213020_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">orange & green striped knit t-shirt</p></a>
                                        <p className="card-text">470€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M201009_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">black décortiqué sleeveless turtleneck</p></a>
                                        <p className="card-text">525€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M206001_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">white & black sleeveless v-neck pullover</p></a>
                                        <p className="card-text">530€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M213015_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">white telephone t-shirt</p></a>
                                        <p className="card-text">505€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M206002_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p>
                                        <p className="card-text cardText">orange collegiate décortiqué v-neck sweater</p></a>
                                        <p className="card-text">690€</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pb-4 cardDisplay">
                                <div className="card">
                                    <a href="/"><img className="card-img-top" src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M192009_1.jpg" alt="img"></img></a>
                                    <div className="card-body">
                                        <a href="/"><p className="card-title">Maison Margiela</p></a>
                                        <a href="/"><p className="card-text cardText">white & beige telephone shirt</p></a>
                                        <p className="card-text">385€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default AllDesigners;
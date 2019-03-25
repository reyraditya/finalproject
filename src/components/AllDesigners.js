import React, { Component } from 'react'

import '../css/allDesigners.css'


class AllDesigners extends Component {
    render(){
        return (
            <div className="container-fluid mx-4">
                <div className="row">
                    <div class="panel-group mt-5 pt-4 col-3">

                    {/* All categories */}
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h6 class="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse1">all categories</a>
                                </h6>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <span><a href="#">accessories</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="#">bags</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="#">clothing</a></span>
                                    </li>
                                    <li class="list-group-item mb-4">
                                        <span><a href="#">shoes</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* All Designers */}
                        <div class="panel panel-default mb-5">
                            <div class="panel-heading">
                                <h6 class="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse2">all designers</a>
                                </h6>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/31-phillip-lim">3.1 phillip lim</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/acne-studios">acne studios</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/balenciaga">balenciaga</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/calvin-klein">calvin klein 205w39nyc</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/comme-des-garcons">comme des garçons</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/dior">dior homme</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/dries-van-noten">dries van noten</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/fendi">fendi</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/gucci">gucci</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/jacquemus">jacquemus</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/jil-sander">jil sander</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/kenzo">kenzo</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/lemaire">lemaire</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/loewe">loewe</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/maison-margiela">maison margiela</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/marni">marni</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/martine-rose">martine rose</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/peter-do">peter do</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/prada">prada</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/raf-simons">raf simons</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/sacai">sacaï</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/saint-laurent">saint laurent</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/thom-browne">thom browne</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/valentino">valentino</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/versace">versace</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/thom-browne">thom browne</a></span>
                                    </li>
                                    <li class="list-group-item">
                                        <span><a href="/alldesigners/designers/yohji-yamamoto">yohji yamamoto</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Display product */}
                    <div className="col-10"></div>
                </div>
            </div>
        )
    }
}

export default (AllDesigners)
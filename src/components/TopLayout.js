import React, { Component } from 'react';
import '../styles/bootstrap.min.css'

class TopLayout extends Component {
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                    <div class="jumbotron">
                        <h1 class="display-4">Witamy w serwisie NartyGO</h1>
                        <p class="lead">NartyGo to najnepszy serwis narciarski z najaktualniejszymi informacjami o ośrodkach narciarskich i warunkach na trasach!</p>
                        <hr class="my-4"/>
                        <p>Wyszukaj ośrodek najlepszy dla CIEBIE</p>
                        <p class="lead">
                        <input type = 'text' placeholder = 'nazwa ośrodka'/>
                        <input type = 'text' placeholder = 'miasto'/>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Szukaj</a>
                        </p>
                    </div>     
                </div>
        )
    }
}

export default TopLayout
                    
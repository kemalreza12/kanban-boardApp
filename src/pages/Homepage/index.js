import React, { Component } from 'react'
import './style-homepage.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id="menu_screen" class="container-fluid main_container d-flex border">
                    <div class="row h-100 border">
                        <div class="navbar border">
                            <div class="logo border"><p>logo</p></div>
                            <div class="add border">
                                <i class="fas fa-plus"></i>
                            </div>
                        </div>
                        <div class="col-sm h-100 border">
                            <h1>content</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
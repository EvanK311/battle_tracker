import React from "react";
import pokeSearch from "../../Controllers/pokesearch"
import "./homestyle.css"

function Homepage() {
    return (
        <div className="container">
            <div className="row"></div>
            <div className="row">

                <div className="col-md-9">
                    <div className="box">
                        <h1> Team Construction Area </h1>
                        <div className="row-2">
                            
                        </div>
                        <div className="row-2">
                          
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="searchBox">
                        <h2>search area</h2>
                        {pokeSearch}
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Homepage;
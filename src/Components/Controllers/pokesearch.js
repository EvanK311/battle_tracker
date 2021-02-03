import React from "react";
import ReactDOM from 'react-dom'

export default class pokeSearch extends React.Component {
    render() {
        return(
            <form>
                <p>Enter a Pokemon</p>
                <input
                    type="text"
                    />
            </form>
        )
    }
}


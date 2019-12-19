import React from "react";
import "./scene.css";
import "../../mediaqueries.css"

class Death extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mort: {
                x: 0,
                y: 0
            },
        };
    }
    render() {
        return (
            <div className="dsk-12 scene">
                <img className="addlm" 
                    src="./gifs/dieu dela mort/arrivéedelamort.gif" alt=""   /> 
                <img className="explo" 
                    src="./gifs/explosion/explosion.gif" alt=""   />
                <img className="explo2" 
                    src="./gifs/explosion/explosion.gif" alt=""   />
                <img className="explo3" 
                    src="./gifs/explosion/explosion.gif" alt=""   />
                <img className="explo4" 
                    src="./gifs/explosion/explosion.gif" alt=""   />
                <img className="ddlma" 
                    src="./gifs/dieu dela mort/dieudelamortavance.gif" alt=""   />                    
            </div>
        )
    }
}

export default Death;
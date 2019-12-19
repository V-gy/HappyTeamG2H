import React from "react";
import "./choice.css";
import "../../mediaqueries.css";
import "../scene/scene.css"

class Choice extends React.Component {
    render() {
        return (
            <div className="row scene-page-off dsk-12">
                <div className="scene-page-off dsk-2"></div>
                <div className="row scene-page-end dsk-8">
                    <p className="choice-phrase dsk-12"> Choose your character ?</p>
                    <div className="row dsk-12 choice-characters">
                        <a href="/SnowPage1">
                            <div className="choice-character male dsk-5">    
                        </div>
                        </a>
                        <a href="/SnowPage1Red">
                        <div className="choice-character female dsk-5"></div>
                        </a>
                    </div>
                </div>
                <div className="scene-page-off dsk-2">
                   
                </div>

            </div>
        )
    }
}

export default Choice;
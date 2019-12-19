import React from "react";
import "./scene.css";
import "../../mediaqueries.css"

class SceneEnd extends React.Component {
    render() {
        return (
            <div className="row scene-page-off dsk-12">
                <div className="scene-page-off dsk-2"></div>
                <div className="scene-page-end dsk-8">
                    <p className="scene-phrase"> Are you ready to Save Christmas ?</p>
                </div>
                <div className="scene-page-off dsk-2">
                    <a href="/choice">
                    <img className="scene-fleche" src="../../image/fleche.png" />
                    </a>
                </div>

            </div>
        )
    }
}

export default SceneEnd;
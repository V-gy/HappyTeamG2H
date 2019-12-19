import React from "react";
import "./scene.css";
import "../../mediaqueries.css"
import Shinigami from "../shinigami/Shinigami";

class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="dsk-12 scene">
                <div className="scene-page-off row dsk-1"></div>
                <div className="scene-page dsk-10"></div>
                <div className="scene-page-off dsk-1"></div>
                <Shinigami></Shinigami>
            </div>
        )
    }
}

export default Scene;
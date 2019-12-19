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
            <div className="row scene-page-off dsk-12">
                <div className="scene-page-off dsk-2"></div>
                <div className="scene-page dsk-8"></div>
                <div className="scene-page-off dsk-2"></div>
                <Shinigami></Shinigami>
            </div>
        )
    }
}

export default Scene;
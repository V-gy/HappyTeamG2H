import React from "react";
import "./scene.css";
import "../../mediaqueries.css"

class Scene extends React.Component {
    render() {
        return (
            <div className="row scene-page-off dsk-12">
                <div className="scene-page-off dsk-2"></div>
                <div className="scene-page dsk-8"></div>
                <div className="scene-page-off dsk-2"></div>
                
            </div>
        )
    }
}

export default Scene;
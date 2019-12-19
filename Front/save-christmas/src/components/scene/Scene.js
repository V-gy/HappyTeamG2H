import React from "react";
import "./scene.css";
import "../../mediaqueries.css"

class Scene extends React.Component {
    render() {
        return (
            <div className="dsk-12">
                <div className="scene-page-off rdsk-1"></div>
                <div className="scene-page dsk-10">
                <div className="scene-page-off dsk-1"></div>
                </div>
            </div>
        )
    }
}

export default Scene;
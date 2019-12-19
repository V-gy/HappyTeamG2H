import React from "react";
import "./scene.css";
import "../../mediaqueries.css"
import Death from "./Death"

class Scene extends React.Component {
    
    render() {
        return (
            <div className="dsk-12 scene">
                <div className="scene-page-off row dsk-1"></div>
                <div className="scene-page dsk-10">
                    <Death />
                    </div>
                <div className="scene-page-off dsk-1"></div>
                
                              
            </div>
        )
    }
}

export default Scene;
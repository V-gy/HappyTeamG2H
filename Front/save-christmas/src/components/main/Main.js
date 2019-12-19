import React from "react";
import "./main.css";

class Main extends React.Component{
    render(){
        return(
            <div className="main-page">
                <div className= "btn-start">
                    <a href= "../scene">
                        <button className="btn-start-go" 
                                type="button">
                                START
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Main;
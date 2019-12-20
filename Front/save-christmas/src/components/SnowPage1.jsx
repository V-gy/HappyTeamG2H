import React from 'react';
import './snow.css';
import Aventureblue1 from "./Aventureblue1/Aventureblue1";

class SnowPage1 extends React.Component {
    render() {
        return (

            <div>
                <Aventureblue1></Aventureblue1>
                <div className="snowBackground">
                    <div className="dsk-12 row pousse">
                        <div className="maissss dsk-12"></div>
                        <div className="dsk-12 beau row">
                            <div className="scd-ask dsk-6"></div>
                            <div className="dsk-5"></div>
                            <div className="first-ask dsk-6"></div>
                        </div>
                    </div>
                    <img className="village1" src="./backgroundImages/winter-village-4567947_1920.png" />
                    <div class="wrapper">
                        <div class="snow layer1 a"></div>
                        <div class="snow layer1"></div>
                        <div class="snow layer2 a"></div>
                        <div class="snow layer2"></div>
                        <div class="snow layer3 a"></div>
                        <div class="snow layer3"></div>
                    </div>
                </div>
            </div>
        )

    }
}

export default SnowPage1;
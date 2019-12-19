import React from 'react';
import './snow.css';

class SnowPage1 extends React.Component {
    render() {
        return (
       
            
            <div className="snowBackground">
                              
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
        
        )

    }
}

export default SnowPage1;
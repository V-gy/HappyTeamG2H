import React from "react";
import "./Aventureblue1.css";

class Aventureblue1 extends React.Component {
    constructor(props) {

        super(props);

        this.timeline = [
            {
                classes: "heros start", 
                timeEnd: 4000 
            },
            {
                classes: " heros forward",
                timeEnd: 6000
            }, 
            {
                classes: "heros stand", 
                timeEnd: 4000 
            },
            {
                classes: "heros ok", 
                timeEnd: 4000
            },
            {
                classes: "heros ko", 
                timeEnd: 4000
            }, 
            {
                classes: " heros forward2",
                timeEnd: 6000
            },
            {
                classes: "heros stand2", 
                timeEnd: 4000 
            },
            {
                classes: "heros ok2", 
                timeEnd: 4000
            },
            {
                classes: "heros ko2", 
                timeEnd: 4000
            },
        ];

        this.state = {classes: ""};
    }

    componentDidMount(){
        this.tick();
    }

    tick(){
        if( this.timeline.length === 0 )
            return;

        let current = this.timeline.shift(); 
        let timeEnd = current.timeEnd;
        this.setState({classes: current.classes});
        setTimeout( () => this.tick(), timeEnd );
        // window.setTimeout('window.location="/sceneEnd";',7000)
    }


    clickHandler(){
        this.setState({classes: "heros start"})
    }

    render() {
        return (
                <div className={this.state.classes}></div>
        )
    }
}

export default Aventureblue1;
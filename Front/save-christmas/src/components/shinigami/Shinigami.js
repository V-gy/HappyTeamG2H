import React from "react";
import "./Shinigami.css";

class Shinigami extends React.Component {
    constructor(props) {

        super(props);

        this.timeline = [
            {
                classes: "shinigami start", 
                timeEnd: 2000 
            },
            {
                classes: "boum explosion",
                timeEnd: 1000
            }, 
            {
                classes: "shinigami forward", 
                timeEnd: 4000 
            }, 
            
            // {
            //     classes: "shinigami ko", 
            //     timeEnd: 4000 
            // }
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
        window.setTimeout('window.location="/";',7000)
    }


    clickHandler(){
        this.setState({classes: "shinigami forward"})
    }

    render() {
        return (
                <div className={this.state.classes}></div>
        )
    }
}

export default Shinigami;
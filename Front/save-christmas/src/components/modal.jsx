import React from 'react';

// import axios from 'axios';

import "./modal.css";

let answer = [

  [

    {

      id: 1,

      text: "Yes",

      question_id: 1

    },

    {

      id: 2,

      text: "No",

      question_id: 1

    }

  ],

  [

    {

      id: 3,

      text: "Rex",

      question_id: 2

    },

    {

      id: 4,

      text: "Max",

      question_id: 2

    },

    {

      id: 5,

      text: "Bobby",

      question_id: 2

    }

  ],

  [

    {

      id: 9,

      text: "Halleluhia",

      question_id: 3

    },

    {

      id: 10,

      text: "When the saints come marching in",

      question_id: 3

    },

    {

      id: 11,

      text: "Silent night",

      question_id: 3

    }

  ],

  [

    {

      id: 15,

      text: "profesor Dumbledore",

      question_id: 4

    },

    {

      id: 16,

      text: "Ron Weasley",

      question_id: 4

    },

    {

      id: 17,

      text: "Hagrid",

      question_id: 4

    }

  ],

  [

    {

      id: 12,

      text: "Ronflex",

      question_id: 5

    },

    {

      id: 13,

      text: "Guizmo",

      question_id: 5

    },

    {

      id: 14,

      text: "Bibendum",

      question_id: 5

    }

  ],

  [

    {

      id: 6,

      text: "Huckleberry Finn",

      question_id: 6

    },

    {

      id: 7,

      text: "David Coperfield",

      question_id: 6

    },

    {

      id: 8,

      text: "Ebeneezer Scrooge",

      question_id: 6

    }

  ]

];

let question = [

  [

    {

      id: 1,

      text: "Do you like Christmas ?"

    }

  ],

  [

    {

      id: 2,

      text: "What is the name of the Grinch's dog ?"

    }

  ],

  [

    {

      id: 3,

      text: "What famous carol is called 'Stille Nacht' in german ?"

    }

  ],

  [

    {

      id: 4,

      text: "Which Harry Potter character said 'One can never have enough socks.Another Christmas has come and gone and I didn't get a single pair.People will insist on giving me books'?"

    }

  ],

  [

    {

      id: 5,

      text: "In the film 'the Gremlin's', what did Billy name the Mogwai given to him as a gift ?"

    }

  ],

  [

    {

      id: 6,

      text: "Which famous character was visited by the ghost of the christmas past, present and yet to come ?"

    }

  ]

];

class ModalCall extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      question: "",

      answer: ""

    };

  }

  componentDidMount() {

    let random = Math.floor(Math.random() * Math.floor(6));

    this.setState({

      question: question[random][0].text

    })

    console.log(question[random][0].text);

    for (let i = 0; i < answer[random].length; i++) {

      console.log(answer[random][i].text);

    }

    // axios

    //   .get(`http://localhost:5000/quest/8`)

    //   .then(response => response.data)

    //   .then(data => {

    //     console.log(data)

    //     console.log(this.state.modalData)

    //   });

  }

  render() {

    return (

      <div className="modal">

        <h3> {this.state.question} </h3>

        <ul>

          <li>{this.state.answer}<input type="checkbox" /></li>

          <li>{this.state.answer}<input type="checkbox" /></li>

          <li>{this.state.answer}<input type="checkbox" /></li>

        </ul>

      </div>

    );

  }

}

export default ModalCall;


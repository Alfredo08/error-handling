import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name : "Alfredo",
            error : ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let currentValue = e.target.firstName.value;
        let greeting = document.getElementById("greeting");

        if (currentValue === ""){
            this.setState({
                error: "Please provide a name!"
            });

            greeting.className = "hideElement";
        }
        else {
            this.setState({
                name: e.target.firstName.value,
                error: ""
            });
            greeting.className = "displayElement";
        }
    };

    render() {
      return (
          <div className="App">
              <form onSubmit={this.handleSubmit}>
                  Please type your first name :
                  <input name="firstName" type="text" />
                  <button> Submit</button>
              </form>
              <div id="greeting" className="displayElement">
                  Hello there {this.state.name}
              </div>
              <div className="error">
                  {this.state.error}
              </div>

          </div>
      );
    }
}

export default App;

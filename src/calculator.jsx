import React from "react";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        screenText: "",
    };
  }

  handleButtonClick = (value) => {
    if (value === "C" || value === "AC" || value === "DE") {
      this.setState({ screenText: "" });
    } else {
      this.setState({ screenText: this.state.screenText + value });
    }
  };

    checkscreenText = () => {
        return this.state.screenText == "";
    };

  render() {
    return (
      <div className="calculator">
        <div style={{ backgroundColor: "white" }} className="screen">
          <b>{this.state.screenText}</b>
        </div>
        <div>
          <button
            onClick={this.handleButtonClick.bind(this, "=")}
            disabled= {this.state.screenText ==="" && true}
          >
            =
          </button>
          <button
            onClick={this.handleButtonClick.bind(this, "C")}
            disabled= {this.state.screenText ==="" && true}
          >
            C
          </button>
          <button
            onClick={this.handleButtonClick.bind(this, "AC")}
            disabled= {this.state.screenText ==="" && true}
          >
            AC
          </button>
          <button
            onClick={this.handleButtonClick.bind(this, "DE")}
            disabled= {this.state.screenText ==="" && true}
          >
            DE
          </button>
        </div>
        <div>
          <button
            onClick={this.handleButtonClick.bind(this, "+")}
            disabled= {this.state.screenText ==="" && true}
          >
            +
          </button>
          <button onClick={this.handleButtonClick.bind(this, "-")}>-</button>
          <button
            onClick={this.handleButtonClick.bind(this, "/")}
            disabled= {this.state.screenText ==="" && true}
          >
            /
          </button>
          <button
            onClick={this.handleButtonClick.bind(this, "*")}
            disabled= {this.state.screenText ==="" && true}
          >
            *
          </button>
        </div>
        <div>
          <button onClick={this.handleButtonClick.bind(this, "1")}>1</button>
          <button onClick={this.handleButtonClick.bind(this, "2")}>2</button>
          <button onClick={this.handleButtonClick.bind(this, "3")}>3</button>
          <button
            onClick={this.handleButtonClick.bind(this, "sin")}
            disabled= {this.state.screenText ==="" && true}
          >
            sin
          </button>
        </div>
        <div>
          <button onClick={this.handleButtonClick.bind(this, "4")}>4</button>
          <button onClick={this.handleButtonClick.bind(this, "5")}>5</button>
          <button onClick={this.handleButtonClick.bind(this, "6")}>6</button>
          <button
            onClick={this.handleButtonClick.bind(this, "cos")}
            disabled= {this.state.screenText ==="" && true}
          >
            cos
          </button>
        </div>
        <div>
          <button onClick={this.handleButtonClick.bind(this, "7")}>7</button>
          <button onClick={this.handleButtonClick.bind(this, "8")}>8</button>
          <button onClick={this.handleButtonClick.bind(this, "9")}>9</button>
          <button
            onClick={this.handleButtonClick.bind(this, "tan")}
            disabled= {this.state.screenText ==="" && true}>
            tan
          </button>
        </div>
      </div>
    );
  }
}

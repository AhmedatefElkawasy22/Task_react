import React from "react";

export default class Search extends React.Component {
	constructor() {
    super();
    this.state = {
      text: "",
    };
    this.refInput = React.createRef();
  }
  gettext=()=> {
    this.setState({ text: this.refInput.current.value });
  } 
	render() {
		return (
			<div className="">
				<form>
					<input
            onChange={this.gettext.bind(this)}
            ref={this.refInput}
						type="text"
						placeholder="Enter to search"
						className="form-control"
					/>
				</form>
        <div>{ this.state.text}</div>
			</div>
		);
	}
}
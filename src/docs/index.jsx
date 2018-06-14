import React from "react";
import { render } from "react-dom";
import Botui from "../../lib";
import "./styles.css";

class Demo extends React.Component {

    componentDidMount() {
	this.botui.message.bot({
	    content: "Hello World from Bot",
	    delay: 1000
	}).then(() => {
	this.botui.message.human({
	    content: "Hello World from Human",
	    delay: 1000
	});
	}).then(() => {
		this.botui.action.text({
		    action: {
			placeholder: "Enter your text here."
		    },
		    delay: 2000
		});
	});
    }
    
    render() {
	return (
	    <div>
	      <h1>Demo of the Botui React component</h1>
	      <Botui ref={ cmp => this.botui = cmp }/>
	    </div>
	);
    }
}

render(<Demo />, document.getElementById("app"));

import { Component } from "react";

class ClassBasedComponents extends Component {
    state = {
        showText: false
    };



    render(){
        return <div>
            <h3>This is class based component</h3>
            <button>Toggle Text</button>
        </div>
    }
}

export default ClassBasedComponents
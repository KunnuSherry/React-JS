import { Component } from "react";

class ClassBasedComponents extends Component {
  state = {
    showText: false,
    showColor: true,
    count:0,
    changeCountColor: false
  };

  toggleText = () => {
    this.setState((prevState) => ({
      showText: !prevState.showText,
      showColor: !prevState.showColor,
    }));
  };
  handleCount = () =>{
    this.setState({
        // ...this.state,
        count: this.state.count+1
    })
  }
    // not allowed
    // toggleText = () =>{
    //     this.setState.showText = !this.state.showText;
    // }

    // Life Cycle
    //ComponentDidMount()
    //componentDidiUpdate()
    //componentWillUpdate()

    componentDidMount(){
        console.log("this is called when page loads");
        //Anything we want to do when the page loads for the first times like: API calls. etc.
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        if(prevState && prevState.count !== this.state.count && this.state.count===10){
            this.setState({
                ...this.state,
                changeCountColor: !this.state.changeCountColor
            })
        }
    }
    componentWillUnmount(){
        console.log("Component will get destroyed");
    }

  render() {
    return (
      <div>
        {this.state.showText ? <h3>Toggle Text On</h3> : <h3>Toggle Text OFF</h3>}
        <h1>{this.state.count}</h1>
        <button style={{color:(this.state.showColor)? "red": "green"}} onClick={this.toggleText}>Toggle Text</button>
        <button style={{backgroundColor:(this.state.changeCountColor)?"green":"lightblue"}} onClick={this.handleCount}>Count Add</button>
      </div>
    );
  }
}

export default ClassBasedComponents;

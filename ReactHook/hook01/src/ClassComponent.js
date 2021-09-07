import React from 'react'

class ClassComponent extends React.Component {
    // constructor(){
    //     super();
    //     this.increase= this.increase.bind(this);
    //     this.decrease= this.decrease.bind(this)
    // }
    
    state={
        counter:0// initial deger burda veriliyor
    };

    componentDidMount(){
        console.log('ComponentDidMount');
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }


    increase(){
        this.setState({counter: this.state.counter +1})
    }
    decrease(){
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        console.log('Class Counter :>> ', this.state.counter);
        return (
            <div className='class'>
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick= {()=> this.increase()}>+</button>
                <button onClick= {()=> this.decrease()}>-</button>
            </div>
        )
    }
}

export default ClassComponent;

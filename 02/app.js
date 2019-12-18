import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    
    render() {
        return <button>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));
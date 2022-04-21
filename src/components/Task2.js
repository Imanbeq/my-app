import React from 'react';

class Task2 extends React.Component{

    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    countUp = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        });
    }

    countDown = () => {
        let currentCount = this.state.count;
        currentCount--;
        this.setState({
            count: currentCount
        });
    }

    render() {
        return (
            <>
                <h1>Счетчик</h1>

                <div>
                    {this.state.count}
                </div>

                <div>
                    <button onClick={this.countUp}>Increase</button>
                    <button onClick={this.countDown}>Decrease</button>
                </div>

                <div>

                </div>
            </>
        )
    }
}

export default Task2;
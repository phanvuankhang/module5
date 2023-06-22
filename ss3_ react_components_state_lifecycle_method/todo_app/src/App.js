import './App.css';
import {Component} from "react";
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
    }


    handleChange = (event) => {
        this.setState({
            title: event
        })
    }

    handleAddItem() {
        this.setState((prev) => (
            {
                list: [prev.title, ...prev.list],
                title: ''
            }
        ))
    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input value={this.state.title}
                       onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAddItem()}>Add</button>
                <ul>
                    {
                        this.state.list.map((title, index) => (
                            <li key={index}>
                                {title}
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }

}

export default App;

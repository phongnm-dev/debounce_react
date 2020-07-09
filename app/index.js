import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from './components/search'
import './index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            items: [{ label: 'label1', value: 'value1' },{ label: 'labe23432l1', value: 'valu2342e1' },{ label: 'label67', value: 'value4321' },{ label: 'label5', value: 'value66' },
        { label: 'label2', value: 'value2' }]
        ,options: [{ label: 'label1', value: 'value1' },{ label: 'labe23432l1', value: 'valu2342e1' },{ label: 'label67', value: 'value4321' },{ label: 'label5', value: 'value66' },
        { label: 'label2', value: 'value2' }], searching: false};
    }
    setOption() {
        this.setState({
            options: [{ label: 'label1', value: 'valuezxczxc1' },
        { label: 'czxcxzcxzc', value: 'valuzxcxze3' }]
        })
    }
    render() {
        return (
            <div>
            <button onClick={() => {this.setOption()}}>changeOptions</button>
                <LiveSearch
                options={this.state.options}
                // multiple
                labelField="label"
                searching={this.state.searching}
                valueField="value"
                onSelect={(value) => {
                    this.setState({
                        value: value
                    })
                }}
                onSearch={(e) => {
                        if (e) {this.setState({
                            options: this.state.items.filter((item) => item.label.includes(e))
                        })} else {
                            this.setState({
                            options: this.state.items
                            });
                        }
                }}>
                </LiveSearch>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

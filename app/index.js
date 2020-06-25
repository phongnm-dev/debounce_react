import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from './components/LiveSearch'
import './index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [{ label: 'label1', value: 'value1' },{ label: 'labe23432l1', value: 'valu2342e1' },{ label: 'label67', value: 'value4321' },{ label: 'label5', value: 'value66' },
        { label: 'label2', value: 'value2' }]
        ,options: [{ label: 'label1', value: 'value1' },{ label: 'labe23432l1', value: 'valu2342e1' },{ label: 'label67', value: 'value4321' },{ label: 'label5', value: 'value66' },
        { label: 'label2', value: 'value2' }], searching: false};
    }
    setOption() {
        this.setState({
            items: [{ label: 'label1', value: 'value1' },
        { label: 'label3', value: 'value3' }]
        })
    }
    render() {
        return (
            <div>
            <button onClick={() => {this.setOption()}}>changeOptions</button>
                <LiveSearch
                value={[]}
                options={this.state.options}
                multiple
                labelField="label"
                searching={this.state.searching}
                valueField="value"
                onSearch={(e) => {
                        if (e) {this.setState({
                            options: this.state.items.filter((item) => item.label.includes(e))
                        })} else {
                            this.setState({
                            options: this.state.items
                            });
                        }
                }}
                onSelect={(e) => {alert(e)}}>
                Hello World
                </LiveSearch>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

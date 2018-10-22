class IndecisionApp extends React.Component {
    render() {
        const title = 'Decision maker'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
            
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }

}

class Option extends React.Component {
    render() {
        return (
            <div>
                <h3>Option: {this.props.optionText}</h3>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add an option</button>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
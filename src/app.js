// const obj = {
//     name: 'Susan',
//     getName() {
//         return this.name
//     }
// }
// // binding gets lost here
// const getName = obj.getName.bind({name: 'Dmitri'})
// console.log(getName())
// console.log(obj.getName())


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randNum]) 
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 

        this.setState((prevState) => {
            return {
                // concat does not change the original array, but creates another one
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = 'Decision maker'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
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

// This function Action overrides the class's Action, so no 'this' pointers. 
// The properties are passed the same way they would be passed to the class constructor. 

// Lower-case letter: jsx will assume HTML element, 
// upper-case letter:jsx will look for variable in scope. 
// The same is true with stateless components.

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        console.log(error)
        // if an error was returned, update state
        this.setState(() => {
            return { error }
        })
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// Stateless functional components (simple presentational componenets)
// 1. faster
// 2. easier to read and write
// 3. easier to test

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

// lower-case letter: jsx will assume HTML element, 
// upper-case letter:jsx will look for variable in scope. 
// The same is true with stateless componenets 

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
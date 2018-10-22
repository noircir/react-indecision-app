class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleText = this.handleToggleText.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleText() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleText}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <p>These are the details you need to know</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle',
//     text: 'These are the details you need to know',
//     showText: true,
//     buttonTitle: 'Show details'
// }

// const onToggleDetails = () => {
//     app.showText = !app.showText
//     app.showText ? app.buttonTitle = 'Show details' : app.buttonTitle = 'Hide details'
//     renderDetails()
// }

// const appRoot = document.getElementById('app')

// const renderDetails = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggleDetails}>{app.buttonTitle}</button>
//             {!app.showText && <div><p>{app.text}</p></div>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// renderDetails()
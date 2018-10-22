const app = {
    title: 'Visibility Toggle',
    text: 'These are the details you need to know',
    showText: true,
    buttonTitle: 'Show details'
}

const onToggleDetails = () => {
    app.showText = !app.showText
    app.showText ? app.buttonTitle = 'Show details' : app.buttonTitle = 'Hide details'
    renderDetails()
}

const appRoot = document.getElementById('app')

const renderDetails = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleDetails}>{app.buttonTitle}</button>
            {!app.showText && <div><p>{app.text}</p></div>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderDetails()
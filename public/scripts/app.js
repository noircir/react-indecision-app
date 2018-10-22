'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleText = _this.handleToggleText.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleText',
        value: function handleToggleText() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
            // this.visibility = !this.visibility
            // this.visibility ? this.buttonLabel = 'Show details' : this.buttonLabel = 'Hide details'
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleText },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'p',
                    null,
                    'These are the details you need to know'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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

const e = React.createElement;

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("Button", {className: `${this.props.parentName}__button`}, this.props.text);
  }
}
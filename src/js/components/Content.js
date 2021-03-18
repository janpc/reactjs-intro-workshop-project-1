const e = React.createElement;

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("p", { className: `${this.props.parentName}__content`}, this.props.text);
  }
}
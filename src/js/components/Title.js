const e = React.createElement;

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("h2", { className: `${this.props.parentName}__title`}, this.props.title);
  }
}
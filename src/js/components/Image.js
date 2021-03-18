const e = React.createElement;

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("div", {className: `${this.props.parentName}__imageContainer`}, e("img", {src: this.props.src, className: `${this.props.parentName}__imageContainer__image`}));
  }
}
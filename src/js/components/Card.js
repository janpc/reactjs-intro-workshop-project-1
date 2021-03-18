import Image from "./Image.js";
import Content from "./Content.js";
import Title from "./Title.js";
import Button from "./Button.js"

const e = React.createElement;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e("div", { className: 'card' }, [
      e(Image, { src: this.props.src, parentName: "card" }),
      e(Title, { title: this.props.title, parentName: "card" }),
      e(Content, { text: this.props.text, parentName: "card" }),
      e(Button, { text: "Read More", parentName: "card" }),
    ]);
  }
}

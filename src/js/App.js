import results from "./Api/data.js";
import Card from "./components/Card.js";

const e = React.createElement;

const container = document.getElementById("contentWraper")

const toPrint = results.map(({ text, title, src }, index) => {
  return e(Card, {index, text, title, src });
});

ReactDOM.render(toPrint, container);

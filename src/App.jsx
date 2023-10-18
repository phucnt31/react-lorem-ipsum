import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(data);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main>
      <section className="section-center">
        <h4>tired of boring lorem ipsum</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="count">Paragraphs: </label>
          <input
            id="count"
            type="number"
            value={count}
            min={1}
            max={8}
            step={1}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <div className="lorem-text">
          {text.map((value) => {
            return <p key={nanoid()}>{value}</p>;
          })}
        </div>
      </section>
    </main>
  );
};
export default App;

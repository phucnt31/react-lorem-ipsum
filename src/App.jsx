import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <main>
      <section className="section-center">
        <h4>tired of boring lorem ipsum</h4>
        <form className="lorem-form">
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
        </form>
      </section>
    </main>
  );
};
export default App;

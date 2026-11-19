import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import TabButton from "./components/tabbutton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(value) {
    setSelectedTopic(value);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("State")}>State</TabButton>
          </menu>

          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
      {selectedTopic}
    </div>
  );
}

export default App;

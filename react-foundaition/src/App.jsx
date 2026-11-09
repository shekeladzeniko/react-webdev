import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/tabbutton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
          <CoreConcept
            image={CORE_CONCEPTS[1].image}
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
          />
          <CoreConcept
            image={CORE_CONCEPTS[2].image}
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
          />
          <CoreConcept
            image={CORE_CONCEPTS[3].image}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
          />
        </ul>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="components" />
            <TabButton label="Components" />
            <TabButton label="Components" />
            <TabButton label="Components" />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

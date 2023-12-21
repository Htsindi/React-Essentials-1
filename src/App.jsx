import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTabTopic, setSelectedTabTopic] = useState("");

  const tabBtnClickHandler = (tab) => {
    setSelectedTabTopic(tab);
  };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          /*key assist the data so that it does not break a unique character
          from the object such as id must be selected to prevent warnings.*/
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTabTopic === "components"}
              onTabSelect={() => tabBtnClickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTabTopic === "jsx"}
              onTabSelect={() => tabBtnClickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTabTopic === "props"}
              onTabSelect={() => tabBtnClickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTabTopic === "state"}
              onTabSelect={() => tabBtnClickHandler("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTabTopic ? (
              <h3>Please Select a Tab to view content</h3>
            ) : (
              <div>
                {" "}
                <h3>{EXAMPLES[selectedTabTopic].title}</h3>
                <p>{EXAMPLES[selectedTabTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTabTopic].code}</code>
                </pre>{" "}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

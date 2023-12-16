import {useState} from 'react';
import { CORE_CONCEPTS } from './data.js';
import {EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTabTopic, setSelectedTabTopic] = useState('Click Tab To Show Information');

  const tabBtnClickHandler = (tab)=>{
    setSelectedTabTopic(tab);
      }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onTabSelect={()=>tabBtnClickHandler('components')}>Components</TabButton>
            <TabButton onTabSelect={()=>tabBtnClickHandler('jsx')} >JSX</TabButton>
            <TabButton onTabSelect={()=>tabBtnClickHandler('props')}>Props</TabButton>
            <TabButton onTabSelect={()=>tabBtnClickHandler('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTabTopic].title}</h3>
            <p>{EXAMPLES[selectedTabTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTabTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;
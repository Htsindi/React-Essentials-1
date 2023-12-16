import {useState} from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTab, setSelectedTab] = useState('Click Tab To Show Information');

  const tabBtnClickHandler = (tab)=>{
    setSelectedTab(tab);
    console.log(tab);
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
        </section>
      </main>
      {selectedTab}
    </div>
  );
}

export default App;
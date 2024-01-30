import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'

export default function Examples(){
  const [selectedTabTopic, setSelectedTabTopic] = useState( );

//function handleSelect(selectedButton){
  // selectedButton => 'components', 'jsx', 'props', 'state'
  //setSelectedTabTopic(selectedButton);
  //console.log(selectedTabTopic);
//}

  const tabBtnClickHandler = (tab) => {
    setSelectedTabTopic(tab);}

  return(
    <Section title='Examples' id="examples">
      
      <Tabs button ={ 
      <>
        <TabButton 
        isSelected={selectedTabTopic === "components"}
        onClick={() => tabBtnClickHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTabTopic === "jsx"}
        onClick={() => tabBtnClickHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTabTopic === "props"}
        onClick={() => tabBtnClickHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTabTopic === "state"}
        onClick={() => tabBtnClickHandler("state")}
        >
        State
      </TabButton>
      
      </> } >
  {tabContent}
</Tabs>
</Section>

  //    <div id="tab-content">
    //    {!selectedTabTopic ? (
      //  <h3>Please Select a Tab to view content</h3>
        //) : (
        //<div>
        //<h3>{EXAMPLES[selectedTabTopic].title}</h3>
        //<p>{EXAMPLES[selectedTabTopic].description}</p>
        //<pre>
          //<code>{EXAMPLES[selectedTabTopic].code}</code>
        //</pre> </div>)}
      //</div>
  );
}
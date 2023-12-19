import {useState} from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';

export default function Examples(){
  const [selectedTabTopic, setSelectedTabTopic] = useState('');

  const tabBtnClickHandler = (tab)=>{
    setSelectedTabTopic(tab);
      }
  return (
    <Section title='Examples' id="examples">
    <menu>
        <TabButton isSelected ={selectedTabTopic === 'components'} onTabSelect={()=>tabBtnClickHandler('components')}>Components</TabButton>
        <TabButton isSelected ={selectedTabTopic === 'jsx'} onTabSelect={()=>tabBtnClickHandler('jsx')} >JSX</TabButton>
        <TabButton isSelected ={selectedTabTopic === 'props'} onTabSelect={()=>tabBtnClickHandler('props')}>Props</TabButton>
        <TabButton isSelected ={selectedTabTopic === 'state'} onTabSelect={()=>tabBtnClickHandler('state')}>State</TabButton>
    </menu>
    <div id="tab-content">
     {!selectedTabTopic ?<h3>Please Select a Tab to view content</h3> :  <div> <h3>{EXAMPLES[selectedTabTopic].title}</h3>
<p>{EXAMPLES[selectedTabTopic].description}</p>
<pre>
<code>
{EXAMPLES[selectedTabTopic].code}
</code>
</pre> </div> }
     
    </div>
  </Section>
  )
}
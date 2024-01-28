import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx'



export default function CoreConcepts(){
 
  return(
   //key assist the data so that it does not break a unique character
 //from the object such as id must be selected to prevent warnings.
  <Section title='Core Concepts' id="core-concepts">
    <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </Section>
  )
        
}
import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from './CoreConcept.jsx';


export default function CoreConcepts(){

  return(
  
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    /* key assist the data so that it does not break a unique character from the object such as id must be selected to prevent warnings. */
    <ul>
      {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem} /> ))}
    </ul>
  </section>
  )
}
import Concept from "./Concept"
import './Concepts.css';

export default function Concepts(props){

    return (
        <ul id="concepts">
            {props.concepts.map(concept=> (
                <li>
                    <Concept concept={concept}></Concept>
                </li>
            ))}
        </ul>
    )

}

// <ul id="concepts">
//         <li className="concept">
//           <img src="TODO: IMAGE" alt="TODO: TITLE" />
//           <h2>TODO: TITLE</h2>
//           <p>TODO: DESCRIPTION</p>
//         </li>
//       </ul>
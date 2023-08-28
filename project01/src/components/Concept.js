import Card from "./Card";
import './Concept.css';

export default function Concept(props) {

    return (
        <Card className="concept">
            <img src={props.concept.image} alt={props.concept.title} />
            <h2>{props.concept.title}</h2>
            <p>{props.concept.description}</p>
        </Card>
    );
}
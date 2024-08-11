export default function CoreConcept({ image, title, description }) { //if used props (look code commented)
    return (
        <li>
            {/* IF USED PROPS */}
            {/* <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p> */}
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
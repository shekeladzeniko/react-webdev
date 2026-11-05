import components from "../assets/components.png";

export default function CoreConcept({title, description}) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

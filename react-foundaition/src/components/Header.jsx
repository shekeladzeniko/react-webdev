import logo from "../assets/react-core-concepts.png";

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt()]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

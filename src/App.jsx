import reactImg from "./assets/react-core-concepts.png";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescription[randomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <img src="" alt="" />
      <h3></h3>
      <p></p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
      <section id="core-concepts">
        <CoreConcept/>
      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

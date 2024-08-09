import reactImg from "./assets/react-core-concepts.png";
import imgConcepts from "./assets/components.png"

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
      <h3>Title</h3>
      <p>Description</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>
            Core Concepts
          </h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={imgConcepts} />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

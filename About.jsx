import "./About.css";

const strengths = [
  "Ability to adapt to new surroundings",
  "Ability to handle pressure",
  "Self motivated",
  "Creativity",
  "Work ethics",
  "Problem solving",
  "Team work coordination",
  "Active listening",
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div>
          <h2 className="section-heading">About Me</h2>
          <p>
            I completed my BCA (Bachelor of Computer Application) at
            Thirumurugan Arts and Science College for Women, Thiruvallur, in
            2025 with 81.5%. I'm currently pursuing my MCA and building on the
            programming foundation I started in my undergraduate years,
            especially in Python, Java and C++.
          </p>
          <p style={{ marginTop: 16 }}>
            During my BCA, I worked on a Hotel Management System project that
            gave me hands-on experience with how a working application is put
            together end to end — from data entry screens to storing records
            in a database. I'm now expanding into web technologies and enjoy
            learning how a frontend, backend and database connect in a modern
            application.
          </p>
          <p style={{ marginTop: 16 }}>
            Outside academics, I spend my time listening to music, drawing,
            gardening and playing badminton. I speak English and Tamil.
          </p>
        </div>

        <div className="about-strengths">
          <h3 className="about-strengths-title">Strengths</h3>
          <ul>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

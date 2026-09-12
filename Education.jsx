import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>

        <div className="edu-card">
          <div className="edu-year">2025</div>
          <div>
            <h3 className="edu-title">
              BCA &mdash; Bachelor of Computer Application
            </h3>
            <p className="edu-college">
              Thirumurugan Arts and Science College for Women, Thiruvallur
            </p>
            <p className="edu-score">Score: 81.5%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

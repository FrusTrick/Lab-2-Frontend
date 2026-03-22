import data from "../experience.json";

export default function Resume() {

    return (
      <main>
        <section>
          <div class="resume-container">
            <div class="sidebar">
              <div class="sidebar-title">
                <h2>My resume</h2>
              </div>
              <p>32 year old software developer living in Stockholm, Sweden</p>
              <div class="sidebar-item">
                <div class="sidebar-title">
                  <h3>Education</h3>
                </div>
                <div class="sidebar-content">
                  {data.Education && data.Education.length > 0 ? (
                    <ul>
                      {data.Education.map((edu, index) => (
                        <li key={index}>
                          {edu.title}
                          <p>{edu.school}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No education details available.</p>
                  )}
                </div>
                <div class="sidebar-title">
                  <h3>Languages</h3>
                </div>
                <div class="sidebar-content">
                  {data.Languages && data.Languages.length > 0 ? (
                    <ul>
                      {data.Languages.map((lang, index) => (
                        <li key={index}>
                          {lang.name}
                          <p>{lang.proficiency}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No language details available.</p>
                  )}
                </div>
                <div id="easterModal" class="modal">
                  <div class="modal-content">
                    <span id="close">&times;</span>
                    <h2>Oh! You found my little secret!</h2>
                    <p>You are officially a 1337 haxor!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="resume-main">
              <div class="main-hero">
                <h4>GEORGE AL AKHRAS</h4>
              </div>
              <div class="resume-about-me">
                <div class="resume-title">
                  <h3>ABOUT ME</h3>
                  <div class="about-description">
                    <p>
                      I am a Fullstack .NET Student at the Chas Academy trade
                      school in Stockholm. The skills I have gained relate .NET
                      based backend development and SQL as well as front-end
                      development with JavaScript and React. I'm a problem
                      solver, team player and I am also qiality minded. Curently
                      looking for a software development position with long term
                      growth opportunities.
                    </p>
                  </div>
                </div>
                <div class="resume-work">
                  <div class="resume-title">
                    <h3>WORK EXPERIENCE</h3>
                  </div>
                  <div class="resume-container">
                    <div class="internal-work">
                      {data.Experience && data.Experience.length > 0 ? (
                        data.Experience.map((work, index) => (
                          <div class="work-card" key={index}>
                            <h3>{work.title}</h3>
                            <h4>{work.employer}</h4>
                            <p>{work.description}</p>
                          </div>
                        ))
                      ) : (
                        <p>No work experience details available.</p>
                      )}
                    </div>
                  </div>
                </div>
                <div class="resume-title">
                  <h3>SOFTWARE DEVELOPMENT SKILLS</h3>
                </div>
                <div class="skill-card-wrapper">
                  {data.SoftwareDevSkills.map((category) => (
                    <div class="skill-card" key={category.title}>
                      <h2>{category.title}</h2>

                      <ul>
                        {category.items.map((item) => (
                          <li key={item.name}>{item.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
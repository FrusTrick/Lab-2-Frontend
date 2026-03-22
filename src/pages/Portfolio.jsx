import { useState, useEffect } from "react";
export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/FrusTrick/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
      }, []);

  return (
    <main>
      <section>
        <div class="resume-container">
          <div class="sidebar">
            <p></p>
            <div class="sidebar-item">
              <div class="sidebar-title">
                <h3>Github</h3>
              </div>
              <div class="sidebar-content">
                <a href="https://github.com/FrusTrick"> My github page</a>
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
              <h4>My Portfolio</h4>
            </div>
            <div class="resume-about-me">
              <div class="resume-work">
                <div class="resume-title">
                  <h3>MY PROJECTS AND COLLABORATIONS</h3>
                </div>
                <div class="resume-container">
                  <div class="internal-work">
                    {loading && <p>Laddar projekt...</p>}

                    {!loading &&
                      projects.map((project) => (
                        <div className="work-card" key={project.id}>
                          <h3>{project.name}</h3>
                          <p>{project.description}</p>
                          <p>Language: {project.language}</p>
                          <a href={project.html_url}>Check it out here!</a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

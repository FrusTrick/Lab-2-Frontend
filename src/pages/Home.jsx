export default function Home() {

    return (
      <main>
        <section>
          <div className="resume-container">
            <div className="sidebar">
              <div id="portrait">
                <img
                  src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/266335736_10224789485701259_3052040500687613621_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=jvXuvKoGO4cQ7kNvwEnmtvx&_nc_oc=AdlWVHDaxX8MyIsXWINaOv7ymWr27-fhJhVCwHZp2dsbGXzo5fJmypEEJYO6T8FI29E&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=N2Yh1dSW2sP-V0uqYlZjdA&_nc_ss=8&oh=00_AfuckK5zJQ4NMOKRehBcFKVdHovN7cW7EbvjMg4N93OmQA&oe=69AA4E5C"
                  alt=""
                />
              </div>
              <p>32 year old software developer living in Stockholm, Sweden</p>
              <div className="sidebar-item">
                <div className="sidebar-title">
                  <h3>Contact me</h3>
                  <div id="easterModal" className="modal">
                    <div className="modal-content">
                      <span id="close">&times;</span>
                      <h2>Oh! You found my little secret!</h2>
                      <p>You are officially a 1337 haxor!</p>
                    </div>
                  </div>
                </div>
                <div className="sidebar-content">
                  <ul>
                    <li>
                      Telephone:
                      <p>070-xxx-xxxx</p>
                    </li>
                    <li>
                      Email:
                      <p>george.alakhras@placeholder.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-main">
              <div className="main-hero">
                <h4>GEORGE AL AKHRAS</h4>
              </div>
              <div className="resume-about-me">
                <div className="resume-title">
                  <h3>WELCOME</h3>
                  <div className="about-description">
                    <p>
                      My name is George and I'm a future fullstack developer in
                      the making. Currently undergoing a full stack .NET
                      development programme at Chas Academy. The programme aims
                      to provide me with the skills nessecary to be proficient
                      in .NET driven backend technologies as well as a
                      JavaScript base for front-end development.
                    </p>
                  </div>
                </div>
                <div className="resume-work">
                  <div className="resume-title">
                    <h3>WHAT I AM CURRENTLY UP TO</h3>
                  </div>
                  <div className="resume-container">
                    <div className="internal-work">
                      <div className="work-card">
                        <p>
                          At this time I am a full-time student at Chas Academy
                          where I currently study in their Fullstack Developer
                          .NET programme.{" "}
                        </p>

                        <p>
                          In order to further sharpen the skills I am currently
                          gaining, I am also taking part in hackathons where I
                          get to put my skills to the test. More details about
                          the projects I have taken part in creating can be
                          found on the portfolio page.
                        </p>
                      </div>
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
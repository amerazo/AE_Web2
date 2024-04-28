
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/angelicaheadshot.jpeg"
              alt="Angelica Headshot"
              className="shadow-dark"
            />
            <h1>Angelica Erazo</h1>
            <p>Cybersecurity Engineer, Software Developer, Artificial Intelligence Implementer</p>
            <div className="social-links">
              <a href="https://twitter.com/angelicaerazo_" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://github.com/amerazo" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/angelicaerazo/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

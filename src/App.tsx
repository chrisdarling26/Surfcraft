const asset = (name: string) => `/assets/${name}`

function Wordmark() {
  return (
    <a className="wordmark" href="#home" aria-label="Surfcraft home">
      <span>Surf</span>craft
    </a>
  )
}

function Home() {
  return (
    <section className="home section" id="home">
      <header className="site-header">
        <Wordmark />
      </header>

      <div className="hero-photo">
        <img
          src={asset("42dc9.png")}
          alt="Two people shaping a surfboard in an open-air timber workshop"
        />
        <div className="hero-copy">
          <h1>Build Your Own Board</h1>
          <p>Any Size, Any shape, Any Colour</p>
        </div>

        <a className="sketch-link how-link" href="#process">
          <img src={asset("5a667.svg")} alt="" />
          <span>how’s it work?</span>
        </a>
        <a className="sketch-link gallery-link" href="#gallery">
          <img src={asset("8f7a9.svg")} alt="" />
          <span>Gallery</span>
        </a>
        <a
          className="location-link"
          href="https://www.google.com/maps/search/?api=1&query=Dublin%2C+Ireland"
          target="_blank"
          rel="noreferrer"
        >
          <img src={asset("0b00c.svg")} alt="" />
          <span>Location?</span>
        </a>
        <a
          className="message-link"
          href="#contact"
          aria-label="Contact Surfcraft"
        >
          <span className="message-icon">
            <img src={asset("2bf65.svg")} alt="" />
          </span>
        </a>
      </div>
      <a className="email-link" href="mailto:ask@surfcraft.ie">
        ask@surfcraft.ie
      </a>
    </section>
  )
}

function Process() {
  return (
    <section className="process section" id="process">
      <Wordmark />
      <div className="process-card">
        <img className="process-bg" src={asset("07c1a.png")} alt="" />
        <div className="process-shade" />
        <div className="process-grid">
          <div className="process-main">
            <h2>What’s involved?</h2>
            <div className="steps">
              <p>
                Find a design of a board you’d like, maybe a friend’s
                <br />
                board or inspiration from Magicseaweed or Boardporn
              </p>
              <p>You start cutting the foam, from rocker to rails</p>
              <p>Choose your colours, bottom and deck. Add wood if you want</p>
              <p>
                Workshop sessions are about 90 mins to 2 hours.
                <br />
                Go as fast as you want. Music in your ears, foam in your hands.
              </p>
            </div>
            <div className="reassurance">
              <p>
                But I’ve never really done any hands on crafts/woodwork/shaping,
                <br />i might not be very good
                <img src={asset("287bd.svg")} alt="" />
              </p>
              <p>
                There’s a learning curve for everything, important thing is to
                have fun.
                <br />
                Bring a friend, learn together
              </p>
            </div>
          </div>
          <aside className="price">
            <h3>How much?</h3>
            <p>Materials is €150-250, depending on what you go for</p>
            <p>
              €20/hr after that, with an option to buy{" "}
              <a
                href="https://seatrees.org/blogs/in-the-news/biodiversity-biodiversity-credits-defined"
                target="_blank"
                rel="noreferrer"
              >
                biodiversity credits
              </a>
            </p>
          </aside>
        </div>
        <p className="process-note">
          important note: while the studio is a great place to hang out, build
          and experiment.... if you want a professionally made board, go to a
          shaper. I learnt alot from{" "}
          <a href="https://elleciel.com" target="_blank" rel="noreferrer">
            Elleciel.com
          </a>{" "}
          and{" "}
          <a
            href="https://www.facebook.com/powersourcesurf/"
            target="_blank"
            rel="noreferrer"
          >
            Powersource
          </a>
        </p>
        <a className="process-cta" href="#contact">
          i’m in!
        </a>
      </div>
      <a className="corner-message" href="#contact" aria-label="Send a message">
        <img src={asset("383ea.svg")} alt="" />
      </a>
    </section>
  )
}

const boards = [
  ["000db.png", "Hand-shaped wooden surfboard"],
  ["e8c29.png", "Pale wooden surfboard"],
  ["a65da.png", "Surfboard with a blue center stripe"],
  ["bed72.png", "Dark wood surfboard"],
  ["4e7bb.png", "Light wood surfboard"],
  ["82202.png", "Pink and wood surfboard"],
]

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <header className="gallery-header">
        <Wordmark />
        <h2>Gallery</h2>
      </header>
      <div className="gallery-content">
        <p>Find some inspiration from previous crafters.</p>
        <div className="board-grid">
          {boards.map(([src, alt]) => (
            <figure key={src}>
              <img src={asset(src)} alt={alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <header className="site-header">
        <Wordmark />
      </header>
      <div className="contact-photo">
        <img
          className="contact-bg"
          src={asset("ab772.png")}
          alt="Surfboard shaping studio at night"
        />
        <div className="contact-shade" />
        <div className="contact-content">
          <h2>Interested and want to have a chat?</h2>
          <form
            action="mailto:ask@surfcraft.ie"
            method="post"
            encType="text/plain"
          >
            <label>
              <span className="sr-only">Your email</span>
              <input name="email" type="email" placeholder="@" required />
            </label>
            <label>
              <span className="sr-only">Your message</span>
              <textarea name="message" placeholder="message me" required />
            </label>
            <button type="submit">Send message</button>
          </form>
          <a
            className="facebook-link"
            href="https://m.me/surfservices"
            target="_blank"
            rel="noreferrer"
          >
            <img src={asset("91b47.svg")} alt="" />
            <span>DM me</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main>
      <Home />
      <Process />
      <Gallery />
      <Contact />
    </main>
  )
}

import React, { useEffect, useState } from "react";

const club = {
  name: "Infinity Space Club",
  slogan: "Un espace infini pour des passions sans limites.",
  description:
    "Infinity Space est un club multi-activites de la FSBM qui aide les etudiants a explorer leurs passions au-dela des etudes.",
  objective:
    "Le club rassemble les etudiants autour du sport, du gaming, de l'informatique et du volontariat afin de creer une communaute inclusive, active et collaborative.",
  vision: "Creer une communaute inclusive ou chaque etudiant trouve sa place.",
  mission:
    "Offrir des activites variees, des evenements enrichissants et un environnement d'apprentissage collaboratif.",
  contact: {
    email: "infinity.space@fsbm.ma",
    phone: "FSBM - 2025/2026",
    location: "Faculte des Sciences Ben M'Sick (FSBM)",
  },
};

const brandAssets = {
  clubLogo: "/images/infinity/infinity-media-24.png",
  facultyLogo: "/images/infinity/University-Hassan-II-of-Casablanca-logo.webp",
};

const domains = [
  "Sports & competitions",
  "Gaming",
  "Informatique",
  "Volontariat",
];

const members = [
  { name: "Anas Rawi", role: "President" },
  { name: "Yasser Elmarsani", role: "Vice-President" },
  { name: "Asmaa Ibndaoud", role: "Secretaire Generale" },
  { name: "Salaheddine Elghazi", role: "Chef Media" },
  { name: "Yassine Oumzil", role: "Chef Organisation" },
  { name: "Younes Erradi", role: "Chef Planification" },
  { name: "Anass Eljamali", role: "Responsable RH" },
  { name: "Ayman Fateh", role: "Chef de Projet" },
  { name: "Nisrine Ahmitan", role: "Responsable Sponsoring" },
];

const events = [
  {
    title: "Journee d'Integration",
    status: "Realisee",
    date: "25/10/2025",
    place: "TD - 5",
    image: "/images/infinity/infinity-media-04.jpg",
    description:
      "Accueil des nouveaux membres avec jeux de societe, collations et ambiance conviviale.",
  },
  {
    title: "Formation aux Echecs",
    status: "Realisee",
    date: "15/11 au 13/12/2025",
    place: "FSBM",
    image: "/images/infinity/infinity-media-09.jpg",
    description:
      "Sessions d'entrainement hebdomadaires pour debutants et intermediaires.",
  },
  {
    title: "Semaine Universitaire du Sport",
    status: "Realisee",
    date: "26/02/2026",
    place: "Salle du theatre",
    image: "/images/infinity/infinity-media-11.png",
    description:
      "Jeux individuels organises avec le Club Sante et Sport : echecs, ping-pong et Uno.",
  },
  {
    title: "Tournoi d'Echecs",
    status: "Realisee",
    date: "04/03/2026",
    place: "FSBM",
    image: "/images/infinity/infinity-media-13.png",
    description:
      "Tournoi a forte participation dans une atmosphere competitive et fair-play.",
  },
  {
    title: "Caravane d'Orientation 2026",
    status: "Realisee",
    date: "24 au 27 mars 2026",
    place: "Lycees de la region",
    image: "/images/infinity/infinity-media-17.png",
    description:
      "Action avec ABC Math Info pour orienter les lyceens sur les parcours universitaires.",
  },
  {
    title: "Tournoi PES Mobile",
    status: "Realisee",
    date: "17/04/2026",
    place: "FSBM",
    image: "/images/infinity/infinity-media-21.png",
    description:
      "Competition e-sport avec 16 participants et mise en valeur du vainqueur.",
  },
  {
    title: "Conference : Simulation & Serious Games",
    status: "A venir",
    date: "27 avril",
    place: "FSBM",
    image: "/images/infinity/infinity-media-20.png",
    description:
      "Conference academique sur les jeux serieux, la simulation et l'apprentissage.",
  },
  {
    title: "Action Caritative",
    status: "A venir",
    date: "13 mai",
    place: "Aupres d'enfants",
    image: "/images/infinity/infinity-media-28.jpg",
    description:
      "Action de volontariat orientee impact humain, solidarite et accompagnement d'enfants.",
  },
  {
    title: "Tresor de FSBM",
    status: "A venir",
    date: "18 au 23 mai",
    place: "FSBM",
    image: "/images/infinity/infinity-media-27.jpeg",
    description:
      "Chasse au tresor pour dynamiser la vie etudiante et encourager l'esprit d'equipe.",
  },
];

const universityLevels = ["S1", "S2", "S3", "S4", "S5", "S6", "Master 1", "Master 2"];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <div className="brand">
          <span className="brand-logo" aria-hidden="true">
            <img src={brandAssets.clubLogo} alt="" />
          </span>
          <span>{club.name}</span>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <a href="#accueil" onClick={closeMenu}>Accueil</a>
          <a href="#domaines" onClick={closeMenu}>Domaines</a>
          <a href="#membres" onClick={closeMenu}>Bureau</a>
          <a href="#evenements" onClick={closeMenu}>Evenements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <img className="faculty-logo" src={brandAssets.facultyLogo} alt="Logo FSBM" />
      </nav>
    </header>
  );
}

function HomePage() {
  const [joinCount, setJoinCount] = useState(120);
  const [message, setMessage] = useState("");
  const [isJoinFormVisible, setIsJoinFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    level: "",
  });

  useEffect(() => {
    document.title = `${club.name} | FSBM`;
  }, []);

  const handleJoin = () => {
    setIsJoinFormVisible(true);
    setTimeout(() => {
      document.getElementById("adhesion")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setJoinCount((current) => current + 1);
    setMessage(
      `Merci ${formData.firstName} ! Votre demande pour rejoindre Infinity Space a ete enregistree.`,
    );
    setFormData({ lastName: "", firstName: "", email: "", level: "" });
  };

  return (
    <main>
      <section className="hero" id="accueil">
        <div className="hero-content">
          <p className="eyebrow">FSBM - 2025/2026</p>
          <h1>{club.name}</h1>
          <p className="hero-lead">{club.slogan}</p>
          <p className="hero-text">{club.description}</p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={handleJoin}>
              Rejoindre le club
            </button>
            <a className="secondary-link" href="#evenements">
              Voir les evenements
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Identite Infinity Space">
          <img className="hero-club-logo" src={brandAssets.clubLogo} alt="Logo Infinity Space Club" />
          <img className="hero-faculty-logo" src={brandAssets.facultyLogo} alt="Logo FSBM" />
          <div className="hero-tags">
            {domains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="objective-section" id="domaines">
        <div className="section-heading">
          <p className="eyebrow">A propos</p>
          <h2>Un club multi-activites ouvert a toutes les passions</h2>
        </div>
        <p>{club.objective}</p>
        <div className="mission-grid">
          <article>
            <h3>Vision</h3>
            <p>{club.vision}</p>
          </article>
          <article>
            <h3>Mission</h3>
            <p>{club.mission}</p>
          </article>
        </div>
        <div className="domain-grid">
          {domains.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </div>
        <div className="stats-row" aria-label="Statistiques du club">
          <div>
            <strong>{joinCount}</strong>
            <span>etudiants interesses</span>
          </div>
          <div>
            <strong>{events.length}</strong>
            <span>activites documentees</span>
          </div>
          <div>
            <strong>{members.length}</strong>
            <span>membres du bureau</span>
          </div>
        </div>
      </section>

      {isJoinFormVisible && (
        <section className="join-section" id="adhesion">
          <div className="section-heading">
            <p className="eyebrow">Adhesion</p>
            <h2>Formulaire pour rejoindre Infinity Space</h2>
          </div>
          <form className="join-form" onSubmit={handleSubmit}>
            <label>
              <span>Nom</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Votre nom" required />
            </label>
            <label>
              <span>Prenom</span>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Votre prenom" required />
            </label>
            <label>
              <span>Email universitaire</span>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="nom.prenom@universite.ma" required />
            </label>
            <label>
              <span>Niveau universitaire</span>
              <select name="level" value={formData.level} onChange={handleInputChange} required>
                <option value="">Choisir un niveau</option>
                {universityLevels.map((level) => (
                  <option value={level} key={level}>{level}</option>
                ))}
              </select>
            </label>
            <button className="primary-button form-submit" type="submit">
              Envoyer la demande
            </button>
          </form>
          {message && <p className="success-message form-message">{message}</p>}
        </section>
      )}

      <section className="content-section" id="membres">
        <div className="section-heading">
          <p className="eyebrow">Bureau</p>
          <h2>Notre bureau</h2>
        </div>
        <div className="card-grid bureau-grid">
          {members.map((member) => (
            <article className="info-card" key={member.name}>
              <span className="member-avatar" aria-hidden="true">{initials(member.name)}</span>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="evenements">
        <div className="section-heading">
          <p className="eyebrow">Activites</p>
          <h2>Evenements realises et a venir</h2>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <img className="event-image" src={event.image} alt={`Affiche : ${event.title}`} />
              <div className="event-date">
                <span className="event-status">{event.status}</span>
                {event.date}
              </div>
              <div className="event-body">
                <h3>{event.title}</h3>
                <p className="event-place">{event.place}</p>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h2>{club.name}</h2>
        <p>{club.slogan}</p>
      </div>
      <address>
        <span>{club.contact.location}</span>
        <a href={`mailto:${club.contact.email}`}>{club.contact.email}</a>
        <span>{club.contact.phone}</span>
      </address>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
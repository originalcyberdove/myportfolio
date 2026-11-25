import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  about,
  certifications,
  communityEvents,
  contact,
  experiences,
  hero,
  leadership,
  projects,
  publications,
  recognition,
  skillCategories,
} from "@/data";

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        <section className="intro-section content-width" aria-labelledby="intro-title">
          <div className="intro-aside">
            <figure className="intro-portrait">
              <Image
                src={hero.portraitPath}
                alt="Oluwatomilola Arogundade"
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 900px) 32vw, 280px"
                priority
              />
            </figure>
          </div>
          <div className="intro-copy">
            <h1 id="intro-title">
              Cybersecurity professional working across security operations,
              application security, and research.
            </h1>
            <p>{hero.intro}</p>
            <a className="text-link" href="#projects">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
          </div>
        </section>

        <section id="projects" className="content-width section-block work-section">
          <div className="work-heading">
            <div>
              <p className="eyebrow">Selected work · 2025—26</p>
              <h2>Work</h2>
            </div>
            <p className="section-note">
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-entry" key={project.id}>
                <div className="project-meta">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="project-copy">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <div className="tag-list" aria-label="Technologies">
                      {[...project.technologies, ...(project.tools ?? [])].map(
                        (technology) => (
                          <span className="tag" key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                    <div className="project-actions">
                      {project.liveUrl && (
                        <a
                          className="text-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit project <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.caseStudy && (
                        <a
                          className="text-link"
                          href={`/projects/${project.id}`}
                        >
                          View case study <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      <details className="project-details">
                        <summary>Project details</summary>
                        <div className="project-detail-content">
                          {project.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          <ul>
                            {project.keyDetails.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
                <figure
                  className={`project-visual project-visual--${project.id}`}
                  role="img"
                  aria-label={`${project.title} project preview placeholder`}
                >
                  <span className="visual-overline">
                    {project.status} · Project preview
                  </span>
                  <span className="visual-wordmark">{project.title}</span>
                  <figcaption>
                    <span>{project.category}</span>
                    <span>Image to be added</span>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-width section-block">
          <SectionTitle eyebrow="A little about me" title="About" />
          <div className="about-layout">
            <div className="prose">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="interest-list">
              <p className="eyebrow">Research interests</p>
              <ul>
                {about.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
          <div id="skills" className="skills-strip">
            <p className="eyebrow">Selected skills</p>
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div className="skill-group" key={category.title}>
                  <h3>{category.title}</h3>
                  <p>{category.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-width section-block">
          <SectionTitle eyebrow="Professional experience" title="Experience" />
          <div className="entry-list">
            {experiences.map((experience) => (
              <article className="resume-entry" key={experience.role}>
                <div className="entry-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="entry-subtitle">
                      {experience.company} <span>·</span> {experience.location}
                    </p>
                  </div>
                  <p className="entry-date">{experience.period}</p>
                </div>
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="content-width section-block">
          <SectionTitle eyebrow="Research & publications" title="" />
          <div className="entry-list">
            {publications.map((publication) => (
              <article className="resume-entry publication-entry" key={publication.doi}>
                <p className="entry-date">{publication.year} · Journal article</p>
                <h3>{publication.title}</h3>
                <p className="entry-subtitle">
                  {publication.authors} · {publication.journal}, {publication.volume}
                </p>
                <p className="publication-contribution">
                  Lead and corresponding author; contributed system design,
                  development, and manuscript drafting.
                </p>
                <a
                  className="text-link"
                  href={publication.doi}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read publication <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-width section-block">
          <SectionTitle eyebrow="Academic background" title="Education" />
          <article className="resume-entry education-entry">
            <div className="entry-heading">
              <div>
                <h3>{about.education.degree}</h3>
                <p className="entry-subtitle">
                  {about.education.institution} · {about.education.location}
                </p>
              </div>
              <p className="entry-date">{about.education.period}</p>
            </div>
            <p className="education-result">
              {about.education.classification} · CGPA {about.education.cgpa}
            </p>
            <p className="education-coursework">
              Relevant coursework: Operating Systems, Research Methodology,
              Information Systems Analysis and Design, Algorithms and Data
              Structures, Machine Learning, Web Design and Development.
            </p>
          </article>
        </section>

        <section id="certifications" className="content-width section-block">
          <SectionTitle eyebrow="Professional development" title="Certifications" />
          <ul className="credential-list">
            {certifications.map((certification) => (
              <li key={certification.title}>
                <span>{certification.title}</span>
                <span className="credential-issuer">
                  {certification.issuer}
                  {certification.issueDate ? ` · ${certification.issueDate}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="community" className="content-width section-block">
          <SectionTitle eyebrow="Leadership & service" title="Community" />
          <div className="entry-list community-list">
            {leadership.map((role) => (
              <article className="resume-entry" key={role.role}>
                <div className="entry-heading">
                  <div>
                    <h3>{role.role}</h3>
                    {role.org && <p className="entry-subtitle">{role.org}</p>}
                  </div>
                  <p className="entry-date">{role.period}</p>
                </div>
                <ul>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="events-block">
            <p className="eyebrow">Selected events</p>
            {communityEvents.map((event) => (
              <article className="event-entry" key={event.title}>
                <div>
                  <h3>{event.title}</h3>
                  <p className="entry-subtitle">{event.organisation}</p>
                  <p>{event.detail}</p>
                </div>
                <p className="entry-date">{event.date}</p>
              </article>
            ))}
          </div>
          <div className="recognition-block">
            <p className="eyebrow">Recognition</p>
            <ul className="credential-list">
              {recognition.map((award) => (
                <li key={award.title}>
                  <span>
                    {award.title} · {award.organisation}
                  </span>
                  <span className="credential-issuer">
                    {award.year} · {award.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="content-width section-block contact-section">
          <SectionTitle eyebrow="Contact" title={contact.heading} />
          <div className="contact-content">
            <p>{contact.subtext}</p>
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email} <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-links">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={hero.cvPath} target="_blank" rel="noreferrer">
                View CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer content-width">
        <span>Oluwatomilola Arogundade · {hero.alias}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

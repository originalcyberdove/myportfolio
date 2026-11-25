import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data";

type ProjectPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Oluwatomilola Arogundade`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.id === params.id);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const caseStudy = project.caseStudy;

  return (
    <>
      <Navbar />
      <main id="home" className="content-width case-study">
        <a className="text-link case-study-back" href="/#projects">
          ← Back to selected work
        </a>

        <header className="case-study-header">
          <div>
            <p className="eyebrow">
              {project.category} · {project.year ?? "2026"}
            </p>
            <h1>{project.title}</h1>
            <p className="case-study-summary">{project.summary}</p>
          </div>
          <div className="tag-list" aria-label="Technologies">
            {[...project.technologies, ...(project.tools ?? [])].map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </header>

        <figure
          className={`project-visual case-study-visual project-visual--${project.id}`}
          role="img"
          aria-label={`${project.title} sanitized project preview`}
        >
          <span className="visual-overline">
            {project.status} · Sanitized project preview
          </span>
          <span className="visual-wordmark">{project.title}</span>
          <figcaption>
            <span>{project.category}</span>
            <span>Sanitized evidence</span>
          </figcaption>
        </figure>

        <div className="case-study-layout">
          <div className="case-study-section">
            <p className="eyebrow">Overview</p>
            {caseStudy.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Objectives</p>
            <ul>
              {caseStudy.objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Tools and technologies</p>
            <div className="tag-list">
              {[...project.technologies, ...(project.tools ?? [])].map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">My role and configuration work</p>
            <ul>
              {caseStudy.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Methodology</p>
            <ol>
              {caseStudy.methodology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Sanitized screenshots</p>
            <p>
              No raw traffic, credentials, cookies, endpoints, exploit requests,
              or unremediated findings are published here. Screenshots are
              intentionally represented through the sanitized project preview.
            </p>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Key observations</p>
            <ul>
              {caseStudy.observations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-study-section">
            <p className="eyebrow">Lessons learned</p>
            <ul>
              {caseStudy.lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="case-study-section medium-placeholder" aria-label="Medium article">
            <p className="eyebrow">Medium article</p>
            {project.mediumUrl ? (
              <a
                className="text-link"
                href={project.mediumUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read on Medium <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p>
                Medium article link placeholder — add the published URL here
                when available.
              </p>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}

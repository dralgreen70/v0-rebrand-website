const pubs = [
  {
    type: "Journal Article",
    year: "2024",
    title: "Tailoring Caplacizumab Administration Using ADAMTS13 Activity for Immune-Mediated Thrombotic Thrombocytopenic Purpura",
    authors: "Yates SG, Hofmann SL, Ibrahim IF, Shen YMP, Green AP, Sarode R",
    journal: "Blood Vessels, Thrombosis & Hemostasis",
    desc: "Demonstrates a personalized approach to caplacizumab dosing guided by ADAMTS13 activity monitoring, optimizing treatment outcomes in iTTP.",
    link: "https://doi.org/10.1016/j.bvth.2024.100010",
  },
  {
    type: "Journal Article",
    year: "2023",
    title: "A Case of Hyperhemolysis Syndrome in Sickle Cell Disease and Concomitant COVID-19",
    authors: "Green A, Jones H, Nero A, Ibrahim IF, Sarode R, et al.",
    journal: "Transfusion and Apheresis Science",
    desc: "Reports a novel case highlighting the intersection of hyperhemolysis syndrome in sickle cell disease complicated by concurrent SARS-CoV-2 infection.",
    link: "https://pubmed.ncbi.nlm.nih.gov/36344377/",
  },
  {
    type: "Journal Article",
    year: "2022",
    title: "Successful Use of Lenalidomide to Treat Refractory Acquired von Willebrand Disease Associated with Monoclonal Gammopathy",
    authors: "Green A, Shen YP, Nelson AT, Sarode R, et al.",
    journal: "Annals of Hematology",
    desc: "First reported use of lenalidomide for refractory acquired von Willebrand disease in the setting of monoclonal gammopathy, demonstrating a novel therapeutic approach.",
    link: "https://link.springer.com/article/10.1007/s00277-022-04991-9",
  },
  {
    type: "Oral Presentation",
    year: "2024",
    title: "Continued Unfractionated Heparin Infusion During Therapeutic Plasma Exchange: A Retrospective Analysis",
    authors: "Green A, et al.",
    journal: "American Society for Apheresis Annual Conference, Las Vegas",
    desc: "Retrospective analysis evaluating the safety and efficacy of maintaining heparin infusions during TPE procedures, informing best practices for anticoagulation management.",
    link: "#",
  },
  {
    type: "Invited Lecture",
    year: "2024",
    title: "Therapeutic Plasma Exchange: A Deep Dive into Mechanisms and Therapeutic Potential",
    authors: "Green AP",
    journal: "Update in Pathophysiology, Department of Pathology, UT Southwestern",
    desc: "Comprehensive invited lecture covering the mechanistic basis of TPE and its expanding therapeutic applications across longevity and disease management.",
    link: "#",
  },
]

export function PublicationsSection() {
  return (
    <section className="publications-section site-section" id="research">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">Published Research</span>
            </div>
            <h2 className="h-lg reveal">
              Research &{" "}
              <span className="serif-italic accent-text">Publications</span>
            </h2>
          </div>
          <div className="section-number reveal">
            6 PUBLICATIONS / 3 ABSTRACTS / 2 PRESENTATIONS
          </div>
        </div>
        <div className="pub-cards-grid">
          {pubs.map((p, i) => (
            <div key={i} className={`pub-card reveal reveal-d${(i % 3) + 1}`}>
              <div className="pub-card-header">
                <span className="pub-card-type">{p.type}</span>
                <span className="pub-card-year">{p.year}</span>
              </div>
              <div className="pub-card-body">
                <h3 className="pub-card-title">{p.title}</h3>
                <p className="pub-card-authors">{p.authors}</p>
                <p className="pub-card-journal">{p.journal}</p>
                <p className="pub-card-desc">{p.desc}</p>
                {p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-link"
                  >
                    View Paper
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const pubs = [
  // 2024
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
  // 2023
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
    type: "Conference Abstract",
    year: "2023",
    title: "Response to Therapeutic Plasma Exchange in Two Patients with Systemic Sclerosis",
    authors: "Webb CB, Green A, Wodajo A, et al.",
    journal: "American Society for Apheresis Annual Meeting, Minneapolis, MN",
    desc: "Poster presentation examining therapeutic plasma exchange outcomes in systemic sclerosis patients.",
    link: "#",
  },
  // 2022
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
    type: "Conference Abstract",
    year: "2022",
    title: "The Impact of Rh/K Antigen Matching for Chronic Red Cell Exchanges on Red Cell Inventories",
    authors: "Green A, Sutor L, Yates S, Khalifa L, Burner J",
    journal: "Association for the Advancement of Blood & Biotherapies Annual Meeting, Orlando, FL",
    desc: "Analysis of red blood cell inventory impacts when implementing extended antigen matching protocols for chronic transfusion patients.",
    link: "#",
  },
  // 2021
  {
    type: "Journal Article",
    year: "2021",
    title: "Identification of Potential Antiviral Compounds Against SARS-CoV-2: A Pharmacoinformatics Study",
    authors: "Garc\u00EDa R, Hussain A, Koduru P, et al. (including Green A)",
    journal: "Computers in Biology and Medicine",
    desc: "Computational analysis identifying potential antiviral compounds targeting SARS-CoV-2 structural and non-structural proteins using pharmacoinformatics approaches.",
    link: "https://www.sciencedirect.com/science/article/pii/S001048252100158X",
  },
  {
    type: "Journal Article",
    year: "2021",
    title: "Clinical Evaluation of the Abbott Alinity SARS-CoV-2 Spike-Specific Quantitative IgG and IgM Assays",
    authors: "Narasimhan M, Mahimainathan L, Araj E, et al. (including Green A)",
    journal: "Journal of Clinical Microbiology",
    desc: "Clinical evaluation of quantitative antibody assays for SARS-CoV-2 among infected, recovered, and vaccinated populations.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33827901/",
  },
  {
    type: "Journal Article",
    year: "2021",
    title: "The Utility of Therapeutic Plasma Exchange in Hyperviscosity Syndrome Associated with Juvenile Rheumatoid Arthritis",
    authors: "Green A, Gonzalez A, Alperin J, Burner J, Yates S",
    journal: "Journal of Clinical Apheresis",
    desc: "Case report demonstrating successful use of therapeutic plasma exchange for managing hyperviscosity syndrome in juvenile rheumatoid arthritis.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33945169/",
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
            9 PUBLICATIONS / 2 ABSTRACTS / 2 PRESENTATIONS
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

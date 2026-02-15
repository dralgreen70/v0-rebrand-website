const pubs = [
  { type: "Journal Article", html: 'Yates SG, Hofmann SL, Ibrahim IF, Shen YMP, <strong>Green AP</strong>, Sarode R. Tailoring caplacizumab administration using ADAMTS13 activity for immune-mediated thrombotic thrombocytopenic purpura. <em>Blood Vessels, Thrombosis &amp; Hemostasis.</em> 2024.' },
  { type: "Journal Article", html: '<strong>Green A</strong>, Jones H, Nero A, Ibrahim IF, Sarode R, et al. A case of hyperhemolysis syndrome in sickle cell disease and concomitant COVID-19. <em>Transfus Apher Sci.</em> 2023.' },
  { type: "Journal Article", html: '<strong>Green A</strong>, Shen YP, Nelson AT, Sarode R, et al. Successful use of lenalidomide to treat refractory acquired von Willebrand disease associated with monoclonal gammopathy. <em>Ann Hematol.</em> 2022.' },
  { type: "Oral Presentation", html: '<strong>Green A</strong>, et al. Continued unfractionated heparin infusion during therapeutic plasma exchange: A retrospective analysis. <em>American Society for Apheresis Annual Conference.</em> April 2024, Las Vegas.' },
  { type: "Invited Lecture", html: '"Therapeutic Plasma Exchange: A Deep Dive into Mechanisms and Therapeutic Potential." <em>Update in Pathophysiology, Department of Pathology, UT Southwestern.</em> February 2024.' },
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
        <div className="pub-list">
          {pubs.map((p, i) => (
            <div key={i} className="pub-item reveal">
              <div
                className="label-text pub-type"
                style={{ color: "var(--accent)", marginBottom: "0.75rem" }}
              >
                {p.type}
              </div>
              <p dangerouslySetInnerHTML={{ __html: p.html }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

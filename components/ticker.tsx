const items = [
  { label: "EXPERIENCE", value: "500+ Procedures" },
  { label: "BOARD CERTIFIED", value: "Clinical Pathologist" },
  { label: "SPECIALTY", value: "Apheresis" },
  { label: "TRAINING", value: "UT Southwestern" },
  { label: "RESEARCH", value: "6+ Published Papers" },
]

function TickerItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <div className="ticker-item">
            <span className="label-text">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
          <div className="ticker-divider" />
        </span>
      ))}
    </>
  )
}

export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  )
}

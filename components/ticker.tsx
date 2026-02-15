const items = [
  { label: "Specialty", value: "Therapeutic Plasma Exchange" },
  { label: "Training", value: "UT Southwestern" },
  { label: "Focus", value: "Longevity & Health Optimization" },
  { label: "Experience", value: "100+ PLEX Procedures" },
  { label: "Research", value: "6+ Published Papers" },
  { label: "Board", value: "Certified Clinical Pathologist" },
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

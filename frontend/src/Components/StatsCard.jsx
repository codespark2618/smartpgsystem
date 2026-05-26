function StatsCard({ item }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">
        {item.icon}
      </div>

      <h5>{item.title}</h5>

      <h1>{item.value}</h1>

      <p>{item.sub}</p>
    </div>
  );
}

export default StatsCard;
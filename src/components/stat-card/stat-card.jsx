function StatCard({ value, label }) {
  return (
    <div className="flex flex-col">
      <strong className="text-2xl">{value}</strong>
      <span className="text-(--muted) text-[13px]">{label}</span>
    </div>
  );
}

// .hero__stats div {
//   display: flex;
//   flex-direction: column;
// }

// .hero__stats strong {
//   font-size: 22px;
// }

// .hero__stats span {
//   color: var(--muted);
//   font-size: 13px;
// }

export default StatCard;

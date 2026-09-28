function SectionHead({ eyebrow, title, description }) {
  return (
    <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <div>
        <span className="text-sm font-bold text-primary uppercase tracking-wider">
          {eyebrow}
        </span>
        <h2
          id="formTitle"
          className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
        <p
          id="formDescription"
          className="mt-3 md:text-lg lg:text-xl text-muted"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHead;

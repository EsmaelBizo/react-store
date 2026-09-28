function Loading({ text, className = "" }) {
  return (
    <div
      className={`flex min-h-50 flex-col items-center justify-center gap-3 h-full ${className}`}
    >
      <div className="size-20 animate-spin rounded-full border-4 border-border border-t-primary" />

      <p className="text-lg font-medium text-muted">
        {text}
      </p>
    </div>
  );
}

export default Loading;
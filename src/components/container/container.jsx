function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-295 px-5 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
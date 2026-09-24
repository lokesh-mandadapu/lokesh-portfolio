function SpaceBackground({ className = '' }) {
  return (
    <div className={`space-background ${className}`.trim()} aria-hidden="true">
      <div className="stars stars-one" />
      <div className="stars stars-two" />
      <div className="stars stars-three" />
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="space-ship ship-one" />
      <div className="space-ship ship-two" />
      <div className="space-ship ship-three" />
      <div className="shooting-star shooting-one" />
      <div className="shooting-star shooting-two" />
      <div className="planet planet-main" />
    </div>
  )
}

export default SpaceBackground
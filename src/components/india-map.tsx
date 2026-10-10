import india from '@svg-maps/india';
const nodes = [
  [226, 170],
  [170, 274],
  [323, 308],
  [130, 357],
  [223, 480],
  [395, 325],
];
export function IndiaMap() {
  return (
    <div className="india-network-visual">
      <svg
        viewBox="-25 -20 665 750"
        role="img"
        aria-label="Complete India map with illustrative network connections, including islands"
      >
        <defs>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g className="india-states">
          {india.locations.map((location: { id: string; name: string; path: string }) => (
            <path key={location.id} d={location.path}>
              <title>{location.name}</title>
            </path>
          ))}
        </g>
        <g className="india-routes">
          <path d="M226 170 Q115 190 170 274 M226 170 Q360 170 323 308 M226 170 Q280 400 223 480 M170 274 Q100 340 130 357 M170 274 Q320 205 395 325 M130 357 Q200 430 223 480 M323 308 Q275 350 223 480 M395 325 Q375 430 223 480 M170 274 Q285 380 323 308" />
        </g>
        <g>
          {nodes.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="12" fill="#ffc840" filter="url(#node-glow)" />
              <circle cx={x} cy={y} r="6" fill="#ffcf4d" />
              <circle cx={x} cy={y} r="3" fill="#fff6cc" />
            </g>
          ))}
        </g>
      </svg>
      <span className="visual-caption">Illustrative network vision</span>
    </div>
  );
}

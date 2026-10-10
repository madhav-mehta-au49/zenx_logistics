import { Truck, Package, Warehouse, Route, Bike, Users, Shield } from 'lucide-react';

type Variant = 'hero' | 'dark' | 'light';

const driftIcons = [
  { Icon: Truck, x: '5%', y: '18%', size: 54, duration: 22, delay: 0 },
  { Icon: Package, x: '86%', y: '12%', size: 40, duration: 18, delay: 2.4 },
  { Icon: Warehouse, x: '12%', y: '72%', size: 46, duration: 26, delay: 1.2 },
  { Icon: Route, x: '78%', y: '66%', size: 48, duration: 20, delay: 3.6 },
  { Icon: Bike, x: '44%', y: '8%', size: 42, duration: 17, delay: 5 },
  { Icon: Users, x: '92%', y: '44%', size: 38, duration: 24, delay: 2 },
  { Icon: Shield, x: '30%', y: '86%', size: 40, duration: 21, delay: 4.2 },
];

export function BackgroundMotion({
  variant = 'hero',
  count = 7,
}: {
  variant?: Variant;
  count?: number;
}) {
  return (
    <div className={`bg-motion bg-motion-${variant}`} aria-hidden="true">
      <div className="bg-motion-grid" />
      <div className="bg-motion-route route-a">
        <span className="bg-motion-pulse" />
      </div>
      <div className="bg-motion-route route-b">
        <span className="bg-motion-pulse" />
      </div>
      {driftIcons.slice(0, count).map(({ Icon, x, y, size, duration, delay }, index) => (
        <span
          className="bg-motion-item"
          key={index}
          style={{
            left: x,
            top: y,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1.15} />
        </span>
      ))}
    </div>
  );
}

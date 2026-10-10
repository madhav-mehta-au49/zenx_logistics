import type { ReactNode } from 'react';

const NAVY = '#081b36';
const BLUE = '#0759c7';
const CYAN = '#26bce7';
const GOLD = '#f4b41b';
const SLATE = '#526277';
const LINE = '#dce4ef';
const PALE = '#f4f7fb';
const WHITE = '#ffffff';
const BG = '#eef4fb';

export type ServiceSlug =
  | 'logistics-transport'
  | 'aggregator-transport'
  | 'food-delivery'
  | 'medicine-delivery'
  | 'ecommerce'
  | 'parcel-booking'
  | 'manpower'
  | 'security'
  | 'rider-hiring'
  | 'hub-management'
  | 'warehousing'
  | 'consultancy'
  | 'government-tenders';

function Blobs() {
  return (
    <>
      <circle cx="406" cy="70" r="86" fill={LINE} opacity="0.55" />
      <circle cx="70" cy="302" r="66" fill={PALE} />
    </>
  );
}

function Frame({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const labelled = typeof title === 'string' && title.length > 0;
  return (
    <svg
      viewBox="0 0 480 360"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={labelled ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      {labelled ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={BG} />
          <stop offset="1" stopColor={WHITE} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect x="0" y="0" width="480" height="360" rx="26" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="0" width="480" height="360" fill={`url(#${id}-bg)`} />
        {children}
      </g>
    </svg>
  );
}

function LogisticsTransport() {
  return (
    <>
      <Blobs />
      <rect x="0" y="292" width="480" height="68" fill={NAVY} />
      <rect x="26" y="322" width="54" height="9" rx="4.5" fill={WHITE} opacity="0.6" />
      <rect x="122" y="322" width="54" height="9" rx="4.5" fill={WHITE} opacity="0.6" />
      <rect x="218" y="322" width="54" height="9" rx="4.5" fill={WHITE} opacity="0.6" />
      <rect x="314" y="322" width="54" height="9" rx="4.5" fill={WHITE} opacity="0.6" />
      <rect x="410" y="322" width="54" height="9" rx="4.5" fill={WHITE} opacity="0.6" />
      <rect x="34" y="194" width="72" height="10" rx="5" fill={BLUE} opacity="0.3" />
      <rect x="16" y="220" width="100" height="10" rx="5" fill={CYAN} opacity="0.36" />
      <rect
        x="118"
        y="150"
        width="196"
        height="130"
        rx="14"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="118" y="176" width="196" height="10" fill={CYAN} opacity="0.5" />
      <rect x="146" y="206" width="140" height="14" rx="7" fill={BLUE} />
      <rect x="146" y="234" width="100" height="14" rx="7" fill={LINE} />
      <rect x="146" y="258" width="124" height="14" rx="7" fill={LINE} />
      <rect x="286" y="150" width="28" height="28" rx="7" fill={GOLD} />
      <path d="M314 176 h78 l40 44 v60 h-118 z" fill={BLUE} />
      <path d="M332 190 h52 l28 32 h-80 z" fill={CYAN} opacity="0.72" />
      <rect x="424" y="244" width="9" height="18" rx="4.5" fill={GOLD} />
      <circle cx="168" cy="288" r="28" fill={NAVY} />
      <circle cx="168" cy="288" r="12" fill={WHITE} />
      <circle cx="252" cy="288" r="28" fill={NAVY} />
      <circle cx="252" cy="288" r="12" fill={WHITE} />
      <circle cx="380" cy="288" r="28" fill={NAVY} />
      <circle cx="380" cy="288" r="12" fill={WHITE} />
    </>
  );
}

function Tempo({
  x,
  y,
  scale,
  body,
  accent,
}: {
  x: number;
  y: number;
  scale: number;
  body: string;
  accent: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M92 0 h20 a14 14 0 0 1 14 14 v60 h-34 z" fill={accent} />
      <rect x="0" y="0" width="120" height="74" rx="12" fill={body} />
      <rect x="12" y="14" width="44" height="34" rx="8" fill={WHITE} opacity="0.85" />
      <rect x="104" y="18" width="16" height="18" rx="4" fill={WHITE} opacity="0.8" />
      <circle cx="34" cy="80" r="13" fill={NAVY} />
      <circle cx="34" cy="80" r="5" fill={WHITE} />
      <circle cx="102" cy="80" r="13" fill={NAVY} />
      <circle cx="102" cy="80" r="5" fill={WHITE} />
    </g>
  );
}

function AggregatorTransport() {
  return (
    <>
      <Blobs />
      <rect x="0" y="330" width="480" height="30" fill={LINE} opacity="0.5" />
      <path
        d="M24 306 C 130 306 132 210 232 210 S 352 122 456 122"
        fill="none"
        stroke={BLUE}
        strokeWidth="6"
        strokeDasharray="16 14"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="24" cy="306" r="14" fill={WHITE} stroke={BLUE} strokeWidth="6" />
      <circle cx="232" cy="210" r="14" fill={WHITE} stroke={CYAN} strokeWidth="6" />
      <circle cx="456" cy="122" r="14" fill={WHITE} stroke={BLUE} strokeWidth="6" />
      <circle cx="128" cy="258" r="7" fill={GOLD} />
      <circle cx="344" cy="166" r="7" fill={GOLD} />
      <Tempo x={40} y={244} scale={1} body={BLUE} accent={NAVY} />
      <Tempo x={196} y={150} scale={0.78} body={CYAN} accent={BLUE} />
      <Tempo x={344} y={78} scale={0.56} body={GOLD} accent={SLATE} />
    </>
  );
}

function FoodDelivery() {
  return (
    <>
      <Blobs />
      <rect x="0" y="302" width="480" height="58" fill={LINE} opacity="0.5" />
      <rect x="30" y="206" width="72" height="10" rx="5" fill={BLUE} opacity="0.3" />
      <rect x="14" y="234" width="100" height="10" rx="5" fill={CYAN} opacity="0.36" />
      <rect x="134" y="182" width="86" height="78" rx="14" fill={BLUE} />
      <rect x="124" y="170" width="106" height="20" rx="10" fill={NAVY} />
      <rect x="134" y="216" width="86" height="12" fill={GOLD} />
      <path
        d="M158 158 c -6 -10 6 -16 0 -26"
        fill="none"
        stroke={CYAN}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M186 158 c -6 -10 6 -16 0 -26"
        fill="none"
        stroke={CYAN}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="176" cy="300" r="36" fill={NAVY} />
      <circle cx="176" cy="300" r="14" fill={WHITE} />
      <circle cx="336" cy="300" r="36" fill={NAVY} />
      <circle cx="336" cy="300" r="14" fill={WHITE} />
      <rect x="176" y="262" width="140" height="20" rx="10" fill={BLUE} />
      <rect x="190" y="244" width="62" height="18" rx="9" fill={NAVY} />
      <path d="M304 282 L322 214 L348 214 L336 282 Z" fill={CYAN} />
      <rect x="326" y="198" width="48" height="12" rx="6" fill={NAVY} />
      <circle cx="372" cy="204" r="8" fill={SLATE} />
      <circle cx="352" cy="238" r="14" fill={GOLD} />
      <circle cx="352" cy="238" r="6" fill={WHITE} />
    </>
  );
}

function MedicineDelivery() {
  return (
    <>
      <Blobs />
      <rect x="0" y="318" width="480" height="42" fill={LINE} opacity="0.4" />
      <path
        d="M40 332 h58 l14 -26 l20 48 l16 -34 h74 l14 -22 l18 40 l14 -30 h90"
        fill="none"
        stroke={CYAN}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M198 152 c 0 -38 84 -38 84 0"
        fill="none"
        stroke={NAVY}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <rect x="150" y="152" width="180" height="152" rx="30" fill={BLUE} />
      <rect x="150" y="152" width="180" height="62" rx="30" fill={NAVY} />
      <rect x="228" y="224" width="24" height="64" rx="6" fill={WHITE} />
      <rect x="206" y="242" width="68" height="24" rx="6" fill={WHITE} />
      <circle cx="150" cy="212" r="10" fill={GOLD} />
      <rect x="372" y="284" width="48" height="20" rx="10" fill={CYAN} />
      <rect x="372" y="284" width="24" height="20" rx="10" fill={WHITE} opacity="0.5" />
      <rect x="372" y="312" width="48" height="20" rx="10" fill={GOLD} opacity="0.85" />
    </>
  );
}

function Ecommerce() {
  return (
    <>
      <Blobs />
      <rect x="0" y="300" width="480" height="60" fill={LINE} opacity="0.45" />
      <path
        d="M120 140 c 0 -32 90 -32 90 0"
        fill="none"
        stroke={NAVY}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <rect x="90" y="140" width="150" height="162" rx="18" fill={BLUE} />
      <rect x="90" y="212" width="150" height="18" fill={GOLD} />
      <circle cx="165" cy="182" r="18" fill={WHITE} opacity="0.9" />
      <rect
        x="270"
        y="196"
        width="120"
        height="106"
        rx="12"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="322" y="196" width="16" height="106" fill={CYAN} opacity="0.75" />
      <rect x="270" y="240" width="120" height="4" fill={LINE} />
      <rect x="126" y="150" width="88" height="52" rx="10" fill={GOLD} />
      <rect x="126" y="150" width="88" height="10" rx="5" fill={NAVY} opacity="0.2" />
      <path
        d="M300 96 h24 l16 48 h80 l14 -34"
        fill="none"
        stroke={NAVY}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M322 104 L338 150 L432 150 L446 104 Z"
        fill={CYAN}
        opacity="0.8"
        stroke={NAVY}
        strokeWidth="4"
      />
      <circle cx="350" cy="168" r="10" fill={NAVY} />
      <circle cx="418" cy="168" r="10" fill={NAVY} />
    </>
  );
}

function ParcelBooking() {
  return (
    <>
      <Blobs />
      <rect x="0" y="306" width="480" height="54" fill={LINE} opacity="0.45" />
      <rect
        x="104"
        y="150"
        width="184"
        height="156"
        rx="12"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="180" y="150" width="34" height="156" fill={CYAN} opacity="0.7" />
      <rect x="104" y="198" width="184" height="4" fill={LINE} />
      <rect x="82" y="92" width="128" height="60" rx="10" fill={GOLD} />
      <rect x="82" y="112" width="128" height="6" fill={NAVY} opacity="0.22" />
      <rect
        x="300"
        y="170"
        width="118"
        height="136"
        rx="12"
        fill={PALE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect
        x="312"
        y="184"
        width="94"
        height="58"
        rx="6"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="2"
      />
      <rect x="320" y="196" width="4" height="34" fill={NAVY} />
      <rect x="328" y="196" width="7" height="34" fill={NAVY} />
      <rect x="340" y="196" width="3" height="34" fill={NAVY} />
      <rect x="347" y="196" width="8" height="34" fill={NAVY} />
      <rect x="359" y="196" width="4" height="34" fill={NAVY} />
      <rect x="367" y="196" width="6" height="34" fill={NAVY} />
      <rect x="377" y="196" width="3" height="34" fill={NAVY} />
      <rect x="384" y="196" width="8" height="34" fill={NAVY} />
      <rect x="396" y="196" width="5" height="34" fill={NAVY} />
      <rect x="312" y="252" width="94" height="8" rx="4" fill={LINE} />
      <rect x="312" y="268" width="60" height="8" rx="4" fill={LINE} />
      <rect x="292" y="246" width="134" height="12" fill={CYAN} opacity="0.35" />
    </>
  );
}

function Worker({
  x,
  y,
  scale,
  shirt,
  hat = false,
}: {
  x: number;
  y: number;
  scale: number;
  shirt: string;
  hat?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-30" y="-40" width="18" height="40" rx="9" fill={SLATE} />
      <rect x="12" y="-40" width="18" height="40" rx="9" fill={SLATE} />
      <path d="M-42 -40 V-74 a42 42 0 0 1 84 0 v34 z" fill={shirt} />
      <circle cx="0" cy="-116" r="26" fill={SLATE} />
      {hat ? (
        <>
          <path d="M-28 -128 a28 28 0 0 1 56 0 z" fill={GOLD} />
          <rect x="-36" y="-132" width="72" height="9" rx="4.5" fill={GOLD} />
        </>
      ) : null}
    </g>
  );
}

function Manpower() {
  return (
    <>
      <Blobs />
      <rect x="0" y="318" width="480" height="42" fill={LINE} opacity="0.5" />
      <rect x="60" y="118" width="70" height="200" rx="6" fill={PALE} />
      <rect x="150" y="150" width="56" height="168" rx="6" fill={PALE} />
      <rect x="356" y="130" width="64" height="188" rx="6" fill={PALE} />
      <Worker x={140} y={318} scale={1} shirt={BLUE} hat />
      <Worker x={240} y={318} scale={1.08} shirt={CYAN} />
      <Worker x={332} y={318} scale={0.96} shirt={GOLD} hat />
      <Worker x={412} y={318} scale={0.86} shirt={SLATE} />
    </>
  );
}

function Security() {
  return (
    <>
      <Blobs />
      <path
        d="M240 56 L348 96 V198 C348 264 296 300 240 318 C184 300 132 264 132 198 V96 Z"
        fill={BLUE}
      />
      <path
        d="M240 78 L330 110 V196 C330 250 288 280 240 296 C192 280 150 250 150 196 V110 Z"
        fill={NAVY}
        opacity="0.22"
      />
      <path
        d="M196 190 l30 30 l60 -70"
        fill="none"
        stroke={WHITE}
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="348" cy="96" r="14" fill={GOLD} />
      <circle cx="132" cy="300" r="12" fill={CYAN} opacity="0.8" />
    </>
  );
}

function RiderHiring() {
  return (
    <>
      <Blobs />
      <rect x="0" y="304" width="480" height="56" fill={LINE} opacity="0.5" />
      <rect x="20" y="252" width="86" height="10" rx="5" fill={BLUE} opacity="0.3" />
      <rect x="8" y="278" width="112" height="10" rx="5" fill={CYAN} opacity="0.36" />
      <path
        d="M168 298 L232 252 H300 L352 298"
        fill="none"
        stroke={NAVY}
        strokeWidth="14"
        strokeLinejoin="round"
      />
      <rect x="214" y="238" width="96" height="34" rx="16" fill={BLUE} />
      <rect x="190" y="230" width="64" height="22" rx="11" fill={NAVY} />
      <rect x="176" y="156" width="30" height="62" rx="12" fill={GOLD} />
      <rect x="196" y="150" width="56" height="92" rx="22" fill={CYAN} />
      <path
        d="M240 178 L328 198"
        fill="none"
        stroke={CYAN}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle cx="224" cy="130" r="26" fill={SLATE} />
      <path d="M198 128 a26 26 0 0 1 52 0 z" fill={GOLD} />
      <rect x="228" y="124" width="30" height="14" rx="7" fill={WHITE} opacity="0.85" />
      <path d="M316 198 h30" fill="none" stroke={NAVY} strokeWidth="10" strokeLinecap="round" />
      <circle cx="352" cy="298" r="42" fill={NAVY} />
      <circle cx="352" cy="298" r="16" fill={WHITE} />
      <circle cx="168" cy="298" r="42" fill={NAVY} />
      <circle cx="168" cy="298" r="16" fill={WHITE} />
      <circle cx="344" cy="212" r="13" fill={GOLD} />
      <circle cx="344" cy="212" r="6" fill={WHITE} />
    </>
  );
}

function HubManagement() {
  return (
    <>
      <Blobs />
      <path
        d="M110 96 L196 68 L286 104 L180 166 L110 96"
        fill="none"
        stroke={LINE}
        strokeWidth="4"
      />
      <path d="M180 166 L300 178 L286 104" fill="none" stroke={LINE} strokeWidth="4" />
      <path d="M286 104 L372 140" fill="none" stroke={CYAN} strokeWidth="5" />
      <path d="M110 96 L180 166" fill="none" stroke={CYAN} strokeWidth="5" />
      <circle cx="110" cy="96" r="12" fill={WHITE} stroke={BLUE} strokeWidth="5" />
      <circle cx="196" cy="68" r="12" fill={WHITE} stroke={BLUE} strokeWidth="5" />
      <circle cx="286" cy="104" r="12" fill={WHITE} stroke={CYAN} strokeWidth="5" />
      <circle cx="180" cy="166" r="12" fill={WHITE} stroke={CYAN} strokeWidth="5" />
      <circle cx="300" cy="178" r="12" fill={WHITE} stroke={BLUE} strokeWidth="5" />
      <circle cx="372" cy="140" r="12" fill={WHITE} stroke={GOLD} strokeWidth="5" />
      <path
        d="M112 250 v-58 a30 30 0 0 1 60 0 v58"
        fill="none"
        stroke={BLUE}
        strokeWidth="8"
        opacity="0.45"
      />
      <rect x="60" y="250" width="360" height="36" rx="18" fill={SLATE} opacity="0.22" />
      <rect x="90" y="286" width="16" height="40" rx="6" fill={SLATE} opacity="0.4" />
      <rect x="374" y="286" width="16" height="40" rx="6" fill={SLATE} opacity="0.4" />
      <rect x="104" y="222" width="30" height="30" rx="5" fill={BLUE} />
      <rect x="164" y="222" width="30" height="30" rx="5" fill={GOLD} />
      <rect x="224" y="222" width="30" height="30" rx="5" fill={CYAN} opacity="0.85" />
      <rect x="284" y="222" width="30" height="30" rx="5" fill={BLUE} opacity="0.75" />
      <rect x="344" y="222" width="30" height="30" rx="5" fill={GOLD} opacity="0.85" />
      <circle cx="110" cy="268" r="8" fill={WHITE} />
      <circle cx="150" cy="268" r="8" fill={WHITE} />
      <circle cx="190" cy="268" r="8" fill={WHITE} />
      <circle cx="230" cy="268" r="8" fill={WHITE} />
      <circle cx="270" cy="268" r="8" fill={WHITE} />
      <circle cx="310" cy="268" r="8" fill={WHITE} />
      <circle cx="350" cy="268" r="8" fill={WHITE} />
      <circle cx="390" cy="268" r="8" fill={WHITE} />
    </>
  );
}

function Warehousing() {
  return (
    <>
      <Blobs />
      <rect x="0" y="296" width="480" height="64" fill={LINE} opacity="0.4" />
      <rect x="72" y="96" width="10" height="200" fill={SLATE} />
      <rect x="214" y="96" width="10" height="200" fill={SLATE} />
      <rect x="270" y="96" width="10" height="200" fill={SLATE} />
      <rect x="412" y="96" width="10" height="200" fill={SLATE} />
      <rect x="72" y="150" width="152" height="12" fill={SLATE} />
      <rect x="72" y="220" width="152" height="12" fill={SLATE} />
      <rect x="72" y="290" width="152" height="12" fill={SLATE} />
      <rect x="270" y="150" width="152" height="12" fill={SLATE} />
      <rect x="270" y="220" width="152" height="12" fill={SLATE} />
      <rect x="270" y="290" width="152" height="12" fill={SLATE} />
      <rect x="92" y="110" width="46" height="38" rx="6" fill={BLUE} />
      <rect x="148" y="110" width="46" height="38" rx="6" fill={GOLD} />
      <rect x="92" y="182" width="52" height="38" rx="6" fill={CYAN} opacity="0.85" />
      <rect x="152" y="182" width="42" height="38" rx="6" fill={BLUE} opacity="0.7" />
      <rect x="92" y="252" width="62" height="38" rx="6" fill={GOLD} opacity="0.85" />
      <rect x="290" y="110" width="48" height="38" rx="6" fill={CYAN} opacity="0.8" />
      <rect x="348" y="110" width="52" height="38" rx="6" fill={BLUE} />
      <rect x="290" y="182" width="60" height="38" rx="6" fill={GOLD} />
      <rect x="360" y="182" width="40" height="38" rx="6" fill={BLUE} opacity="0.7" />
      <rect x="290" y="252" width="46" height="38" rx="6" fill={CYAN} opacity="0.7" />
      <rect x="346" y="252" width="54" height="38" rx="6" fill={GOLD} opacity="0.85" />
    </>
  );
}

function Consultancy() {
  return (
    <>
      <Blobs />
      <rect x="0" y="300" width="480" height="60" fill={LINE} opacity="0.4" />
      <rect
        x="110"
        y="64"
        width="200"
        height="252"
        rx="20"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="180" y="46" width="60" height="34" rx="12" fill={NAVY} />
      <rect x="140" y="100" width="96" height="12" rx="6" fill={NAVY} opacity="0.8" />
      <rect x="140" y="120" width="60" height="8" rx="4" fill={LINE} />
      <rect x="138" y="210" width="26" height="58" fill={BLUE} />
      <rect x="174" y="176" width="26" height="92" fill={CYAN} />
      <rect x="210" y="198" width="26" height="70" fill={GOLD} />
      <rect x="246" y="152" width="26" height="116" fill={BLUE} />
      <rect x="282" y="184" width="22" height="84" fill={CYAN} />
      <rect x="126" y="268" width="190" height="6" rx="3" fill={LINE} />
      <g transform="rotate(-18 320 250)">
        <rect x="286" y="235" width="106" height="30" rx="15" fill={BLUE} />
      </g>
      <g transform="rotate(18 400 250)">
        <rect x="330" y="235" width="106" height="30" rx="15" fill={CYAN} />
      </g>
      <circle cx="362" cy="240" r="24" fill={GOLD} />
      <circle cx="362" cy="240" r="10" fill={WHITE} opacity="0.7" />
    </>
  );
}

function GovernmentTenders() {
  return (
    <>
      <Blobs />
      <polygon points="240,52 88,142 392,142" fill={NAVY} />
      <circle cx="240" cy="110" r="16" fill={GOLD} />
      <rect x="96" y="142" width="288" height="28" fill={BLUE} />
      <rect x="119" y="170" width="42" height="14" rx="4" fill={LINE} />
      <rect x="171" y="170" width="42" height="14" rx="4" fill={LINE} />
      <rect x="223" y="170" width="42" height="14" rx="4" fill={LINE} />
      <rect x="275" y="170" width="42" height="14" rx="4" fill={LINE} />
      <rect x="327" y="170" width="42" height="14" rx="4" fill={LINE} />
      <rect
        x="119"
        y="182"
        width="34"
        height="96"
        rx="4"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect
        x="171"
        y="182"
        width="34"
        height="96"
        rx="4"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect
        x="223"
        y="182"
        width="34"
        height="96"
        rx="4"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect
        x="275"
        y="182"
        width="34"
        height="96"
        rx="4"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect
        x="327"
        y="182"
        width="34"
        height="96"
        rx="4"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="96" y="278" width="288" height="16" rx="4" fill={LINE} />
      <rect
        x="76"
        y="294"
        width="328"
        height="14"
        rx="4"
        fill={PALE}
        stroke={LINE}
        strokeWidth="2"
      />
      <rect x="60" y="308" width="360" height="14" rx="4" fill={LINE} opacity="0.75" />
      <circle cx="96" cy="290" r="8" fill={GOLD} />
      <circle cx="384" cy="290" r="8" fill={GOLD} />
    </>
  );
}

function GenericLogistics() {
  return (
    <>
      <Blobs />
      <rect x="0" y="300" width="480" height="60" fill={LINE} opacity="0.45" />
      <path
        d="M40 268 C 150 268 152 168 250 168 S 360 108 448 108"
        fill="none"
        stroke={BLUE}
        strokeWidth="6"
        strokeDasharray="14 12"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="40" cy="268" r="14" fill={WHITE} stroke={BLUE} strokeWidth="6" />
      <circle cx="250" cy="168" r="14" fill={WHITE} stroke={CYAN} strokeWidth="6" />
      <circle cx="448" cy="108" r="14" fill={WHITE} stroke={BLUE} strokeWidth="6" />
      <g transform="translate(330 150) scale(0.9)">
        <path d="M80 14 h26 l20 22 v16 h-46 z" fill={NAVY} />
        <rect x="0" y="0" width="80" height="52" rx="8" fill={BLUE} />
        <circle cx="24" cy="56" r="12" fill={NAVY} />
        <circle cx="24" cy="56" r="5" fill={WHITE} />
        <circle cx="98" cy="56" r="12" fill={NAVY} />
        <circle cx="98" cy="56" r="5" fill={WHITE} />
      </g>
      <rect x="126" y="150" width="88" height="52" rx="10" fill={GOLD} />
      <rect x="126" y="150" width="88" height="10" rx="5" fill={NAVY} opacity="0.2" />
      <rect
        x="150"
        y="196"
        width="140"
        height="118"
        rx="12"
        fill={WHITE}
        stroke={LINE}
        strokeWidth="3"
      />
      <rect x="208" y="196" width="24" height="118" fill={CYAN} opacity="0.7" />
      <rect x="150" y="236" width="140" height="4" fill={LINE} />
    </>
  );
}

function artwork(slug: string): ReactNode {
  switch (slug) {
    case 'logistics-transport':
      return <LogisticsTransport />;
    case 'aggregator-transport':
      return <AggregatorTransport />;
    case 'food-delivery':
      return <FoodDelivery />;
    case 'medicine-delivery':
      return <MedicineDelivery />;
    case 'ecommerce':
      return <Ecommerce />;
    case 'parcel-booking':
      return <ParcelBooking />;
    case 'manpower':
      return <Manpower />;
    case 'security':
      return <Security />;
    case 'rider-hiring':
      return <RiderHiring />;
    case 'hub-management':
      return <HubManagement />;
    case 'warehousing':
      return <Warehousing />;
    case 'consultancy':
      return <Consultancy />;
    case 'government-tenders':
      return <GovernmentTenders />;
    default:
      return <GenericLogistics />;
  }
}

export function ServiceArt({
  slug,
  className,
  title,
}: {
  slug: ServiceSlug | string;
  className?: string;
  title?: string;
}) {
  return (
    <Frame id={`service-art-${slug}`} title={title} className={className}>
      {artwork(slug)}
    </Frame>
  );
}

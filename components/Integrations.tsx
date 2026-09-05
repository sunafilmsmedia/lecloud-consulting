/**
 * Intégrations — rangées de pastilles qui défilent, avec de vrais logos.
 * Pour ajouter une app : une ligne dans APPS (+ son logo dans LOGOS).
 * Composant serveur : structure statique + animation CSS (aucun JS client).
 */

const S = 26;

export const INTEGRATION_LOGOS: Record<string, React.ReactNode> = {
  gmail: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <path fill="#4285F4" d="M1.636 21.002h3.273v-7.91L0 9.457v9.909c0 .904.732 1.636 1.636 1.636z" />
      <path fill="#34A853" d="M19.091 21.002h3.273c.904 0 1.636-.732 1.636-1.636V9.457l-4.909 3.636z" />
      <path fill="#FBBC04" d="M19.091 5.093v8l4.909-3.636V5.911c0-2.023-2.31-3.178-3.927-1.964z" />
      <path fill="#EA4335" d="M4.909 13.093v-8L12 10.457l7.091-5.364v8L12 18.457z" />
      <path fill="#C5221F" d="M0 5.911v3.546l4.909 3.636v-8L3.927 3.947C2.309 2.733 0 3.888 0 5.911z" />
    </svg>
  ),
  drive: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <path fill="#FFCF63" d="M8.5 3 2 14.5 5.25 20 11.75 8.5z" />
      <path fill="#11A861" d="M8.5 3h7L22 14.5h-7z" />
      <path fill="#3777E3" d="M5.25 20h13.5L22 14.5H8.5z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="#fff" />
      <rect x="3.5" y="3.5" width="17" height="4" rx="2.5" fill="#4285F4" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4285F4" fontFamily="Arial, sans-serif">
        31
      </text>
    </svg>
  ),
  sheets: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect x="3.5" y="2" width="17" height="20" rx="2" fill="#0F9D58" />
      <rect x="6.5" y="7" width="11" height="10" rx="1" fill="#fff" />
      <path d="M6.5 11h11M6.5 14h11M12 7v10" stroke="#0F9D58" strokeWidth="1.2" />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.5 12.06h-2.1V20h-3.2v-7.94H8.5V9.3h1.7V7.9c0-2.02 1.2-3.14 3.05-3.14.88 0 1.64.07 1.86.1v2.16h-1.28c-1 0-1.2.48-1.2 1.18V9.3h2.4z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.35" stopColor="#FA7E1E" />
          <stop offset="0.65" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="7" fill="url(#ig-grad)" />
      <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.2" cy="7.8" r="1" fill="#fff" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M12 5.5A6.5 6.5 0 005.9 15.4L5 19l3.7-.9A6.5 6.5 0 1012 5.5zm3.7 9c-.2.5-1 1-1.5 1.05-.4.05-.9.07-2.6-.55-2.2-.9-3.6-3.1-3.7-3.25-.1-.15-.9-1.2-.9-2.3 0-1.1.55-1.6.75-1.85.2-.25.45-.3.6-.3h.4c.15 0 .3 0 .45.35.15.4.55 1.4.6 1.5.05.1.08.22 0 .35-.35.7-.75.65-.55 1 .55.95 1.1 1.3 1.95 1.75.15.08.25.07.35-.05.1-.12.4-.47.5-.63.1-.15.22-.12.37-.07.15.05 1 .47 1.15.55.15.08.25.12.3.18.03.1.03.5-.17 1z"
      />
    </svg>
  ),
  zoom: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#2D8CFF" />
      <path
        fill="#fff"
        d="M5 9.6C5 8.716 5.716 8 6.6 8h5.3c.884 0 1.6.716 1.6 1.6v4.8c0 .884-.716 1.6-1.6 1.6H6.6C5.716 16 5 15.284 5 14.4zm9.4 1.4 3.2-2.24c.53-.371 1.2.008 1.2.64v5.4c0 .632-.67 1.011-1.2.64L14.4 13z"
      />
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect x="10.2" y="2.5" width="3.6" height="8.2" rx="1.8" fill="#36C5F0" />
      <rect x="10.2" y="13.3" width="3.6" height="8.2" rx="1.8" fill="#2EB67D" />
      <rect x="2.5" y="10.2" width="8.2" height="3.6" rx="1.8" fill="#ECB22E" />
      <rect x="13.3" y="10.2" width="8.2" height="3.6" rx="1.8" fill="#E01E5A" />
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="5" fill="#fff" />
      <path
        d="M8.5 16.5V7.5l7 9V7.5"
        fill="none"
        stroke="#111"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  zapier: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#FF4F00" />
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M12 6v12M6 12h12M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4" />
      </g>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <path fill="#3ECF8E" d="M13 2 4 13.2c-.5.6-.1 1.5.7 1.5H12v6.6c0 .9 1.1 1.3 1.7.6L21 10.8c.5-.6.1-1.5-.7-1.5H13V2z" />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#635BFF" />
      <path
        fill="#fff"
        d="M11.5 9.6c0-.5.4-.7 1-.7.9 0 2 .27 2.9.76V7.1a7 7 0 00-2.9-.6c-2.05 0-3.5 1.07-3.5 2.86 0 2.8 3.85 2.35 3.85 3.56 0 .53-.46.7-1.1.7-.98 0-2.24-.4-3.2-.95v2.4c1.02.44 2.06.62 3.1.62 2.13 0 3.6-1.05 3.6-2.86 0-3.02-3.75-2.48-3.75-3.6z"
      />
    </svg>
  ),
  calendly: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect width="24" height="24" rx="12" fill="#006BFF" />
      <path d="M15.5 9.2a4.5 4.5 0 100 5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
      <path fill="#fff" d="M10 8.5l6 3.5-6 3.5z" />
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 24 24" width={S} height={S} aria-hidden>
      <g fill="none" stroke="#FF7A59" strokeWidth="1.8">
        <circle cx="16.5" cy="8.5" r="2.1" />
        <circle cx="9" cy="14" r="3.1" />
        <path d="M9 10.9V6.4M14.6 9.4l-3.2 2.1" />
      </g>
      <circle cx="9" cy="4.9" r="1.4" fill="#FF7A59" />
    </svg>
  ),
};

type App = { name: string; role: string; logo: string };

export const INTEGRATION_APPS: App[] = [
  { name: "Gmail", role: "Courriel", logo: "gmail" },
  { name: "Google Drive", role: "Documents", logo: "drive" },
  { name: "Google Agenda", role: "Calendrier", logo: "calendar" },
  { name: "Google Sheets", role: "Tableurs", logo: "sheets" },
  { name: "Meta Ads", role: "Publicité", logo: "meta" },
  { name: "Instagram", role: "Réseaux sociaux", logo: "instagram" },
  { name: "WhatsApp", role: "Messagerie", logo: "whatsapp" },
  { name: "Zoom", role: "Visio", logo: "zoom" },
  { name: "Slack", role: "Messagerie", logo: "slack" },
  { name: "Notion", role: "Connaissances", logo: "notion" },
  { name: "Zapier", role: "Automatisation", logo: "zapier" },
  { name: "Supabase", role: "Base de données", logo: "supabase" },
  { name: "Stripe", role: "Paiements", logo: "stripe" },
  { name: "Calendly", role: "Rendez-vous", logo: "calendly" },
  { name: "YouTube", role: "Vidéo", logo: "youtube" },
  { name: "HubSpot", role: "CRM", logo: "hubspot" },
];

function Pill({ app, dup }: { app: App; dup: boolean }) {
  return (
    <span className="lc-pill" aria-hidden={dup}>
      <span className="lc-ico">{INTEGRATION_LOGOS[app.logo]}</span>
      <span className="flex flex-col">
        <span className="lc-name">{app.name}</span>
        <span className="lc-role">{app.role}</span>
      </span>
    </span>
  );
}

// Répartition en 4 rangées
const ROWS: App[][] = [
  INTEGRATION_APPS.slice(0, 4),
  INTEGRATION_APPS.slice(4, 8),
  INTEGRATION_APPS.slice(8, 12),
  INTEGRATION_APPS.slice(12, 16),
];
const DURATIONS = ["40s", "50s", "44s", "54s"];
const OFFSETS = ["-40px", "-150px", "-90px", "-210px"];

export default function Integrations() {
  return (
    <div className="lc-marquee py-2">
      {ROWS.map((row, r) => {
        const doubled = row.concat(row, row); // trois copies pour bien remplir
        return (
          <div
            key={r}
            data-drift
            className={`lc-row ${r % 2 === 1 ? "back" : ""}`}
            style={{ animationDuration: DURATIONS[r], marginLeft: OFFSETS[r] }}
          >
            {doubled.map((app, i) => (
              <Pill key={`${r}-${i}`} app={app} dup={i >= row.length} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

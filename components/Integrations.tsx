/**
 * Intégrations — rangées de pastilles qui défilent (recette Le Cloud v2).
 * Pour ajouter une app : une ligne dans APPS, rien à toucher au CSS.
 * Composant serveur : structure statique + animation CSS (aucun JS client).
 */

type App = { name: string; role: string };

const APPS: App[] = [
  { name: "GoHighLevel", role: "CRM" },
  { name: "HubSpot", role: "CRM" },
  { name: "Salesforce", role: "CRM" },
  { name: "Meta Ads", role: "Publicité" },
  { name: "Google Ads", role: "Publicité" },
  { name: "Gmail", role: "Courriel" },
  { name: "Outlook", role: "Courriel" },
  { name: "Google Agenda", role: "Calendrier" },
  { name: "Calendly", role: "Rendez-vous" },
  { name: "Google Drive", role: "Documents" },
  { name: "Notion", role: "Connaissances" },
  { name: "Google Sheets", role: "Tableurs" },
  { name: "Slack", role: "Messagerie" },
  { name: "WhatsApp", role: "Messagerie" },
  { name: "Twilio", role: "SMS" },
  { name: "ClickUp", role: "Gestion de projet" },
  { name: "Zapier", role: "Automatisation" },
  { name: "Make", role: "Automatisation" },
  { name: "Supabase", role: "Base de données" },
  { name: "Airtable", role: "Base de données" },
  { name: "Stripe", role: "Paiements" },
  { name: "QuickBooks", role: "Comptabilité" },
  { name: "Xero", role: "Comptabilité" },
  { name: "Mailchimp", role: "Infolettre" },
  { name: "Shopify", role: "E-commerce" },
  { name: "Microsoft Clarity", role: "Analytique" },
  { name: "Google Analytics", role: "Analytique" },
  { name: "Facebook", role: "Réseaux sociaux" },
];

// Quatre teintes de bleu/gris en rotation (pas de logo de marque)
const TILES = [
  { bg: "rgba(34,204,255,0.14)", fg: "#7fe0ff" },
  { bg: "rgba(59,130,246,0.16)", fg: "#9fbcff" },
  { bg: "rgba(148,163,184,0.14)", fg: "#cfd8e6" },
  { bg: "rgba(0,148,230,0.18)", fg: "#59c9ff" },
];

function Pill({ app, colorIndex, dup }: { app: App; colorIndex: number; dup: boolean }) {
  const t = TILES[colorIndex % TILES.length];
  return (
    <span className="lc-pill" aria-hidden={dup}>
      <span className="lc-ico" style={{ background: t.bg, color: t.fg }}>
        {app.name.charAt(0)}
      </span>
      <span className="flex flex-col">
        <span className="lc-name">{app.name}</span>
        <span className="lc-role">{app.role}</span>
      </span>
    </span>
  );
}

// Répartition en 4 rangées
const ROWS: App[][] = [
  APPS.slice(0, 7),
  APPS.slice(7, 14),
  APPS.slice(14, 21),
  APPS.slice(21),
];
const DURATIONS = ["44s", "52s", "60s", "68s"];
const OFFSETS = ["-40px", "-150px", "-90px", "-210px"];

export default function Integrations() {
  return (
    <div className="lc-marquee py-2">
      {ROWS.map((row, r) => {
        const doubled = row.concat(row); // deux copies identiques
        return (
          <div
            key={r}
            data-drift
            className={`lc-row ${r % 2 === 1 ? "back" : ""}`}
            style={{ animationDuration: DURATIONS[r], marginLeft: OFFSETS[r] }}
          >
            {doubled.map((app, i) => (
              <Pill
                key={`${r}-${i}`}
                app={app}
                colorIndex={r + i}
                dup={i >= row.length}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

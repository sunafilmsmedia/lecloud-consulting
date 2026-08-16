import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface IncomingBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  sector?: string;
  teamSize?: string;
  tasks?: string;
  interest?: string;
  consent?: boolean;
  // Contexte optionnel envoyé par le calculateur ROI
  roi?: {
    employees?: number;
    hoursPerWeek?: number;
    hourlyRate?: number;
    annualCost?: number;
  };
}

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export async function POST(req: Request) {
  let body: IncomingBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, email, phone, sector, teamSize, tasks, interest, consent, roi } = body;

  if (!name || !email || !company || !consent) {
    return NextResponse.json(
      { stored: false, error: "Champs requis manquants" },
      { status: 400 }
    );
  }

  const { firstName, lastName } = splitName(name);

  // Payload aplati pour mapping CRM direct + données brutes en complément.
  const payload = {
    source: "le-cloud",
    receivedAt: new Date().toISOString(),

    // Contact
    firstName,
    lastName,
    fullName: name,
    company,
    email,
    phone: phone ?? "",

    // Qualification
    sector: sector ?? "",
    teamSize: teamSize ?? "",
    tasks: tasks ?? "",
    interest: interest ?? "",

    // ROI estimé (si le prospect a utilisé le calculateur)
    roiEmployees: roi?.employees ?? null,
    roiHoursPerWeek: roi?.hoursPerWeek ?? null,
    roiHourlyRate: roi?.hourlyRate ?? null,
    roiAnnualCost: roi?.annualCost ?? null,

    // Données brutes
    lead: { name, company, email, phone },
    roi: roi ?? null,
  };

  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  const webhookSecret = process.env.CRM_WEBHOOK_SECRET;

  if (webhookUrl) {
    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (webhookSecret) headers["X-Webhook-Secret"] = webhookSecret;
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[lead] Webhook returned", res.status);
      }
    } catch (err) {
      console.error("[lead] Webhook failed", err);
    }
  } else {
    console.log("[lead] Stored (no webhook configured):", JSON.stringify(payload));
  }

  return NextResponse.json({ stored: true });
}

import { createHmac } from "node:crypto";

export type DemoSubmission = { eventId: string; submittedAt: string; name: string; email: string; phone: string; centerName: string; city: string; branchCount: string | number };
// Retries use the same event identity. Never log form contents or the shared secret.
export async function sendToMedusa(input: DemoSubmission) {
  const url = process.env.MEDUSA_DEMO_WEBHOOK_URL;
  const secret = process.env.ODIMAX_WEBHOOK_SECRET;
  if (!url || !secret) { console.error("Medusa demo bağlantısı yapılandırılmadı."); return false; }
  const endpoint = new URL(url);
  if (endpoint.protocol !== "https:" || endpoint.pathname !== "/api/integrations/odimax") throw new Error("Geçersiz Medusa adresi.");
  const body = JSON.stringify(input);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const timestamp = String(Date.now());
      const signature = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", "x-medusa-timestamp": timestamp, "x-medusa-signature": signature }, body, signal: AbortSignal.timeout(5000), redirect: "error" });
      if (response.ok) return true;
      if (response.status < 500 && response.status !== 429) break;
    } catch { /* E-mail flow remains independent. */ }
    if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
  }
  console.error("Medusa demo kaydı iletilemedi; e-posta üzerinden kontrol gerekli.");
  return false;
}

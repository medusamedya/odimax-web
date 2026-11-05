import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { sendToMedusa } from '../src/lib/medusa.ts';

const input = { eventId: '10000000-0000-4000-8000-000000000001', submittedAt: '2026-11-05T09:00:00Z', name: 'Test', email: 'test@example.test', phone: '05550000000', centerName: 'Test', city: 'İzmir', branchCount: '0' };
test('signed delivery retries with the same event and stops on success', async () => {
  process.env.MEDUSA_DEMO_WEBHOOK_URL='https://medusa-operasyon.vercel.app/api/integrations/odimax';
  process.env.ODIMAX_WEBHOOK_SECRET='test-only';
  const original=globalThis.fetch;
  let calls=0;
  globalThis.fetch=async (_url, options) => {
    calls++;
    assert.equal(options.body,JSON.stringify(input));
    assert.equal(options.headers['x-medusa-signature'],createHmac('sha256','test-only').update(`${options.headers['x-medusa-timestamp']}.${options.body}`).digest('hex'));
    return new Response('{}',{status:calls===1?503:201});
  };
  try { assert.equal(await sendToMedusa(input),true); assert.equal(calls,2); }
  finally { globalThis.fetch=original; }
});
test('failed delivery returns false for the independent e-mail flow', async () => {
  const original=globalThis.fetch, log=console.error;
  let calls=0;
  globalThis.fetch=async()=>{calls++;throw new Error('Simulated connection failure');};
  console.error=()=>{};
  try { assert.equal(await sendToMedusa(input),false); assert.equal(calls,3); }
  finally { globalThis.fetch=original; console.error=log; }
});

// C:\Users\angry\Conflexio\actions\stream.actions.ts

/**
 * A simple function that the Video SDK will call whenever it needs
 * a fresh JWT.  We POST to your server route, pull out the token,
 * and return it.
 */
export async function tokenProvider(): Promise<string> {
  const res = await fetch('/api/token', { method: 'POST' });

  if (!res.ok) {
    // you can inspect res.status/res.statusText here
    throw new Error(`Failed to fetch Stream token: ${res.statusText}`);
  }

  const { token } = await res.json() as { token: string };

  if (!token) {
    throw new Error('Stream token missing in response');
  }

  return token;
}

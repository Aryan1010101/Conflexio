// C:\Users\angry\Conflexio\actions\stream.actions.ts

/**
 * A simple function that the Video SDK will call whenever it needs
 * a fresh JWT.  We POST to your server route, pull out the token,
 * and return it.
 */
export async function tokenProvider(): Promise<string> {
  try {
    const res = await fetch('/api/token', { method: 'POST' });

    if (!res.ok) {
      console.error('Failed to fetch Stream token. Status:', res.status, 'StatusText:', res.statusText);
      try {
        const errorBody = await res.text();
        console.error('Error body:', errorBody);
      } catch (textError) {
        console.error('Failed to parse error body as text:', textError);
      }
      throw new Error(`Failed to fetch Stream token: ${res.statusText}`);
    }

    const { token } = await res.json() as { token: string };

    if (!token) {
      console.error('Stream token missing in response JSON.');
      throw new Error('Stream token missing in response');
    }

    return token;
  } catch (error) {
    console.error('Unexpected error in tokenProvider:', error);
    // Re-throw the error to ensure the caller knows something went wrong.
    // Depending on the application's needs, this might be handled differently
    // (e.g., returning a specific error object or a default/fallback token).
    throw error;
  }
}
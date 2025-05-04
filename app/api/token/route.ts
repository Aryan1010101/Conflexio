// app/api/token/route.ts
import { NextResponse }  from 'next/server';
import { StreamClient }  from '@stream-io/node-sdk';  // use the node-sdk you already have
import { auth }          from '@clerk/nextjs';

const apiKey    = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const apiSecret = process.env.STREAM_SECRET_KEY!;

// Note: this is Chat+Video’s universal StreamClient
const serverClient = new StreamClient(apiKey, apiSecret);

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  // createToken is the same under the hood
  const token = serverClient.createToken(userId);
  return NextResponse.json({ token });
}

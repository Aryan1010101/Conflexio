// C:\Users\angry\Conflexio\providers\StreamClientProvider.tsx
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser }                        from '@clerk/nextjs';
import Loader                              from '@/components/Loader';
import { tokenProvider }                   from '@/actions/stream.actions';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

interface Props {
  children: ReactNode;
}

export default function StreamClientProvider({ children }: Props) {
  const { user, isLoaded } = useUser();
  const [client, setClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error('Missing Stream API key');

    const videoClient = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id:    user.id,
        name:  user.username || user.id,
        image: user.imageUrl || undefined,
      },
      // instead of HttpTokenProvider, we just give it our async fn
      tokenProvider,
    });

    setClient(videoClient);
    return () => void videoClient.disconnectUser();
  }, [isLoaded, user]);

  if (!client) return <Loader />;
  return <StreamVideo client={client}>{children}</StreamVideo>;
}

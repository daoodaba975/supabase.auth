import { useEffect, useState } from 'react';

import Head from 'next/head'

import { supabase } from '../lib/initSupabase';
import Login from '../components/Login';
import Profile from '../components/Profile';

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return  <main>
            <Head>
              <title>Supabase Auth</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            {!session ? <Login /> : <Profile session={session} />}
          </main>;

}
import { supabase } from '../lib/initSupabase';

export default function Profile({ session }) {
  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p>Hello {session.user.email} !</p>
      <button
        className='mt-4 p-2 pl-5 pr-5 bg-[#050] text-gray-100 text-lg rounded-lg'
        onClick={() => supabase.auth.signOut()}
      >
        Deconnexion
      </button>
    </div>
  );
}
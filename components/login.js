import { useState } from 'react';
import { supabase } from '../lib/initSupabase';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Vérifie ton adresse email pour te connecter!');
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <h1 className='text-center text-3xl font-bold mb-2'>Authentification avec Supabase</h1>
      <p className='mb-4 text-center'>Connectez-vous via le lien magique avec votre email</p>
      <input
        className='mb-4 border-2 border-gray-500 rounded-xl p-4 w-full'
        type='email'
        placeholder='ton@email.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        className='w-full mt-4 p-2 pl-5 pr-5 bg-[#050] text-gray-100 text-lg rounded-lg'
      >
        <span className="font-bold">Envoyer</span>
      </button>
    </div>
  );
}
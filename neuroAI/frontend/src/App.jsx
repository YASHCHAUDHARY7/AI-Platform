import React from 'react'
import { auth, googleProvider } from '../utils/firebase'
import { signInWithPopup } from 'firebase/auth'

const App = () => {

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider)
      console.log(data)
    } catch (error) {
      console.error('Google login error:', error)
    }
  }

  return (
    <div className='min-h-screen bg-[#0d0f14] text-white flex items-center justify-center p-4'>
      <div className='w-full max-w-sm bg-[#13151c] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl text-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold tracking-tight text-white'>Welcome to NeuroAI</h1>
          <p className='text-sm text-slate-400'>Please login to continue</p>
        </div>
        <button
          onClick={googleLogin}
          className='w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all duration-150 cursor-pointer shadow-md'
        >
          Continue with Google
        </button>
      </div>
    </div>
  )
}

export default App

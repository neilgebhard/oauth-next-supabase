import useSupabase from '../lib/useSupabase'

const Auth = () => {
  const { supabase } = useSupabase()

  const handleClick = () => {
    supabase.auth.signIn({ provider: 'github' })
  }

  return (
    <>
      <h1>Sign up</h1>
      <button onClick={handleClick}>Sign in with GitHub</button>
    </>
  )
}

export default Auth

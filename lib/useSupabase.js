import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
)

const useSupabase = () => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(supabase.auth.session())

  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session)
  })

  useEffect(() => {
    const getUser = async () => {
      if (session?.user.id) {
        const { data: currentUser } = await supabase
          .from('user')
          .select('*')
          .eq('id', session.user.id)
        setUser(currentUser)
      }
    }
    getUser()
  }, [session])

  return { user, session, supabase }
}

export default useSupabase

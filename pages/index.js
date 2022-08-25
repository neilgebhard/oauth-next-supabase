import useSupabase from '../lib/useSupabase'

export default function Home() {
  const { session, user } = useSupabase()

  return (
    <>
      {session ? (
        <code>{JSON.stringify(user, null, 2)}</code>
      ) : (
        <p>User is not logged in</p>
      )}
    </>
  )
}

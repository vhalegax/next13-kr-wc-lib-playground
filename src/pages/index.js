import { useState, useEffect, useRef } from 'react'

import { KrNavbar } from 'kr-wc-library'

export default function Home() {
  const krNavbarRef = useRef(null)
  const [notification, setNotification] = useState(0)

  useEffect(() => {
    if (!customElements.get('kr-navbar')) {
      customElements.define('kr-navbar', KrNavbar)
    }
  }, [])

  function increment() {
    setNotification(notification + 1)
  }

  function decrement() {
    if (notification <= 0) return
    setNotification(notification - 1)
  }

  function showNotif() {
    if (krNavbarRef.current) {
      console.log(krNavbarRef)
      krNavbarRef.current._def.methods.showNotification()
    }
  }

  return (
    <>
      <kr-navbar ref={krNavbarRef} notification={notification}></kr-navbar>

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-black via-emerald-950 to-green-950 p-24">
        <div>
          <div className="mb-4 text-2xl">
            You can see total notification on
            <span className="ml-2 text-red-500">navbar.</span>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="rounded-full  bg-blue-500 bg-transparent p-3 font-medium hover:bg-blue-400"
              onClick={showNotif}
            >
              Show
            </button>

            <button
              type="button"
              className="mx-3 rounded-full bg-green-500 p-3 font-medium hover:bg-green-400"
              onClick={increment}
            >
              Notification ++
            </button>

            <button
              type="button"
              className="rounded-full border-2 border-solid border-red-500 bg-transparent p-3 font-medium hover:bg-red-500"
              onClick={decrement}
            >
              Notification --
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

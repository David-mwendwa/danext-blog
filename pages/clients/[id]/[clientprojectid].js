import React from 'react'
import { useRouter } from 'next/router'

function SelectedClientProjectPage() {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h1>The Project Page for a specific project for {router.query.id}</h1>
    </div>
  )
}

export default SelectedClientProjectPage

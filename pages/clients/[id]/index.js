import { useRouter } from 'next/router'
import React from 'react'

function ClientProjectsPage() {
  const router = useRouter()

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {id: 'davi', clientprojectid: 'projecta'}
    })
  }
  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Go to Project A</button>
    </div>
  )
}

export default ClientProjectsPage

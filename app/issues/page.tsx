
import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const issuesPage = () => {
    
  return (
    <div><Button><Link href='/issues/new'>Issues page</Link> </Button></div>
  )
}

export default issuesPage
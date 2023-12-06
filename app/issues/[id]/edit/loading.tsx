import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Heading, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import delay from 'delay'

const loadingForDetailsPage = () => {

  return (
    <div className='max-w-xl'>
    <Skeleton/>
    <Skeleton height='20rem'/>
  
</div>
  )
}

export default loadingForDetailsPage
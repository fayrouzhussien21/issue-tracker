import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Heading, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const loadingForDetailsPage = () => {
  return (
    <div className='max-w-xl'>
    <Skeleton/>
    <div className='flex space-x-3 my-2'>
    <Skeleton width='5rem'/>
    <Skeleton/>
    </div>
    <Card mt='4' className='prose' >
    <Skeleton count={3}/>
    </Card>
</div>
  )
}

export default loadingForDetailsPage
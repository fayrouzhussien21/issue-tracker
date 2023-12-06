import { Heading, Card } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import IssueStatusBadge from '../components/IssueStatusBadge'
import { issue } from '@prisma/client'
import { Text } from '@radix-ui/themes'

const IssueDetails = ({issue}:{issue:issue}) => {
  return (
    <>
    <Heading>{issue.title}</Heading>
    <div className='flex space-x-3 my-2'>
    <IssueStatusBadge status={issue.status}></IssueStatusBadge>
    <Text>{issue.createdAt.toDateString()}</Text>
    </div>
    <Card mt='4' className='prose' >
    <ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
    </>
  )
}

export default IssueDetails
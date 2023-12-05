import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { issue } from '@prisma/client'
import { string } from 'zod'
import { Card, Heading, Text } from '@radix-ui/themes'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
interface Props{
    params:{id:string}
}
const page = async({params}:Props) => {

    const issueId=parseInt(params.id)
   const issue= await prisma?.issue.findUnique(
      {  where:{
            id:issueId
        }}
        )
        if(!issue)
        notFound()
  return (
    <div>
        <Heading>{issue.title}</Heading>
        <div className='flex space-x-3 my-2'>
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
        <Text>{issue.createdAt.toDateString()}</Text>
        </div>
        <Card mt='4'>

        <p>{issue.description}</p>
        </Card>
    </div>
  )
}

export default page
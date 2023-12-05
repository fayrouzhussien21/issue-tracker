import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { issue } from '@prisma/client'
import { string } from 'zod'
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
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
    </div>
  )
}

export default page
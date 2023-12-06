import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import ReactMarkdown from 'react-markdown'
import delay from 'delay'
import { EditissueButton } from '../EditissueButton'
import IssueDetails from '../IssueDetails'
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
       await delay(3000)
  return (
    <Grid columns={{initial:'1',md:'2'}} gap="5">
        <Box>
      <IssueDetails issue={issue}/>
        </Box>
        <Box>
            <EditissueButton issue={issue}/>
        </Box>
    </Grid>
  )
}

export default page
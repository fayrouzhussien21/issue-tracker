import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import ReactMarkdown from 'react-markdown'
import delay from 'delay'
import { EditissueButton } from '../EditissueButton'
import IssueDetails from '../IssueDetails'
import DeleteIssueButton from '../DeleteIssueButton'
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
    <Grid columns={{initial:'1',sm:'5'}} gap="5" >
        <Box className='lg:col-span-4'>
      <IssueDetails issue={issue}/>
        </Box>
        <Box className='col-span-1'>
            <Flex direction='column' gap="2">
            <EditissueButton issue={issue}/>
            <DeleteIssueButton issue={issue}/>
            </Flex>
        </Box>
    </Grid>
  )
}

export default page
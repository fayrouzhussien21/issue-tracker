
import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import IssueStatusBadge from '../components/IssueStatusBadge'
import prisma from '@/prisma/client'
import delay from 'delay'

const issuesPage = async() => {
    const issues=await prisma?.issue.findMany()
    await delay(2000)
  return (
    <div>
      <div className='mb-5'>
      <Button><Link href='/issues/new'>Issues page</Link> </Button>
      </div>
      <Table.Root variant='surface'>
          <Table.Header>
        <Table.Row>
            <Table.ColumnHeaderCell>
              issue
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>
              Statues
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>
              Created
            </Table.ColumnHeaderCell>
        </Table.Row>
          </Table.Header>
          <Table.Body>
            { issues?.map((issue)=>(
              <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`issues/${issue.id}`}>{issue.title}</Link>
                <div className='md:hidden block'><IssueStatusBadge status={issue.status}></IssueStatusBadge> </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}></IssueStatusBadge>  </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            )
            
            )}
          </Table.Body>

      </Table.Root>
    </div>
  )
}

export default issuesPage
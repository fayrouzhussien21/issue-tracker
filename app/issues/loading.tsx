import { Button, Link, Table } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loadingIssuesPage = () => {
    const issues=[1,8,9,0,6]
  return (
    <>
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
        <Table.Row key={issue}>
        <Table.Cell>
          <Skeleton/>
        </Table.Cell>
        <Table.Cell className='hidden md:table-cell'><Skeleton/> </Table.Cell>
        <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
        </Table.Row>
      )
      
      )}
    </Table.Body>

</Table.Root>
</>
  )
}

export default loadingIssuesPage
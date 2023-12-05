import { Status } from '@prisma/client'
import { Record } from '@prisma/client/runtime/library'
import { Badge } from '@radix-ui/themes'
import React from 'react'
const statusMap:Record<string,{label:string,color:'red'|'violet'|'green'}>={
    OPEN:{label:'Open',color:'red'},
    CLOSED:{label:'Closed',color:'green'},
    IN_PROGRESS:{
        label:'Closed', color:'violet'
    }
}
 const IssueStatusBadge = ({status}:{status:Status}) => {
  
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge;
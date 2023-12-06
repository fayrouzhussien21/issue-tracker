import { schema } from "@/app/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
interface Props{
    params:{id:string}
}
export const PATCH=async (request:NextRequest, {params}:Props)=>{
const body=await request.json()
const validation= schema.safeParse(body)
if(!validation.success)
return NextResponse.json(validation.error.format(),{status:400})

const issue=await prisma.issue.findUnique({
    where:{id:parseInt(params.id)}
})

if(!issue)
return NextResponse.json({error:'Invalid issue'}, {status:404})


const updatedIssue=await prisma.issue.update({
    where:{
        id:issue.id
    },
    data:{
        title:body.title,
        description:body.describtion
    }
})

return NextResponse.json(updatedIssue)
}
import { NextRequest, NextResponse } from "next/server";
import { string } from "zod";
import prisma from "@/prisma/client";
import { schema } from "../../validationSchema";
export const  POST=async(request:NextRequest)=> {
    const body= await request.json()
const validation=schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})

    const newIssue=await prisma.issue.create({
        data:{title:body.title, description:body.describtion}
    })


return NextResponse.json(newIssue, {status:201})
}
import { NextRequest, NextResponse } from "next/server";
import { string, z } from "zod";

const schema=z.object({
title:string().min(1).max(255),
describtion:string().min(1)
})
const  POST=async(request:NextRequest)=> {
    const body= await request.json()
const validation=schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})

    
}
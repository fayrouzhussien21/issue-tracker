"use client"
import { Button, Callout, TextField, ThemePanel } from '@radix-ui/themes'
import { Theme } from '@radix-ui/themes'
import { useForm , Controller} from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from 'axios'
import { register } from 'module'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
  interface IssueTable{
    title:String,
    describtion:string
  }
const page = () => {
  const router=useRouter()
  const [errorMessage,seterrorMessage]=useState('')
  const {register ,control ,handleSubmit}=useForm<IssueTable>()
  return (
  <Theme appearance="light" accentColor="crimson" radius="none" scaling="110%">
    <div className="max-w-xl">
     {errorMessage&&<Callout.Root>
      <Callout.Text>
        {errorMessage}
      </Callout.Text>
     </Callout.Root>}
    <form className=" space-y-5 mt-5 " onSubmit={handleSubmit(async (data)=>{
      try {
        await axios.post('/api/issues',data)
        router.push('/issues')
        
      } catch (error) {
        seterrorMessage('unexpected error occured ')
      }
    })}>
  
    <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
    </TextField.Root>
    <Controller name='describtion' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field}/>}/>
    <Button>Submit New Issue</Button>
    </form> 
      </div>
    </Theme>
  )
}

export default page
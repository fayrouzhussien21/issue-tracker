"use client"
import { Button, TextField, ThemePanel } from '@radix-ui/themes'
import { Theme } from '@radix-ui/themes'
import { useForm , Controller} from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import axios from 'axios'
import { register } from 'module'
import { useRouter } from 'next/navigation'
  interface IssueTable{
    title:String,
    describtion:string
  }
const page = () => {
  const router=useRouter()
  const {register ,control ,handleSubmit}=useForm<IssueTable>()
  return (
  <Theme appearance="light" accentColor="crimson" radius="none" scaling="110%">
    <form className="max-w-xl space-y-5  " onSubmit={handleSubmit(async (data)=>{
      
      await axios.post('/api/issues',data)
      router.push('/issues')
    })}>
  
    <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
    </TextField.Root>
    <Controller name='describtion' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field}/>}/>
    <Button>Submit New Issue</Button>
    </form> 
    </Theme>
  )
}

export default page
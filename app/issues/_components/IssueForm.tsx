"use client"
import { Button, Callout, Text, TextField, ThemePanel } from '@radix-ui/themes'
import { Theme } from '@radix-ui/themes'
import { useForm , Controller} from 'react-hook-form'
import "easymde/dist/easymde.min.css"
import axios from 'axios'
import { register } from 'module'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '@/app/validationSchema'
import ErrorMessage from '@/app/components/ErrorMessage'
import { Spinner } from '@/app/components/Spinner'
import delay from 'delay'
import dynamic from 'next/dynamic'
import { issue } from '@prisma/client'
  type IssueTable= Zod.infer<typeof schema>
  interface Props{
    issue?:issue
  }
const IssueForm = async({issue}:Props) => {
  const SimpleMDE=dynamic(
  ()=>import("react-simplemde-editor"),
  {ssr:false}
  )
  const [submiting,setSubmiting]=useState(false)
  const router=useRouter()
  const [errorMessage,seterrorMessage]=useState('')
  const {register ,control ,handleSubmit, formState:{errors}}=useForm<IssueTable>(
    {
      resolver:zodResolver(schema)
    }
  )
  const onsubmit=handleSubmit(async (data)=>{
    try {
      setSubmiting(true)
      if(!issue){
      await axios.post('/api/issues',data)
    }
    else{
        await axios.patch(`/api/issues/${issue.id}`,data)
    }
       router.push('/issues')
       router.refresh()
    } catch (error) {
      setSubmiting(false)
      seterrorMessage('unexpected error occured ')
    }
  })
  await delay(3000)
  return (
  <Theme appearance="light" accentColor="crimson" radius="none" scaling="110%">
    <div className="max-w-xl">
     {errorMessage&&<Callout.Root>
      <Callout.Text>
        {errorMessage}
      </Callout.Text>
     </Callout.Root>}
    <form className=" space-y-5 mt-5 " onSubmit={onsubmit}>
  
    <TextField.Root>
        <TextField.Input defaultValue={issue?.title} placeholder='Title' {...register('title')}/>
    </TextField.Root>
    <Text color='red' as='p'>{errors.title?.message}</Text>
    <Controller defaultValue={issue?.description} name='describtion' control={control} render={({field})=><SimpleMDE placeholder='Description' {...field}/>}/>
    <ErrorMessage >{errors.describtion?.message}</ErrorMessage>
    <Button disabled={submiting}>{issue?'Update':'Submit'} {submiting&&<Spinner/>}</Button>
    </form> 
      </div>
    </Theme>
  )
}

export default IssueForm
import { useState, } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

   function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
    } = useForm()

    const [isdisabled,setisdisabled]= useState(false)

     const onSubmit = (data) => {
      console.log(data)
      setisdisabled(true)      
      setTimeout(()=>{
       setisdisabled(false)
      },4000)
    
    }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="adi" {...register("yourname",{required:{value:true,message:"Naam daal"},
          minLength:{value:3,message:"Kum se kum 3 letter"},
          maxLength:{value:10,message:"Jada se jada 10"}})}/>
          {errors.yourname && <div>{errors.yourname.message}</div>}
          <br />
       <input type="text" placeholder='Password'  {...register("Password",{required:{value:true,message:"pasword daal"},
          minLength:{value:3,message:"Kum se kum 3 letter"},
          maxLength:{value:10,message:"Jada se jada 10"}})}/>
          {errors.Password && <div>{errors.Password.message}</div>}
       <input  type="submit" disabled={isSubmitting||isdisabled}/>
        </form>
       
      </div>
      
    </>
  )
}

export default App

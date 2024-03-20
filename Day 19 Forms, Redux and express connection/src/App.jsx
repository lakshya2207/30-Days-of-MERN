import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
    let res = await r.text()
    console.log(data, res)
    if (data.username === "Purtikwa") {
      setError("blocked", { message: 'You are Blocked' })
    }
  }

  return (
    <>
      {isSubmitting && <div>Loading..</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} >
          Username :
          <input {...register("username", { required: true, minLength: { value: 8, message: "Too short" } })} type="text" placeholder='username' />
          {errors.username && <span>{errors.username.message}</span>}
          <br />
          Password :
          <input {...register("password")} type="password" placeholder='placeholder' />
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {errors.blocked && <span>{errors.blocked.message}</span>}
        </form>
      </div>
    </>
  )
}

export default App

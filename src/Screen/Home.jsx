/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Card from '../Components/Card'
import Loader from '../Components/Loader'
import Axios from 'axios'
const API1 = "https://mybackendserver1.onrender.com/api/v4/all/tweets"
const API2 = "https://mybackendserver1.onrender.com/api/v4/create/tweet"


const Home = () => {
const[popup,Setpopup] = useState(false)
const[Loading,SetLoading] = useState(false)
const [tweet,Settweet] = useState('')
const[all_tweets, Setall_tweets] = useState([])

const navigate = useNavigate()

const log_out=()=>{
  localStorage.removeItem('tweeterauth')
  localStorage.removeItem('user')

  alert('logged out')
  navigate('/login')
  
}

const fetch_all_tweets=async()=>{
  SetLoading(true)
await Axios.get(API1)
.then(res=>{
  if(res.data.success===true)

{
  console.log(res)
  Setall_tweets(res.data.all_tweets)
}})
.catch(err=>console.log(err))

SetLoading(false)



}

const Verify=()=>{
if(localStorage.tweeterauth){
fetch_all_tweets()
}
else{
  navigate('/login')
}


} 


const submit_tweet=async(e)=>{
  e.preventDefault();
  SetLoading(true)
  const user = localStorage.getItem('user')
  console.log(user,tweet)
  await Axios.post(API2,{
    TEXT:tweet,
    user:user
  }).then(res=>{
    if(res.data.success===true){
      alert('created tweet ')
      Setpopup(false)
      fetch_all_tweets()
    }
  })
  .catch(err=>console.log(err))




  SetLoading(false)


}


useEffect(()=>{
  Verify()
},[])

  return (
  <>
{Loading ? <Loader/>:
<section className='w-full overflow-y-scroll flex-col h-screen bg-gray-200 flex items-center'>
  
{ popup ?<div className="flex z-50 fixed w-full h-full ">

<div className="flex h-full w-full justify-center items-center  relative ">
<div onClick={()=>Setpopup(false)} className="flex w-full absolute h-full bg-black opacity-50 z-20"></div>

<div className='w-1/2 h-2/3 flex z-30 bg-white rounded-md'>
  
<form onSubmit={submit_tweet} className='w-full h-full'>
   <div class="w-full h-full  mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 w-full h-3/4 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea onChange={(e)=>Settweet(e.target.value)} id="comment" rows="4" class="w-full h-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a tweet..." required></textarea>
       </div>
       <div class="flex w-full h-1/4 items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post tweet
           </button>
   
       </div>
   </div>
</form>
</div>





</div>

</div>:''}


<div onClick={()=>Setpopup(true)} className='w-16 cursor-pointer flex justify-center items-center h-16 bg-lime-500 fixed bottom-4 right-10 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


</div>


<div onClick={log_out} className='w-16 cursor-pointer justify-center items-center h-16 flex fixed bottom-24 right-10 rounded-full bg-red-500'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

</div>

{all_tweets && all_tweets.map((e)=> <Card key={e._id} title={e.TEXT} user={e.user} time={e.time}/>)
}

</section>

}


    </>     
  )
}

export default Home
/* eslint-disable react/prop-types */


const Card = ({title,user,time}) => {
  return (
<div className="w-1/3 phone:w-4/5 my-5  h-52 items-center bg-white rounded-lg shadow-xl">
 {/* upper div   */}


<div className="w-full gap-3 pl-10  flex  items-center h-24">
 {/* avatar   */}


 <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
</div>


<div className="flex flex-col w-1/2 ml-5">
    <span className="text-gray-700 phone:text-[14px] font-bold text-lg uppercase">{user}</span>
<span  className="text-[12px] phone:text-[10px] text-gray-300 ">{time}</span>
</div>


</div>


{/* lower div   */}

<div className="flex w-full p-3 justify-center items-center text-[14px]">
  {title}
</div>

</div>
  )
}

export default Card
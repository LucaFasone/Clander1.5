import React from 'react'
function EventItems({id,nome,status,date,isClander,dateEndClander}:{id:number,nome:string,status:string, date:Date,isClander:boolean, dateEndClander?:Date}) {
  const EventStutsBg:string = status == "complete" ?  "bg-green-400" : status == "progress" ? "bg-blue-400" : "bg-red-400";
  
  return (
    <div className='my-5 mx-1 flex justify-start ' id={`${id}`}>
      <div className={`${EventStutsBg} p-3 rounded-full me-5`}></div>
      <p><span className='font-semibold'>{isClander ? date.toLocaleDateString() +' - '+ dateEndClander?.toLocaleDateString(): date.toLocaleDateString()}</span> {nome}</p>
    </div> 
    
  )
}

export default EventItems 
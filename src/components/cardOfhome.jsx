import React from 'react'

const CardOfhome = ({img , text}) => {
  return (
    <div data-aos="fade-down" className='w-[150px] h-[180px] shadow-2xl rounded-[5px]'>
      <img className='rounded-t-[5px]' src={img} alt="" />
      <h1 className='m-[3%] text-[8px]'>{text}</h1>
    </div>
  )
}

export default CardOfhome

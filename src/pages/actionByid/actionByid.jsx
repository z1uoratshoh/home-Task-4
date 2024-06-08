import React from 'react'
import { useParams } from 'react-router-dom'

const ActionByid = () => {

    const arr = [
        {
            id : 1,
            img : "https://www.shutterstock.com/image-photo/city-skyline-sunset-beautiful-new-600nw-1996493417.jpg",
            text : "Сборка зданий из предварительно изготовленных модулей, что позволяет сократить сроки строительства и снизить затраты."
        },
        {
            id : 2,
            img : "https://static9.depositphotos.com/1633205/1101/i/450/depositphotos_11011615-stock-photo-chicago-skyline.jpg",
            text : "Использование дронов для мониторинга строительных площадок и 3D-принтеров для печати строительных элементов."
        },
        {
            id : 3,
            img : "https://www.shutterstock.com/image-photo/city-skyline-sunset-beautiful-new-600nw-1996493417.jpg",
            text : "Сборка зданий из предварительно изготовленных модулей, что позволяет сократить сроки строительства и снизить затраты."
        },
        {
            id : 4,
            img : "https://img.freepik.com/premium-photo/view-modern-business-skyscrapers-glass-sky-view-landscape-commercial-building_39665-83.jpg",
            text : "Использование дронов для мониторинга строительных площадок и 3D-принтеров для печати строительных элементов."
        },
    ]

    const {id} = useParams()

  return (
    <div>
      {arr.filter((elem) => elem.id == id).map((elem) =>{
        return (
            <div className='my-[5%]'>
                <img src={elem.img} alt="" />
                <h1 className='m-[3%] mt-[3%]'>{elem.text}</h1>
            </div>
        )
      })}
      <h1 className='m-[3%] text-[#434343]'>Экологичность и энергоэффективность: Использование возобновляемых источников энергии (солнечные панели, ветровые турбины). Применение энергоэффективных материалов и технологий, снижающих потребление энергии и эксплуатационные расходы.</h1>
    </div>
  )
}

export default ActionByid

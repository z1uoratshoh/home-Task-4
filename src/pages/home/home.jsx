import Aos from 'aos'
import React, { useEffect } from 'react'
import CardOfhome from '../../components/cardOfhome'
import { Link } from 'react-router-dom'


const Home = () => {

    useEffect(() =>{
        Aos.init()
    })

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
            text : "Сборка зданий из предварительно изготовленных модулей, что позволяет сократить сроки строительства и снизить затраты."
        },
    ]

  return (
    <div>
    <section data-aos="fade-up"  className='my-[3%]'>
      <img src="https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
    </section>

    <section className='w-[90%] my-[25] m-auto'>
        <h1 className='text-[15px]'>Строительство — это процесс создания зданий и сооружений, который включает в себя широкий спектр задач, от начального проектирования и планирования до окончательной отделки и сдачи объекта в эксплуатацию. Оно является одной из ключевых отраслей экономики и требует тесного взаимодействия различных профессионалов, включая архитекторов, инженеров, строителей и менеджеров проектов. Рассмотрим основные этапы строительства и их особенности.</h1>
    </section>

    <section className='my-[5%]'>
        <swiper-container class="mySwiper">
            <swiper-slide>
                <div className='shadow-2xl w-[320px]'>
                    <img src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?cs=srgb&dl=pexels-camcasey-1722183.jpg&fm=jpg" alt="" />
                    <h1 className='m-[2%] text-[13px] text-start'>Проектирование: Концептуальное проектирование: На этом этапе разрабатывается общая идея проекта, определяются цели, задачи и основные параметры будущего здания или сооружения. Архитектурное проектирование: Создаются детальные архитектурные планы и чертежи, которые отражают внешний вид здания, его структуру и планировку. Инженерное проектирование: Разрабатываются технические решения для всех инженерных систем, таких как водоснабжение, электроснабжение, отопление, вентиляция и кондиционирование воздуха.</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='shadow-2xl w-[320px]'>
                    <img src="https://images.unsplash.com/photo-1570207174888-a99203647cbd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1 className='m-[2%] text-[13px] text-start'>Подготовка строительной площадки: Разработка участка: Включает вырубку деревьев, снос старых зданий и вывоз мусора. Земляные работы: Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы.</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='shadow-2xl w-[320px]'>
                    <img src="https://images.unsplash.com/photo-1611641613359-f698d54566dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1 className='m-[2%] text-[13px] text-start'>Строительные работы: Фундамент: Фундамент является основой здания и передает нагрузку на грунт. Выбор типа фундамента зависит от характеристик грунта и веса здания. Возведение каркаса: На этом этапе строится несущая структура здания, которая может быть выполнена из различных материалов, таких как бетон, металл или дерево. Крыша и внешняя отделка: Установка крыши, окон, дверей и наружных отделочных материалов. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы.</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='shadow-2xl w-[320px]'>
                <img src="https://images.unsplash.com/photo-1570207174888-a99203647cbd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1 className='m-[2%] text-[13px] text-start'>Строительные работы: Фундамент: Фундамент является основой здания и передает нагрузку на грунт. Выбор типа фундамента зависит от характеристик грунта и веса здания. Возведение каркаса: На этом этапе строится несущая структура здания, которая может быть выполнена из различных материалов, таких как бетон, металл или дерево. Крыша и внешняя отделка: Установка крыши, окон, дверей и наружных отделочных материалов. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы.</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='shadow-2xl w-[320px]'>
                    <img src="https://images.unsplash.com/photo-1611641613359-f698d54566dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1 className='m-[2%] text-[13px] text-start'>Строительные работы: Фундамент: Фундамент является основой здания и передает нагрузку на грунт. Выбор типа фундамента зависит от характеристик грунта и веса здания. Возведение каркаса: На этом этапе строится несущая структура здания, которая может быть выполнена из различных материалов, таких как бетон, металл или дерево. Крыша и внешняя отделка: Установка крыши, окон, дверей и наружных отделочных материалов. Включают рытье котлована для фундамента, выравнивание площадки и другие подготовительные работы.</h1>
                </div>
            </swiper-slide>
        </swiper-container>
    </section>

    <section>
        <div className='f_l flex-wrap w-[90%] m-auto gap-[20px]'>
            {arr.map((elem) =>{
                return (
                    <div key={elem.id}>
                        <Link to={`/action/${elem.id}`}>
                            <CardOfhome img={elem.img} text={elem.text}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    </section>

    
    </div>
  )
}

export default Home

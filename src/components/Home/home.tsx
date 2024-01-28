import first from '../../assets/imgs/first.svg';
import second from '../../assets/imgs/second.svg';
import third from '../../assets/imgs/third.svg';
import fourth from '../../assets/imgs/fourth.svg';
import fifth from '../../assets/imgs/fifth.svg';
import sixth from '../../assets/imgs/sixth.svg';
const cardInfo = [
    {
        id: 1,
        source: first,
        title: 'Страхование бизнеса',
        desc:"Защита финансового благополучия и активов компании от непредвиденных событий и рисков для любого предприятия",
    },
    {
        id: 2,
        source: second,
        title: 'Cтрахования путешествия',
        desc:"Обеспечение защиты от неожиданных ситуаций во время путешествий и поездок в разные страны",
    },
    {
        id: 3,
        source: third,
        title: 'Защита вашего дома',
        desc:"Покрытие ущерба или потерь, связанных с жильем, включая стихийные бедствия, кражу и повреждение имущества.",
    },
    ,
    {
        id: 4,
        source: fourth,
        title: 'Основы автострахования',
        desc:"Защита от финансовых потерь в случае аварий, угона или повреждения транспортного средства.",
    },
    ,
    {
        id: 5,
        source: fifth,
        title: 'Обеспечение будущего семьи',
        desc:"Финансовая поддержка и защита для членов семьи в случае непредвиденных обстоятельств или несчастных случаев.",
    },
    ,
    {
        id: 6,
        source: sixth,
        title: 'Медицинское страхования',
        desc:"Защити свое финансовое благополучия от непредвиденных событий и рисков связанное со здоровьем.",
    },
    
];

export default function Home() {
    return(
        <>
            <div className="font-poppins flex flex-col gap-10 items-center my-10 py-4 px-4 sm:px-10 min-h-[100px] mx-auto">
                <div>
                    <h2 className='font-poppins font-bold tracking-wide text-center text-[#323232] text-4xl'>Обучайся страхованию вместе с <span className='text-[#30A879]'> Halyk Life!</span></h2>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                {cardInfo.map((item)=>(
                    <div key={item?.id} className="max-w-sm border border-gray-200 rounded-3xl shadow flex flex-col justify-center items-center gap-3">
                        <img className="rounded-t-lg w-[250px] h-[155px] mx-auto my-3" src={item?.source} alt="" />
                        <div className="mx-auto flex flex-col gap-3 w-80 p-5">
                            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900">{item?.title}</h5>
                            <p className="mb-3 font-normal text-gray-400 w-64">{item?.desc}</p>
                            <a href="#" className="w-[270px] h-12 inline-flex justify-between items-center px-3 py-2 text-sm font-medium text-center bg-[#FFCF54] rounded-[15px] hover:bg-[#DFAF34] transition">
                                Подробнее
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
                </div>
               
            </div>
        </>
    )
}
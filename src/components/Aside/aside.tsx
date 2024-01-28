import briefcase from '../../assets/imgs/briefcase.svg';
import chat from '../../assets/imgs/chat.svg';
import doc from '../../assets/imgs/doc.svg';
import home from '../../assets/imgs/home.svg';
import info from '../../assets/imgs/info.svg';
import statusup from '../../assets/imgs/statusup.svg';
import microphone from '../../assets/imgs/Microphone.svg';
import { useState } from 'react';


export default function Aside() {
    return(
        <>
            <section className='bg-gray-400 w-screen h-screen relative z-0'>
            <aside id="default-sidebar" className="z-10 absolute font-poppins fixed top-0 right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
                <ul className="space-y-2 font-medium flex flex-col gap-4">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                            <img src={home} width={30} height={30}/>
                            <span className="ms-3">Главная</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                            <img src={chat} width={30} height={30}/>
                            <span className="flex-1 ms-3 whitespace-nowrap">Ассистент-бот</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                            <img src={info} width={30} height={30}/>
                            <span className="flex-1 ms-3 whitespace-nowrap">О компании</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                        <img src={briefcase} width={30} height={30}/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Руководство</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                        <img src={doc} width={30} height={30}/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Финансовая отчетность</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                        <img src={statusup} width={30} height={30}/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Карьера</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-xl bg-white h-14 flex-row gap-2 hover:bg-[#E8E8E8] transition hover:shadow-lg">
                        <img src={microphone} width={30} height={30}/>
                        <span className="flex-1 ms-3 whitespace-nowrap">Пресс-центр</span>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>
            </section>
        </>
    )
}

'use client';

import { Carousel } from 'flowbite-react';
import hero from '../../assets/imgs/hero.svg';
import eagle from '../../assets/imgs/eagle.svg';
import halykk from '../../assets/imgs/halykk.svg';

export default function Hero() {
  return (
    <div className='font-poppins py-4 px-4 flex flex-col gap-8'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-[#FFDD87] rounded-2xl flex flex-row justify-center items-center w-[1240px] mx-auto">
            <div>
                <img src={eagle}/>
            </div>
            <div className='w-[690px]'>
                <h1 className='font-bold text-6xl p-6'>
                    Добро пожаловать в страховой мир от <span className="text-[#30A879]">Halyk Life!</span>
                </h1>
                <p className='p-6 text-2xl w-[480px]'>Не знаете с чего начать? Обратитесь к нашему ИИ ассистенту Berky!</p>
            </div>
        </div>
        <div className='flex flex-row gap-3 justify-evenly'>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-80 h-[420px]">
                <a href="#!">
                    <img
                    className="rounded-t-lg w-full h-auto"
                    src={halykk}
                    alt="" />
                </a>
                <div className="p-6">
                    <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Halyk-Life проводит #InsurTechHackathon 
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    АО «Халык-Life» проведет хакатон InsureTechHackaton для студентов МУИТ и других университетов
                    </p>
                    <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Узнать 
                    </button>
                </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-80 h-[420px]">
                <a href="#!">
                    <img
                    className="rounded-t-lg w-full h-auto"
                    src={halykk}
                    alt="" />
                </a>
                <div className="p-6">
                    <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Объявление о проведение открытого тендера

                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    АО «Халык-Life» проведет хакатон InsureTechHackaton для студентов МУИТ и других университетов
                    </p>
                    <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Узнать
                    </button>
                </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-80 h-[420px]">
                <a href="#!">
                    <img
                    className="rounded-t-lg w-full h-auto"
                    src={halykk}
                    alt="" />
                </a>
                <div className="p-6">
                    <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Halyk-Life проводит #InsurTechHackathon 
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    АО «Халык-Life» проведет хакатон InsureTechHackaton для студентов МУИТ и других университетов
                    </p>
                    <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Узнать
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

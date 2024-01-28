import logo from '../../assets/imgs/logoHome.svg';
import Menu from '../../assets/icons/menu.svg';
export default function Header() {
    return(
        <>
        <header className='font-poppins shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[100px] bg-[#6DC49A] z-0 relative'>
            <div className='flex flex-row items-center justify-between relative w-full'>
                <a> <img src={logo} alt="logo" className='w-48' /> </a>
                <div className='flex flex-row lg:order-1 max-sm:ml-auto w-auto items-center '>
                    <div>
                        <button
                        className='px-4 py-2 text-sm rounded-full bg-white transition-all ease-in-out duration-300 hover:opacity-90 hover:shadow-xl'>Регистрация</button>
                        <button
                        className='px-4 py-2 text-sm rounded-full bg-white transition-all ease-in-out duration-300 hover:opacity-90 hover:shadow-xl ml-3'>Вход</button>
                    </div>
                    <div>
                        <a href='/'><img className="lg:w-1/2 w-20 h-16 m-auto" src={Menu}/> </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
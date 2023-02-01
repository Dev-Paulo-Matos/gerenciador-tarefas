import { Link } from 'react-router-dom';
import imgClock from '../../../assets/clock-and-calendar-svgrepo-com.svg';
const NavigationMenu = () => {

    <Link to={"/gerenciador-tarefas/#"}  className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400">Home</Link>

    const scrollTop = () => {
        const main = document.querySelector('#home')
        main?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollMid = () => {
        const main = document.querySelector('#section-main')
        main?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollBottom = () => {
        const contato = document.querySelector('#contato')
        contato?.scrollIntoView({behavior: 'smooth'})
    }
    return (
    <div className="flex items-center">
    <ul className="flex space-x-8">
        <li><Link to={"/gerenciador-tarefas/"} className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" onClick={scrollTop}>Home</Link></li>
        <li><Link to={"/gerenciador-tarefas/"} className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" onClick={scrollMid}>Sobre</Link></li>
        <li><Link to={"/gerenciador-tarefas/"} className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" onClick={scrollBottom}>Contato</Link></li>
    </ul>
    </div>
)
}

const IconNavigation = () => {
    return (<img className="h-12" src={imgClock} alt="" />)
}

const NaoLogado = () => {
    return(
        <div className="flex gap-4 items-center">
            <Link to={"/gerenciador-tarefas/login"} className='bg-blue-200 pr-3 pl-3 py-2 rounded-xl hover:bg-blue-300 dark:hover:bg-blue-400' >Sign in</Link>
            <Link to={"/gerenciador-tarefas/register"} className="text-gray-50 flex">Sign up</Link>
        </div>
    )
}

export const Header = () => {
    return(
        <div className="fixed  w-full z-40">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 flex justify-between">
                    <IconNavigation />
                    <NavigationMenu />
                    <NaoLogado />
                    
                </div>
            </nav>
        </div>
    )
}
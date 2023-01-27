
const NavigationMenu = () => {
    return (
    <div className="flex items-center">
    <ul className="flex space-x-8">
        <li><a className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" href="#">Home</a></li>
        <li><a className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" href="#section-main">Sobre</a></li>
        <li><a className="text-gray-50 hover:text-sky-500 dark:hover:text-sky-400" href="#contato">Contato</a></li>
    </ul>
    </div>
)
}

const IconNavigation = () => {
    return (<img className="h-12" src="../../../clock-and-calendar-svgrepo-com.svg" alt="" />)
}

const NaoLogado = () => {
    return(
        <div className="flex gap-4 items-center">
            <button className="bg-blue-200 pr-3 pl-3 h-8 bd-8 rounded-xl hover:bg-blue-300 dark:hover:bg-blue-400">Sign in</button>
            <button className="text-gray-50 flex">Sign up</button>
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
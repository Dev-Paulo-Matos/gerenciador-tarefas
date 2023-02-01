import imgMain from '../../../assets/main-img.png';
import iconSvgArrowLeft from '../../../assets/arrow-left.svg'
function Main(){
    return(
    <main id='home'>
        <section className="mx-auto max-w-7xl">
            <div className="flex pl-40 pt-60">
                <div>
                    <h1 className='text-6xl font-bold'>Gerenciador de tarefas</h1>
                    <p className="pt-8 italic ">Administre suas tarefas do dia a dia com agilidade e facilidade.</p>
                    <div className='space-x-4'>
                        <button className="px-3 py-2 mt-16 text-1xl text-gray-50 rounded-xl bg-azul ">Get started</button>
                        <button className="px-2 py-2 mt-16 text-1xl rounded-xl hover:bg-slate-200"><span className='flex'>Learn more<img src={iconSvgArrowLeft} alt="" /></span></button>
                    </div>
                </div>
                <img className='w-72' src={imgMain} alt="" />
            </div>
        </section>
        <div id='section-main'></div>
    </main>
    )
}
export default Main;
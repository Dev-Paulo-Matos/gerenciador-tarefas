import ImgSectionContato from '../../../assets/contact.svg'
export const SectionContato = () => {
    return(
        <div className="w-full" >
            <section className="ml-20 mt-24 mr-20 flex bg-slate-50 drop-shadow-md" >
                <div className="w-3/6 px-12 py-4">
                    <h2 className="text-3xl mb-4 pt-8 text-center">Contate-nos</h2>
                    <p className="mb-12 italic">Mande suas dúvidas, portifólios e ideias.</p>
                    <form >
                        <label className="block mb-6">
                            <span className="block mb-1 text-sm font-medium text-slate-700">Nome:</span>
                            <input className="w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block mb-6">
                            <span className="block mb-1 text-sm font-medium text-slate-700">E-mail:</span>
                            <input className="w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block mb-6">
                            <span className="block mb-1 text-sm font-medium text-slate-700">Message:</span>
                            <textarea className="w-full py-8 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        </label>
                        <label className="block mb-10 flex justify-center">
                            <button className="bg-azul w-full py-2 rounded-2xl">Enviar</button>
                        </label>
                    </form>
                </div>
                <div className="flex w-3/6 relative justify-center">
                    <img src={ImgSectionContato} className="mx-auto w-full max-w-md"/>
                </div>
            </section>
        </div>
    )
}
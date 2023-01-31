const Login = () => {
    
    return(
        <div className="mx-auto flex flex-col max-w-7xl pt-20 items-center">
            <div className="w-3/6 bg-gray-50 px-20 py-4 drop-shadow-md">
                <h2 className="pb-10 text-2xl text-center">
                    Entrar
                </h2>
                <form action="">
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome de usuario:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Senha:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <button className=" bg-azul border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500">Entrar</button>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Login
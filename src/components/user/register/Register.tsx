const Register = () => {
    return (
        <div className="mx-auto flex flex-col max-w-7xl pt-20 items-center">
            <div className="w-3/6 bg-gray-50 px-20 py-4 drop-shadow-md">
                <h2 className="pb-10 text-2xl text-center">
                    Registrar-se
                </h2>
                <form action="">
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome de Usuario:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">E-mail:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Senha:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Confirm Senha:</span>
                        <input className="border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <button className=" bg-azul border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500">Registrar</button>
                    </label>
                </form>
            </div>
        </div>
    )
}
export default Register;
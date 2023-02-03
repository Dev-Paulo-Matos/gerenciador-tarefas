import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const formValue:SubmitHandler<any> = (data:any) => console.log(data)
    return (
        <div className="mx-auto flex flex-col max-w-7xl pt-20 items-center">
            <div className="w-3/6 bg-gray-50 px-20 py-4 drop-shadow-md">
                <h2 className="pb-10 text-2xl text-center">
                    Registrar-se
                </h2>
                <form onSubmit={handleSubmit(formValue)}>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome:</span>
                        <input {...register('name', {maxLength: {message: 'Nome não deve possuir mais de 30 caracteres!' ,value:30}, required: true})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.name?.type === 'maxLength' && <p>{errors.name.message?.toString()}</p>}
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome de Usuario:</span>
                        <input {...register('userName',{maxLength: {message:'123',value:40}, required: true})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">E-mail:</span>
                        <input {...register('email',{maxLength: {message:'123',value:40}, required: true})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Senha:</span>
                        <input {...register('senha', {maxLength: {message:'123',value:40}, required: true})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Confirm Senha:</span>
                        <input {...register('confirmSenha',{maxLength: {message:'123',value:40}, required:true})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                    <label className="block mb-6">
                        <input type="submit"  value="submit" className="text-slate-50 text-center px-2  bg-azul border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                </form>
            </div>
        </div>
    )
}
export default Register;
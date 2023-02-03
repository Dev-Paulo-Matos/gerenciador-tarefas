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
                        <input {...register('name', {maxLength: {message: 'Nome não deve possuir mais de 30 caracteres!' ,value:30}, required: {message:'Campo de preenchimento obrigatorio.', value: true}})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.name?.type === 'maxLength' && <p>{errors.name.message?.toString()}</p>}
                        {errors.name?.type === 'required' && <p>{errors.name.message?.toString()}</p>}
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Nome de Usuario:</span>
                        <input {...register('userName',{maxLength: {message:'123',value:30}, required: {message:'Campo de preenchimento obrigatorio.', value: true}})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.userName?.type === 'maxLength' && <p>{errors.userName.message?.toString()}</p>}
                        {errors.userName?.type === 'required' && <p>{errors.userName.message?.toString()}</p>}
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">E-mail:</span>
                        <input {...register('email' ,{maxLength: {message:'123',value:30}, required: {message:'Campo de preenchimento obrigatorio.', value: true}})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.email?.type === 'maxLength' && <p>{errors.email.message?.toString()}</p>}
                        {errors.email?.type === 'required' && <p>{errors.email.message?.toString()}</p>}
                    </label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Senha:</span>
                        <input {...register('senha' ,{maxLength: {message:'123',value:30}, required: {message:'Campo de preenchimento obrigatorio.', value: true}})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.senha?.type === 'maxLength' && <p>{errors.senha.message?.toString()}</p>}
                        {errors.senha?.type === 'required' && <p>{errors.senha.message?.toString()}</p>}</label>
                    <label className="block mb-6">
                        <span className="block mb-1 text-sm font-medium text-slate-700">Confirm Senha:</span>
                        <input {...register('confirmSenha' ,{maxLength: {message:'123',value:30}, required: {message:'Campo de preenchimento obrigatorio.', value: true}})} maxLength={40} className="px-2 border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        {errors.confirmSenha?.type === 'maxLength' && <p>{errors.confirmSenha.message?.toString()}</p>}
                        {errors.confirmSenha?.type === 'required' && <p>{errors.confirmSenha.message?.toString()}</p>}</label>
                    <label className="block mb-6">
                        <input type="submit"  value="submit" className="text-slate-50 text-center px-2  bg-azul border border-slate-300 w-full py-2 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                    </label>
                </form>
            </div>
        </div>
    )
}
export default Register;


export const ColumnPlaceHolder = ({index}: any) => {
    return (
            <div className="px-4 py-4 bg-gray-200  min-w-fit mx-4 h-96">
                <input defaultValue={`Coluna ${index}`} className='w-full outline-0' type="text" />
            </div>
    )
}
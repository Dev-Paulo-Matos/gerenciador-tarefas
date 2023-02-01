import imgArticle from '../../../assets/article-img.png'

export const SectionMain = () => {
    return(
      <div className='bg-blue-100 mt-40 drop-shadow-md'>
        <section className='mx-auto max-w-7xl flex pl-20  '>
          <img src={imgArticle} alt="" className='w-3/6'/>
          <article className='w-full pt-10'>
            <h2 className='text-3xl mb-8'>Economize seu tempo</h2>
            <p >Neste aplicativo nos queremos que você ganhe o maximo de tempo e produtividade com o nosso software, especialmente desenvolvido para atender a sua necessidade. Administre suas tarefas em formato de cartões, que são de facil alteração e totalmente costumizavel, aproveite!</p>
          </article>
        </section>
        <div id='contato'></div>
      </div>
  )
}
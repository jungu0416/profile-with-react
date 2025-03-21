import Introduce from './components/Introduce'
import Posts from './components/Posts'

function Main() {
  return (
    <main>
      <section className="flex h-[2200px] relative justify-center">
        <article className="flex flex-col justify-center items-center w-[98%] mt-[-30px] pb-8 bg-white absolute rounded-xl shadow-lg backdrop-blur-lg bg-opacity-80">
          <Introduce />
          <Posts title={'블로그'} />
          <Posts title={'토이프로젝트'} />
        </article>
      </section>
      <section className="relative h-96 mt-10">
        <article>2</article>
      </section>
    </main>
  )
}

export default Main

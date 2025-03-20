import Posts from './Posts'
import UserInfo from './UserInfo'

function Main() {
  return (
    <main className="bg-gray-100 ">
      <section className="flex h-96 relative justify-center">
        <article className="flex flex-col justify-center items-center w-[98%] mt-[-30px] m-10 bg-white absolute rounded-xl shadow-lg backdrop-blur-lg bg-opacity-80">
          <UserInfo />
          <Posts title={'블로그'} />
          <Posts title={'토이프로젝트'} />
        </article>
      </section>
      <section className="h-96">
        <article>2</article>
      </section>
    </main>
  )
}

export default Main

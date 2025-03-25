import { Link } from 'react-router-dom'
import Introduce from './components/Introduce'
import Posts from './components/Posts'
import { ArrowRight } from 'lucide-react'

function Main() {
  return (
    <main>
      <section className="flex h-[2200px] relative justify-center">
        <article className="flex flex-col justify-center items-center w-[98%] mt-[-30px] pb-8 bg-white absolute rounded-xl shadow-lg backdrop-blur-lg bg-opacity-80">
          <Introduce />

          <div className="w-full overflow-hidden bg-gray-100 py-2 flex justify-center">
            <p className="text-sm text-gray-700 animate-ticker">🚀 이 서버는 마포구 어느 방구석에서 실행 중입니다... 🚀</p>
          </div>
          <div className="text-m text-gray-400 m-2">
            <Link to="/whyHomeserver" className="flex items-center ">
              AWS에서 방구석 홈서버로 갈아탄 이유
              <ArrowRight />
            </Link>
          </div>

          <Posts title={'블로그'} />
          <Posts title={'토이프로젝트'} />
        </article>
      </section>
    </main>
  )
}

export default Main

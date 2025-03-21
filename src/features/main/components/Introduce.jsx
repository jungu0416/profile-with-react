import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Introduce() {
  return (
    <div className="w-container py-[80px] relative flex flex-col items-center">
      <img
        src="/public/images/main/mini-profile.png"
        alt="프로필사진"
        className="size-24 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <div className="w-[742px]">
        {/* <p className="mt-14 text-2xl font-bold">강준구</p> */}
        <figure className="mt-10 text-gray-400 text-[60px] text-center">"나는 개발자..? 관리자..? "</figure>
        <div className="mt-7 ml-10 text-lg text-blue-600">
          <Link to="/whoAmI" className="flex items-center gap-1">
            더 알아보기 <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduce

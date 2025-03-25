import { useEffect, useState } from 'react'

function About() {
  const [timeElapsed, setTimeElapsed] = useState('00년 00일 00시간 00분 00초')

  useEffect(() => {
    const startDate = new Date('2021-04-12T00:00:00') // 시작일 (2021년 4월 12일)

    const updateElapsedTime = () => {
      const now = new Date()
      let diff = Math.floor((now - startDate) / 1000) // 초 단위 차이

      const years = Math.floor(diff / (365 * 24 * 60 * 60))
      diff %= 365 * 24 * 60 * 60
      const days = Math.floor(diff / (24 * 60 * 60))
      diff %= 24 * 60 * 60
      const hours = Math.floor(diff / (60 * 60))
      diff %= 60 * 60
      const minutes = Math.floor(diff / 60)
      const seconds = diff % 60

      setTimeElapsed(`${years}년 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`)
    }

    updateElapsedTime() // 초기 값 설정
    const interval = setInterval(updateElapsedTime, 1000) // 1초마다 업데이트

    return () => clearInterval(interval) // 컴포넌트 언마운트 시 정리
  }, [])

  return (
    <>
      <h2 className="text-6xl mb-20">
        About <span className="">Me</span>
      </h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8">
          <h2 className="text-xl mb-10 text-gray-400">#Main Skills</h2>
          <div className="flex flex-wrap p-10 gap-1">
            <SkillBox location={'/public/images/javascript.png'} />
            <SkillBox location={'/public/images/typescript.png'} />
            <SkillBox location={'/public/images/react.png'} />
            <SkillBox location={'/public/images/java.png'} />
            <SkillBox location={'/public/images/springboot.png'} />
            <SkillBox location={'/public/images/gradle.png'} />
            <SkillBox location={'/public/images/mariadb.png'} />
            <SkillBox location={'/public/images/docker.png'} />
            <SkillBox location={'/public/images/centos.png'} />
            <SkillBox location={'/public/images/git.png'} />
            <SkillBox location={'/public/images/nodejs.png'} />
            <SkillBox location={'/public/images/nginx.png'} />
            <SkillBox location={'/public/images/tomcat.png'} />
          </div>
        </div>
        <div className="w-1/2 px-8">
          <blockquote className="text-2xl mb-5">People who are really serious about software should make their own hardware - Alan Kay -</blockquote>
          <p className="mb-4">전체를 알아야 관리를 할 수 있습니다. -강준구-</p>
          <p className="text-gray-400 mb-8">
            Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스택을 향해 질주하는 개발자입니다. 화면과 비지니스 로직 모두 중시하고 이 모든게 잘
            합쳐져야 좋은 서비스를 만들 수 있다 생각합니다.
          </p>
          <ul>
            <li>Birth: 1996-01-23</li>
            <li>How Long: {timeElapsed}</li>
            <li>Phone: 010-7164-7233</li>
            <li>Email: jungu0416@naver.com</li>
          </ul>
        </div>
      </div>
    </>
  )
}

function SkillBox({ location }) {
  return <img src={location} alt="skills" className="size-40" />
}

export default About

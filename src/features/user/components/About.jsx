import ElapsedTime from './ElapsedTime'

const MYSKILLS = [
  'javascript',
  'typescript',
  'react',
  'java',
  'springboot',
  'docker',
  'mariadb',
  'nodejs',
  'gradle',
  'git',
  'jenkins',
  'nginx',
  'springdatajpa',
  'tomcat',
  'centos',
  'supabase',
  'nextjs',
  'aws',
  'oracle',
  'ubuntu',
  'windows-server',
  'svn',
]

function About() {
  return (
    <>
      <h2 className="text-6xl mb-20">
        About <span className="">Me</span>
      </h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8">
          <h2 className="text-xl mb-10 text-gray-400">#Main Skills</h2>
          <div className="flex flex-wrap p-10 gap-1">
            {MYSKILLS.map((skill, index) => (
              <SkillBox key={index} location={`/images/${skill}.png`} />
            ))}
          </div>
        </div>
        <div className="w-1/2 px-8 m-auto">
          <blockquote className="text-2xl mb-5">People who are really serious about software should make their own hardware - Alan Kay -</blockquote>
          <p className="mb-8">전체를 알아야 관리를 할 수 있습니다. -강준구-</p>
          <p className="text-gray-400 mb-8">
            개발부터 배포까지 전체 과정을 이해하고 관리합니다. 화면과 비즈니스 로직 모두를 균형 있게 고려하며, 각 요소가 유기적으로 조화를 이룰 때
            비로소 좋은 서비스가 완성된다고 믿습니다.
          </p>
          <p className="text-gray-400 mb-8">
            다양한 환경과 역할을 경험하며 폭넓은 시야를 갖추었습니다. 문제를 깊이 이해하고 스스로 해결해내는 힘을 키웠습니다. 또한 소통을 통해
            비즈니스와 기술을 연결하며, 함께 성장하는 개발 문화를 만들어갑니다.
          </p>
          <ul className="mt-20">
            <li>Birth: 1996-01-23</li>
            <li>
              How Long: <ElapsedTime />
            </li>
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

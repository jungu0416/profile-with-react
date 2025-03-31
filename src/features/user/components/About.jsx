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
  'centos',
  'gradle',
  'git',
  'jenkins',
  'nginx',
  'nextjs',
  'tomcat',
  'aws',
  'oracle',
  'supabase',
  'ubuntu',
  'windows-server',
  'svn',
  'springdatajpa',
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
              <SkillBox key={index} location={`/public/images/${skill}.png`} />
            ))}
          </div>
        </div>
        <div className="w-1/2 px-8 m-auto">
          <blockquote className="text-2xl mb-5">People who are really serious about software should make their own hardware - Alan Kay -</blockquote>
          <p className="mb-8">전체를 알아야 관리를 할 수 있습니다. -강준구-</p>
          <p className="text-gray-400 mb-8">
            Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스택을 향해 질주하는 개발자입니다. 화면과 비지니스 로직 모두 중시하고 이 모든게 잘
            합쳐져야 좋은 서비스를 만들 수 있다 생각합니다.
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

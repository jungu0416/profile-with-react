function About() {
  return (
    <div className="flex flex-col justify-center items-center w-container mx-auto mt-40">
      <h2 className="text-6xl mb-20">
        About <span className="">Me</span>
      </h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8">
          <h2 className="text-xl mb-10 text-gray-400">#Main Skills</h2>
          <>box</>
          <>box</>
          <>box</>
          <>box</>
        </div>
        <div className="w-1/2 px-8">
          <blockquote className="text-2xl mb-10">People who are really serious about software shoud make their own hardware -Alan Kay-</blockquote>
          <p className="text-gray-400 mb-10">
            Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을 향해 질주하는 Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을 향해
            질주하는 Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을 향해 질주하는 Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을
          </p>
          <p className="text-gray-400 mb-10">
            Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을 향해 질주하는 Backend 실무 개발 3년차 & Frontend 개발을 통해 풀스텍을 향해
          </p>
          <ul>
            <li>나이: 1996-01-23</li>
            <li>경력: 00년 00일 00시 00분 00초</li>
            <li>핸드폰: 010-7164-7233</li>
            <li>이메일: jungu0416@naver.com</li>
          </ul>
        </div>
      </div>
      <h2 className="text-6xl mb-20">Resume</h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8 text-2xl text-center">Development</div>
        <div className="w-1/2 px-8 text-2xl text-center">Management</div>
      </div>
    </div>
  )
}

export default About

function Resume() {
  return (
    <>
      <h2 className="text-6xl mb-20">Resume</h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8">
          <p className="text-2xl text-center font-bold">Development</p>
          <ul>
            <li>
              <Card />
            </li>
            <li>
              <Card1 />
            </li>
            <li>
              <Card2 />
            </li>
          </ul>
        </div>
        <div className="w-1/2 px-8">
          <p className="text-2xl text-center font-bold">Management</p>
          <ul>
            <li>
              <Card3 />
            </li>
            <li>
              <Card4 />
            </li>
            <li>
              <Card5 />
            </li>
            <li>
              <Card6 />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

function Card() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2023.05 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">녹십자</span> - 채용 시스템 개발/유지보수 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>Batch & Scheduler를 통한 recruit data pipeline 개발</li>
            <li>SAP Successfactors Auth 연동</li>
            <li>SAP PI/PO 미들웨어 API 연동</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card1() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2023.05 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">녹십자</span> - GHR 인사정보시스템 개발/유지보수 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>RFC를 이용한 SAP ERP HR 연동</li>
            <li>국내, 국외 출장 서비스 개발</li>
            <li>근태 시스템 개발 및 Batch를 통한 외부 API 연동</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card2() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">녹십자</span> - Solution Center 복리후생 서비스 개발/유지보수 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>RFC를 이용한 SAP ERP HR 연동</li>
            <li>외부 인사 방문 시스템 개발</li>
            <li>일반/특수 건강검진 서비스 개발</li>
            <li>사내 결혼, 동아리 급여 시스템 개편</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card3() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">녹십자</span> - LG 근무시간관리 서비스 운영/유지보수 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>GHR 근태 정보 Batch & Scheduler 유지보수</li>
            <li>SAP CPI 개발 & Shiftee API 연동</li>
            <li>GC 전사 확대</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card4() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">녹십자</span> - Shiftee 유연근로제 운영/유지보수 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>GC 전사 확대 & 본사 도입 관리</li>
            <li>SAP CPI 개발, Shiftee API 연동</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card5() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">고려전산</span> - 건설공사비 자원자료 웹서비스 런칭 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>Docker를 통한 Backend Service 런칭</li>
            <li>AWS EC2 구축 & 관리</li>
            <li>CI/CD Jenkins 도입</li>
            <li>MSA 패키지 구조 변경</li>
            <li>SQLite, MariaDB Converting 라이브러리 개발</li>
            <li>GitLab 구축 및 Branch, PR, Commit, Coding convention 확립</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card6() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">(주)신나는플랫폼</span> - 동국대학교 uDrims 학사시스템 개편 -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>uDrims 학사 시스템 Version up</li>
            <li>CI/CD Jenkins 구축, 무중단 배포, 백업 Pipeline 개발</li>
          </ul>
        </span>
      </div>
    </div>
  )
}
function Card7() {
  return (
    <div className="m-8 p-4 border rounded-lg border-solid shadow-lg">
      <div className="mt-[-28px] mb-[10px] ">
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
      </div>
      <div>
        <p className="mb-2 text-lg]">
          <span className="text-[#44af2b]">(주)신나는플랫폼</span> - 경동나비엔 GQMS -
        </p>
        <span className="text-base text-gray-400">
          <ul>
            <li>Websquare - Frontend 개발</li>
            <li>Spring - Backend 공통 로직 개발</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default Resume

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
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </div>
        <div className="w-1/2 px-8">
          <p className="text-2xl text-center font-bold">Management</p>
          <ul>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
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
        <span className="p-2 font-bold text-gray-400 rounded-lg bg-white">2024.02 ~ 2024.06</span>
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

export default Resume

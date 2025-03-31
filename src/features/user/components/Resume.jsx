function Resume() {
  return (
    <>
      <h2 className="text-6xl mb-20">Resume</h2>
      <div className="flex w-full mb-60">
        <div className="w-1/2 px-8">
          <p className="text-2xl text-center">Development</p>
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
          <p className="text-2xl text-center">Management</p>
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
    <div className="m-8 p-4 border-2 rounded-lg border-solid">
      <div>
        <span>June 1, 2009 - 2010</span>
      </div>
      <div>
        <p>어쩌구 프로젝트</p>
        어쩌구 내용 어쩌구 내용 어쩌구 내용 어쩌구 내용 어쩌구 내용 어쩌구 내용
      </div>
    </div>
  )
}

export default Resume

import { useEffect, useState } from 'react'

function Info() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 500)
  }, [])

  return (
    <>
      <SloganBg animate="animate-fadeInLeft">I'm</SloganBg>
      <div
        className={`w-container flex justify-start mx-auto relative transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } text-right`}
      >
        <ProfileImg />
        <Summary content={['코딩부터', '서버 운용까지']} position={{ top: '100px', right: '185px' }} animate="animate-fadeInLeft" />
        <Summary content={['개발의', '모든 것']} position={{ bottom: '50px', right: '185px' }} animate="animate-fadeInRight" />
      </div>
      <SloganBg align="text-right" animate="animate-fadeInRight">
        Administrator
      </SloganBg>
    </>
  )
}

function SloganBg({ align = 'text-start', animate, children }) {
  return <div className={`text-[8vw] text-[#bdbdbd] ${align} ${animate}`}>{children}</div>
}

function ProfileImg() {
  return <img src="/images/user/profile1.png" alt="프로필 사진" className="rounded-lg shadow-lg w-96" />
}

function Summary({ content, position, animate }) {
  const contentArray = Array.isArray(content) ? content : [content] // 문자열을 배열로 변환
  return (
    <div className={`absolute text-[56px] whitespace-pre-line ${animate}`} style={position}>
      {contentArray.join('\n')}
    </div>
  )
}

export default Info

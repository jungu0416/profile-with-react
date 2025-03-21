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
      <div className={`w-container flex justify-center mx-auto relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Summary content={['개발부터 배포까지', '다~ 해보는']} position={{ top: '20px', left: '75px' }} />
        <ProfileImg />
        <Summary content={['관리자', '강준구입니다']} position={{ bottom: '50px', right: '150px' }} />
      </div>
      <SloganBg align="text-right" animate="animate-fadeInRight">
        Administrator
      </SloganBg>
    </>
  )
}

function SloganBg({ align = 'text-start', animate, children }) {
  return <div className={`text-[10vw] text-[#f9f9f9] ${align} ${animate}`}>{children}</div>
}

function ProfileImg() {
  return <img src="/public/images/user/여권사진.jpg" alt="프로필 사진" className="rounded-lg shadow-lg" />
}

function Summary({ content, position }) {
  const contentArray = Array.isArray(content) ? content : [content] // 문자열을 배열로 변환
  return (
    <div className="absolute text-[56px] whitespace-pre-line" style={position}>
      {contentArray.join('\n')}
    </div>
  )
}

export default Info

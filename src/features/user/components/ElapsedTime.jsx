import {useEffect, useState} from 'react'

function ElapsedTime() {
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

    updateElapsedTime()
    const interval = setInterval(updateElapsedTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span>{timeElapsed}</span>
}

export default ElapsedTime

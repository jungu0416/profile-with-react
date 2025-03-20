import { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
  })

  const smoothScroll = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext() // 다음 슬라이드로 이동
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    // 3초 간격으로 슬라이드가 이동하도록 설정
    const intervalId = setInterval(() => {
      smoothScroll()
    }, 3000) // 3초마다 슬라이드가 자동으로 넘어감

    return () => clearInterval(intervalId) // 컴포넌트 언마운트 시 interval 종료
  }, [emblaApi, smoothScroll])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="min-w-[calc(25%-1rem)] mr-4 flex justify-center items-center bg-blue-300 h-64 text-white text-2xl">
            Slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider

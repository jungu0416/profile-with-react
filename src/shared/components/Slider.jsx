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
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const intervalId = setInterval(() => {
      smoothScroll()
    }, 1500)

    return () => clearInterval(intervalId)
  }, [emblaApi, smoothScroll])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="min-w-[calc(25%-1rem)] mr-4 flex justify-center items-center bg-blue-300 h-64 text-white text-2xl rounded-xl ">
            Slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider

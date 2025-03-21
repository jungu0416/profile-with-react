import Slider from '@/shared/components/Slider'

function Posts({ title }) {
  return (
    <div className="w-container my-8 text-2xl">
      <p className="my-6">{title}</p>
      <Slider></Slider>
    </div>
  )
}

export default Posts

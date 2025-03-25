import Slider from '@/shared/components/Slider'

function Posts({ title }) {
  return (
    <>
      <p className="my-6">{title}</p>
      <Slider></Slider>
    </>
  )
}

export default Posts

import Info from './components/Info'
import About from './components/About'
import Resume from './components/Resume'
import Enterprise from './components/Enterprise'

function User() {
  return (
    <main>
      <section className="flex h-[4300px] relative justify-center">
        <article className="w-[98%] mt-[-30px] pb-8 bg-white absolute rounded-xl shadow-lg backdrop-blur-lg bg-opacity-80">
          <Info />
          <div className="flex flex-col justify-center items-center w-container mx-auto mt-40">
            <About />
            <Resume />
            <Enterprise />
          </div>
        </article>
      </section>
    </main>
  )
}

export default User

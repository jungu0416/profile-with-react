import { Github } from 'lucide-react'
import Button from '../../../shared/components/Button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="h-96 bg-[url(/images/header-bg.png)] bg-no-repeat bg-cover bg-center pt-5">
      <div className="flex w-container mx-auto mt-5 justify-between text-white">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

function Logo() {
  return (
    <Link to="/">
      <img src="/images/LOGO.png" className="w-[125px]" />
    </Link>
  )
}

function Menu() {
  return (
    <ul className="flex gap-10">
      <li>
        <Button>
          <a href="/">blog</a>
        </Button>
      </li>
      <li>
        <Button>
          <a href="/">Projects</a>
        </Button>
      </li>
      <li>
        <Button>
          <Github />
          <a href="https://github.com/jungu0416">github</a>
        </Button>
      </li>
    </ul>
  )
}

export default Header

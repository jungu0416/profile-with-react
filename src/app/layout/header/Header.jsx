import { Github } from 'lucide-react'
import Button from '../../../shared/components/Button'

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
  return <span>로고</span>
}

function Menu() {
  return (
    <ul className="flex gap-10">
      <li>
        <Button>blog</Button>
      </li>
      <li>
        <Button>projects</Button>
      </li>
      <li>
        <Button>
          <Github />
          github
        </Button>
      </li>
    </ul>
  )
}

export default Header

import { Copyright } from 'lucide-react'

function Footer() {
  return (
    <footer className="h-96 bg-gradient-to-b from-white to-[#4C3C3B] py-6 text-center">
      <p className="flex justify-center">
        Copyright
        <Copyright className="mr-1" /> 2025 Designed by Jungu Kang
      </p>
    </footer>
  )
}

export default Footer

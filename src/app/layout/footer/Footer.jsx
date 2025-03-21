import { Copyright } from 'lucide-react'

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-24 bg-gradient-to-b from-white to-[#4C3C3B] py-6">
      <div className="mb-4">협업 및 제안: jungu0416@naver.com</div>
      <p className="pb-1">
        <Copyright className="mr-1 inline" /> 2025 Designed by Jungu Kang
      </p>
    </footer>
  )
}

export default Footer

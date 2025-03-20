/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1272px', // 커스텀 width 변수 추가
      },
    },
  },
  plugins: [],
}

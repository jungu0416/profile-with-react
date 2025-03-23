/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1272px', // 커스텀 width 변수 추가
      },
      colors: {
        primary: '#0B030A', // 기본 텍스트 색상 설정
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-150px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(150px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInRight: 'fadeInRight 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        html: { color: theme('colors.primary') },
      })
    },
  ],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.html", "./config.toml"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

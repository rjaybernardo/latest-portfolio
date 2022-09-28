module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

@layer base {
  body {
    @apply font-[Raleway];
  }
  li {
    @apply px-4;
    @apply cursor-pointer;
  }
}

.content-div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
}

.content-div:hover {
  background-image: linear-gradient(
    to right,
    rgba(153, 153, 153, 0.06),
    hsla(0, 0%, 37.6%, 0.8)
  ) !important;
}
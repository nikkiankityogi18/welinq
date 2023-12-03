/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logobgcolor: "#F4F5FF",
        activebtncolor: "#868CD1",
        navitemtextcolor: "#848484",
        pricecolor: "#EB7856",
        onlinecolor: "#396CE8",
        btncolor: "#E5E7FF",
        chatbtncolor: "#CCF4DA",
        bordercolor: "#C0C5FC",
        notegraycolor: "#848484",
      },
      fontSize: {
        heading: "28px",
      },
    },
  },
  plugins: [],
};

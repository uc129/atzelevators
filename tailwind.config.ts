import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // --p_cyan: #0CAADC;
        // --aero:#11B5E4;
        // --aero-tp:rgba(81, 190, 233, 0.026);
        // --baby_powder:#F7F7F2;
        // --night:#121113;
        // --blue-ncs:#1481BA;
        // --indian-red:#DB5461;
        // --light-red:#FF7477;
        // --imperial-red:#FF4242;
        // --umber:#725E54;
        // --ebony:#5F634F;
        // --dave-gray:#595457;
        // --rufous:#A72608;
        // --rose-taupe:#785964;
        // --dark-purple:#331832;
        // --very-dark-purple:#2C1320;
        // --african-violet:#9F87AF;
        // --midnight-green:#114B5F;
        // --coral:#FF8552;
        // --eggplant:#754668;
        // --space :#111D4A;
        // --space-light:#2D3047;
        // --kelly-green:#63C132;
        // --flame:#DC602E;
        cyan:'#0CAADC',
        aero:'#11B5E4',
        aero_tp:'rgba(81, 190, 233, 0.026)',
        baby_powder:'#F7F7F2',
        night:'#121113',
        blue_ncs:'#1481BA',
        indian_red:'#DB5461',
        light_red:'#FF7477',
        imperial_red:'#FF4242',
        umber:'#725E54',
        ebony:'#5F634F',
        dave_gray:'#595457',
        rufous:'#A72608',
        rose_taupe:'#785964',
        dark_purple:'#331832',
        very_dark_purple:'#2C1320',
        african_violet:'#9F87AF',
        midnight_green:'#114B5F',
        coral:'#FF8552',
        eggplant:'#754668',
        space :'#111D4A',
        space_light:'#2D3047',
        space_light_tp:'#2d304791',
        kelly_green:'#63C132',
        flame:'#DC602E',
      },
      screens: {
        '3xl': '1600px',
        '2xl': '1440px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px',
        'xxs': '340px',
      },

    }

  },


  plugins: [

  ],
};
export default config;


// theme: {
//   screens: {
//     'tablet': '640px',
//     // => @media (min-width: 640px) { ... }

//     'laptop': '1024px',
//     // => @media (min-width: 1024px) { ... }

//     'desktop': '1280px',
//     // => @media (min-width: 1280px) { ... }
//   },
// }
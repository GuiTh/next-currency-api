module.exports = {
    purge:{
      content:[
      './src/pages/**/*.{js,jsx}',
      './src/components/**/*.{js,jsx}',
      './src/hooks/**/*.{js,jsx}'
    ],
    safeList:[
      /^bg-/,
      /^to-/,
      /^from-/
  
    ]
    },
    darkmode: false,
    theme:{
      extend: {
        fontFamily:{
          mont: [Montserrat, mont]
        }
      },

    },
    variants:{
      extend: {},
    },
    plugins: [],
  
  }
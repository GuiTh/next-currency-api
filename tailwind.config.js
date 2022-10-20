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
        colors:{
          rosa:{
            100: "#a1286f"
          },
          roxo:{
            100: "#411a91"
          }
        }
      },
    },
    variants:{
      extend: {},
    },
    plugins: [],
  
  }
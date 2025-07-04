export default {
    input: 'src/autoActiveLink.js',   // your source file
    output: {
      file: 'dist/autoActiveLink.js', // output file (the one Webflow will use)
      format: 'iife',                 // format that works in browsers
      name: 'autoActiveLink'          // this creates a global function window.autoActiveLink()
    },
  };
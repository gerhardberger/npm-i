const i = require('../')

i(['request', 'underscore'], { path: `${__dirname}/foo` }, err => {
  if (err) throw err
  console.log('Installed in foo!')
})

i(err => {
  if (err) throw err
  console.log('Installed in test!')
})

i({ path: `${__dirname}/bar` }, err => {
  if (err) throw err
  console.log('Installed in bar!')
})

const getKeysAndAddress = require('./helpers/getKeysAndAddress')

getKeysAndAddress(
  '487eef4f0af249afb22f3f75436930ff',
  'm/1/1',
  (err, wallet) => {
    if (err) console.log(err)
    else console.log(wallet)
  }
)

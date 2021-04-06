var Twit = require('twit')
 
var T = new Twit({
  consumer_key: '5T9edPuRipPgC7psKt8CCafv8',
  consumer_secret: '8yKNDDVUHod8I8aYNtkIPsGJnA4c60dRkyax7vrIql5pk0w7Ye',
  access_token: '1256620928395608066-afgjmJFWXJssU5rDFKLHqNjdFDxsR8',
  access_token_secret: 'kk9AU6gL5Bu7PXMfhD9UaWds4w8qlGlG42pkhA4HgAg6O'
})

const elon_musk_twitter_id = '44196397'
const word = 'doge'

var stream = T.stream('statuses/filter', { follow : [elon_musk_twitter_id] });
stream.on('tweet', function (tweet, err) {
    console.log('new tweet')
    if(tweet.user.id.toString() === elon_musk_twitter_id){ //check if elon tweeted 
        console.log(tweet.user.id)
        if(tweet.text.toLowerCase().includes(word)){
            console.log(tweet)
        }
    }
})
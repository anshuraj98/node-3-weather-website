const request =require('request')

const forecast = (latitude,longitude,callback) => {
    const url ='http://api.weatherstack.com/current?access_key=7d5a9a84c85cc6cb70bdea6f85d40ebc&query=' + latitude + ',' + longitude + '&units=f'

        request({url,json:true},(error,{body}) => {
if(error){
    callback('Unable to connect wheather services', undefined)
} else if(body.error) {
    callback('Unable to find the location',undefined)
} else{
        callback(undefined , body.current.weather_descriptions[0] + ' It is current status , '+ body.current.temperature +' degrees out there and wheather description: '+ body.current.weather_descriptions +' and humidity is '+ body.current.humidity +', It feels like ' +body.current.feelslike +'% chance of rain.'
        )
}
        })
}

module.exports =forecast
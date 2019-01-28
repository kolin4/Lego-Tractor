
let lights = {
  normalLights: false,
  longLights: false
}

const switchNormalLights = () => {
 // gpio on off
 lights.normalLights = !lights.normalLights
 return lights
}

const switchLongLights = () => {
  // gpio on off
  lights.longLights = !lights.longLights
  return lights
}

module.exports.switchNormalLights = switchNormalLights
module.exports.switchLongLights = switchLongLights

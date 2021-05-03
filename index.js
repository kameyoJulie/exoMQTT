const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
  client.subscribe('presence', (err) => {
    if (!err) {
      let i = 0;
      setInterval(() => {
        i += 1;
        client.publish('presence/connected', `Hello mqtt ${i}`);
      }, 1000)
    }
  })
})

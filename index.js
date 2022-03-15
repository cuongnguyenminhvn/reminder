const schedule = require('node-schedule');
const axios = require('axios');
const rule = new schedule.RecurrenceRule();
rule.hour = 19;
rule.minute = 25;
rule.tz = 'Asia/Phnom_Penh';
var j = schedule.scheduleJob(rule, function(fireDate){
    console.log('running job!');
    let payload = { text: 'Commit code và điền daily report trước khi checkout!'};
    let res = axios.post("https://chat.googleapis.com/v1/spaces/AAAAjBdDXBs/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=IQ432w7v-UFEFZqHFuVdNvMIWhacK0FvQArgnusjZfs%3D", payload);
    let data = res.data;
    console.log(fireDate)
});
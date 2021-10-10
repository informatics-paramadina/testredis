const Queue = require("bull");

const testQueue = new Queue("test queue", {
  redis: {
    port: "15629",
    host: "redis-15629.c16.us-east-1-3.ec2.cloud.redislabs.com",
    password: "Alghi7198254!",
  },
});


const delay = ms => new Promise(res => setTimeout(res, ms));

testQueue.process(async (job, done)=>{
    await delay(5000);
    console.log(job.data.text)

    done();
})



testQueue.add({text: 'hei'})
testQueue.add({text: 'apakabar'})
testQueue.add({text: 'yuhuuuu'})
testQueue.add({text: 'ggggg'})

setTimeout(()=>{
    testQueue.add({text: 'wuwuwuwue!!'})
}, 1000)

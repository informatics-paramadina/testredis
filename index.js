const Queue = require("bull");

const antrian1 = new Queue("test queue", {
  redis: {
    port: "15629",
    host: "redis-15629.c16.us-east-1-3.ec2.cloud.redislabs.com",
    password: "Alghi7198254!",
  },
});

const antrian2 =  new Queue("test queue", {
  redis: {
    port: "15629",
    host: "redis-15629.c16.us-east-1-3.ec2.cloud.redislabs.com",
    password: "Alghi7198254!",
  },
});



const delay = ms => new Promise(res => setTimeout(res, ms));

antrian1.process(async (job, done)=>{
    await delay(5000);
    console.log(job.data);

    done();
})

let rand = Math.floor(Math.random()*11);
console.log(rand);
if(rand%2)
{
  console.log('antrian 1');
  antrian1.add({id_pendaftaran: 'a', nama: 'a'});
} else {
  console.log('antrian ');
  antrian2.add({id_pendaftaran: 'a', nama: 'a'});
}
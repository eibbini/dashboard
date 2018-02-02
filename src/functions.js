import { Bar } from 'vue-chartjs'

export const promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  if (true) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

export default promise;

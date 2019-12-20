const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const startServer = callback => {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", worker => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    try {
      callback();
    } catch (err) {
      console.log("Failed starting up server");
      console.log(err);
    }
  }
};

module.exports = { startServer };

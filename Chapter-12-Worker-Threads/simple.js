const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // This code runs in the main thread

  // Create a new worker thread
  const worker = new Worker(__filename, {
    workerData: { message: 'Hello from the main thread!' }
  });

  // Listen for messages from the worker thread
  worker.on('message', (message) => {
    console.log(`Received message from worker: ${message}`);
  });

  // Send data to the worker thread
  worker.postMessage('Hello from the main thread!');
} else {
  // This code runs in the worker thread

  // Listen for messages from the main thread
  parentPort.on('message', (message) => {
    console.log(`Received message from main thread: ${message}`);

    // Send a message back to the main thread
    parentPort.postMessage('Hello from the worker thread!');
  });

  // Access data passed to the worker thread
  console.log(`Worker Data: ${workerData.message}`);
}

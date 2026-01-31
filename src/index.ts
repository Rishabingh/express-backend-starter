import { connectDb } from "./configs/mongodbConnection.js";
import {app} from './app.js'


const port: number = Number(process.env.PORT) || 3000;

const startServer = async () => {
  try {
    await connectDb();

    app.listen(port, () => {
      console.log(`app is running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.error('Startup failed:', error);
    process.exit(1);
  }
};

startServer();


  // you can use .then .catch syntax if you want 
  /*
connectDb()
  .then(() => app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}/`)
  }))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
  */

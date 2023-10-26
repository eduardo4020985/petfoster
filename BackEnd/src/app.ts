// app.ts
import { app } from "./server";
require('dotenv').config();

(async () => {
    try {
      if(!process.env.SERVER_PORT){
        console.log("SERVER_PORT in not defined")
        process.exit(1);
      }
      app.listen(process.env.SERVER_PORT, () => console.log(`Server is running on port ${process.env.SERVER_PORT} 🚀`));
    } catch (error) {
      console.error("Error starting server:", error);
    }
})();

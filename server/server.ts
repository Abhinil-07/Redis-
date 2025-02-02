import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port " + process.env.PORT);
});

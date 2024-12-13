import { app } from './app';
import 'dotenv/config';
import connectDB from './utils/db';

const PORT:Number = 4000;
// connect server to localhost
app.listen(PORT, () => {
    console.log(`Server is connected http://localhost:${PORT}`);
    connectDB();
  });

export {app};
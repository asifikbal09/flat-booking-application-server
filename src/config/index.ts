import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    env:process.env.NODE_ENV,
    port:process.env.PORT,
    saltRound:process.env.SALT_ROUND as string,
    tokenSecret:process.env.ACCESS_TOKEN_SECRET as string,
    expire_in:process.env.ACCESS_TOKEN_EXPIRE_IN as string
}
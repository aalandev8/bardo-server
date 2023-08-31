import mongoose from 'mongoose';
import consola from 'consola';

export const dbConnection = async () => {
    consola.start('Connecting to database...');
    try {
        await mongoose.connect(process.env.DB_URL!, {
            dbName: process.env.DB_NAME,
        });

        consola.success('Database ONLINE');
    } catch (error) {
        consola.error(error);
        throw new Error('Error on database initialization');
    }
    };
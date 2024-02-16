import {DataSource, DataSourceOptions, EntityManager} from 'typeorm';
import {Subscription} from '@/data/entity/Subscription';

const mysqlOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'subscription',
    entities: [ Subscription ]
}

let ds: DataSource;

export const getEntityManager = async (): Promise<EntityManager> => {
    if (!ds) {
        ds = new DataSource(mysqlOptions);
        await ds.initialize();
    }
    return ds.manager;
}

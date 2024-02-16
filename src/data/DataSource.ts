import {DataSource, DataSourceOptions, EntityManager} from 'typeorm';
import {Subscription} from '@/data/entity/Subscription';
import SubscriptionInfo from '@/data/entity/SubscriptionInfo';
import Order from '@/data/entity/Order';

const subscriptionDsOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'subscription',
    entities: [ Subscription ]
}

const orderDsOptions: DataSourceOptions = {
    ...subscriptionDsOptions,
    database: 'order',
    entities: [ Order, SubscriptionInfo ]
}

const ds = {
    subscription: new DataSource(subscriptionDsOptions),
    order: new DataSource(orderDsOptions)
}

export const getEntityManager = async (name: string): Promise<EntityManager> => {
    // if (!ds) {
    //     ds = new DataSource(mysqlOptions);
    //     await ds.initialize();
    // }

    if (name === 'order') {
        return ds.order.manager;
    } else if (name === 'subscription') {
        return ds.subscription.manager;
    }

    return Promise.reject('Invalid dataSource name')
}

export const initDataSource = async () => {
    await ds.order.initialize();
    await ds.subscription.initialize();
}
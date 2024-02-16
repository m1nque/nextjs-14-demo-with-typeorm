import type { NextApiRequest, NextApiResponse } from 'next';
import {getEntityManager} from '@/data/DataSource';
import {Subscription} from '@/data/entity/Subscription';

type ResponseData = {
    message: string
}

export async function GET (
    req: NextApiRequest,
    res: NextApiResponse) {

    try  {
        const manager = await getEntityManager();
        const data = await manager.find(Subscription, { take: 5});

        return Response.json(data);
    } catch (e) {
        console.error(e)
    }


    //
    // console.log(data)

    return Response.json({ message: 'hello'})
}
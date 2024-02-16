import {useEffect, useState} from 'react';

export default function ClientComponent () {

    const [data, setData] = useState<number[]>([1, 2, 3]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
            return response.json()
        }).then((response) => {
            const res = response as any[];
            // console.log(res?.slice(0, 5));
            setData(res.slice(0, 5).map((e) => {
               return e.id
            }));
        })
    }, []);

    return (
        <div style={{margin: 30}}>
            { data?.map((e) => (<span key={e}>{e}</span>)) }
        </div>
    );
}
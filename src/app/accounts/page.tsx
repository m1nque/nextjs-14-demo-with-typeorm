'use client'

import Spreadsheet, {DataEditorProps} from "react-spreadsheet";
import {useEffect, useState} from "react";
import ClientComponent from '@/app/accounts/ClientComponent';

const ReadOnlyDataEditor: React.FC<DataEditorProps> = (props) => {
    // 평가된 셀 값이나 기본 셀 값으로 표시합니다.
    return <span>{props.cell?.value}</span>;
};

const Accounts = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/accounts').then(response => {
            return response.json()
        }).then((response) => {
            const res = response as any[];
            // console.log(res?.slice(0, 5));
            setData(res.slice(0, 5).map((e) => {
                return [
                    {
                        value: e.subscription_id
                    },
                    {
                        value: e.product_json.name
                    },
                    {
                        value: e.product_json.salePrice
                    }
                ]
            }));
        })
    }, []);

    return (
        <>
            <ClientComponent />
            <Spreadsheet data={data} darkMode={false} DataEditor={ReadOnlyDataEditor}/>
        </>
    );
}


export default Accounts;
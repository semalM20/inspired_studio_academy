import React, { useEffect, useState } from 'react'
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import moment from 'moment';

const ShowQueries = () => {

    const [allQueries, setAllQueries] = useState([]);

    const fetchAllSlots = async () => {
        const fetchData = await fetch(SummaryApi.getFinancePlanQueries.url, {
            method: SummaryApi.getFinancePlanQueries.method,
            credentials: "include",
        });

        const dataResponse = await fetchData.json();

        if (dataResponse.success) {
            setAllQueries(dataResponse.data);
        }
        if (dataResponse.error) {
            toast.error(dataResponse.message);
        }
    };

    useEffect(() => {
        fetchAllSlots();
    }, []);

    return (
        <div className="pb-4 bg-white">
            <table className="w-full userTable">
                <thead>
                    <tr className="bg-black text-white">
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Query</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {allQueries.map((el, index) => {
                        return (
                            <tr key={index + 1}>
                                <td key={index + 2}>{index + 1}</td>
                                <td key={index + 3}>{el?.name}</td>
                                <td key={index + 4}>{el?.email}</td>
                                <td key={index + 5}>{el?.phone}</td>
                                <td key={index + 6}>{el?.query}</td>
                                <td key={index + 7}>{moment(el?.createdAt).format("LL")}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowQueries
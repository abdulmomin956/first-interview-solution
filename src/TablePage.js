import React, { useEffect, useState } from 'react';
import axios from './API/axios';

const TablePage = () => {
    document.title = 'Table Page'
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [canPreviousPage, setCanPreviousPage] = useState(false);
    const [canNextPage, setCanNextPage] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    function previousPage() {
        setPage(page - 1);
    }
    function nextPage() {
        setPage(page + 1);
    }
    useEffect(() => {
        //TODO
        axios.get(`/api/v1/model?page=${page}&limit=${limit}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setPageCount(response.data.num_pages)
                setData(response.data.list)
                setPage(response.data.page)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [limit, page]);

    useEffect(() => {
        if (page === 1) {
            setCanPreviousPage(false)
        }
        else {
            setCanPreviousPage(true)
        }
    }, [page])

    useEffect(() => {
        if (page === pageCount) {
            setCanNextPage(false)
        }
        else {
            setCanNextPage(true)
        }
    }, [page, pageCount])
    return (
        <div>
            <table style={{ margin: '15px auto' }}>
                <thead >
                    <tr >
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (<tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                            <td>{row.description}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
            <div>
                <span>Page {page} of {pageCount}</span>
                <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); }}>
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={previousPage} disabled={!canPreviousPage}>
                    &#x02190;
                </button>
                <button onClick={nextPage} disabled={!canNextPage}>
                    &#x02192;
                </button>
            </div>
        </div>
    );


};

export default TablePage;
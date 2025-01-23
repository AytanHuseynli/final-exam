import React, { useEffect, useState } from 'react'

function Flowers() {
    const [details, setdetails] = useState([]);
    const [search, setsearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/')
            .then((response) => response.json())
            .then((data) => setdetails(data))
            .catch((error) => console.error(error));
    }, []);


    return (
        <>
            <input type="text"
                value={search}
            />
            <div className="container">
                <div className="cards">
                    <h1>Users</h1>
                    {
                        details.map(item => (
                            <div key={item.id}>
                                {
                                    item.img
                                }
                                {
                                    item.description
                                }
                                {
                                    item.price
                                }
                            </div>
                        ))
                    }
                </div>

            </div>




        </>
    )
}

export default Flowers
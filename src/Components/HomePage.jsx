import React from 'react'

const HomePage = () => {
    const user = localStorage.getItem("user");
    const parseData = JSON.parse(user)

    console.log("parseData",parseData);
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className='d-flex justify-content-between align-items-center'>
                        <h5>{parseData?.firstname}</h5>
                        <h5>Logout</h5>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
import React  from 'react'

function PostSummary() {
    
    return (
        <div>
            <div className="card text-center m-3">
                <div className="card-body">
                    <h5 className="card-title text-center">Tea</h5>
                    <p className="card-text">taste different today </p>
                    <p className="card-text text-right"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}

export default PostSummary

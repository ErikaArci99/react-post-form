import React from 'react'

const PostCards = () => {
    return (
        <>
            <div className="col-12 col-lg-4 mt-4">
                <div className="card">
                    <div className="card-header">Titolo del post</div>
                    <div className="card-body">
                        <div className="mb-2">
                            <strong>Autore:</strong>
                        </div>
                        <div className="mb-3">
                            <p></p>
                        </div>
                        <div className="mt-3">
                            <span className="badge bg-light text-dark px-3 py-2 border rounded-pill">
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostCards
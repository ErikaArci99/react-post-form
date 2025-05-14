import React from 'react'

const PostForm = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <div className="row w-100">
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <input
                                type="text"
                                placeholder="Autore"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <input
                                type="text"
                                placeholder="Titolo"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                placeholder="Testo del post"
                                className="form-control"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="publicPost"
                                />
                                <label className="form-check-label" htmlFor="publicPost">
                                    Rendi pubblico
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm
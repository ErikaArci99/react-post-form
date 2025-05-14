import React from 'react'

const PostForm = () => {
    return (
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

    )
}

export default PostForm
import React from 'react';

const PostCards = ({ postData }) => {
    if (!postData) return null; // Non renderizzare nulla finché non ci sono dati

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">{postData.title}</div>
                        <div className="card-body">
                            <div className="mb-2">
                                <strong>Autore:</strong> {postData.author}
                            </div>
                            <div className="mb-3">
                                <p>{postData.body}</p>
                            </div>
                            <div className="mt-3">
                                <span className="badge bg-light text-dark px-3 py-2 border rounded-pill">
                                    {postData.public ? 'Pubblico' : 'Bozza'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCards;
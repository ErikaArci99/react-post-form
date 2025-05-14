import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ setPostData }) => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(
            'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
            formData
        )
            .then(response => {
                setPostData(response.data);  // Impostiamo i dati ricevuti come stato in App.jsx
                console.log('Post inviato con successo:', response.data);
            })
            .catch(error => {
                console.error('Errore durante l\'invio del post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="container d-flex justify-content-center mt-5">
            <div className="row w-100">
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <input
                                type="text"
                                name="author"
                                placeholder="Autore"
                                className="form-control"
                                value={formData.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <input
                                type="text"
                                name="title"
                                placeholder="Titolo"
                                className="form-control"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                name="body"
                                placeholder="Testo del post"
                                className="form-control"
                                rows="5"
                                value={formData.body}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="publicPost"
                                    name="public"
                                    checked={formData.public}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="publicPost">
                                    Rendi pubblico
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Invia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PostForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            alert('Registracija je bila uspešna!');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Registriraj se</h2>
            <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Uporabniško ime</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nastavi si uporabniško ime"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Geslo</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nastavi si geslo"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nastavi si email"
                        required
                    />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary w-100">Registriraj se</button>
            </form>
            <div className="container mt-6 p-4 text-center">
                <p className="mb-2">Za vpis klikni:</p>
                <Link to="/LoginPage" className="Link">
                    Tukaj
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm;

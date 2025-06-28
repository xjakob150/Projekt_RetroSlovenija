import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Vpis</h2>
            <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Uporabniško ime</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Vpiši svoje geslo"
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
                        placeholder="Vpiši svoje geslo"
                        required
                    />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="container mt-6 p-4 text-center">
                <p className="mb-2">Za registracijo klikni:</p>
                <Link to="/RegisterPage" className="Link">
                    Tukaj
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;

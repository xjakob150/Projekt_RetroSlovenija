import { useEffect, useState } from 'react';

function GameCards() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {games.map((game) => (
          <div key={game.game_id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 shadow-lg border border-dark">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center"><strong>{game.title}</strong></h5>
                <hr className="border border-dark my-3 w-100" />
                <img
                  src={game.image_path}
                  alt={game.title}
                  className="card-img-top my-3"
                  style={{ objectFit: 'contain', height: '150px' }}
                />
                <hr className="border border-dark my-3 w-100" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li><strong>Platforma:</strong> {game.platform}</li>
                  <li><strong>Cena:</strong> ${game.price}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameCards;

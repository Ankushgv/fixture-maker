import { useLocation, useNavigate } from 'react-router-dom';

const Fixture = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Data passed from CreateMatch component
  const match = location.state?.match;
  const players = match?.players || [];

  // Fixture generator
  const generateFixtures = (playerList: string[]) => {
    let totalPlayers = [...playerList];
    
    // If odd, add a dummy player to represent someone sitting out
    if (totalPlayers.length % 2 !== 0) {
      totalPlayers.push("Resting");
    }

    const n = totalPlayers.length;
    const rounds = [];
    const totalRounds = n - 1;

    for (let r = 0; r < totalRounds; r++) {
      const roundMatches = [];
      for (let i = 0; i < n/2; i++) {
        const p1 = totalPlayers[i];
        const p2 = totalPlayers[n-1-i];
        roundMatches.push({ p1, p2 });
      }
      rounds.push({ roundNumber: r+1, matches: roundMatches });

      // Rotate: Keep first player fixed, move others clockwise
      totalPlayers.splice(1, 0, totalPlayers.pop()!);
    }
    return rounds;
  };

  const allRounds = generateFixtures(players);

  // Check so user cannot directly access /fixture
  if (!match) {
    return (
      <div className="container mt-5 text-center">
        <h3>No match data found.</h3>
        <button className="btn btn-primary" onClick={() => navigate('/create')}>Create Match</button>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Badminton Fixtures: Court {match.courtNumber}</h2>
        <button className="btn btn-danger" onClick={() => navigate('/')}>End Session</button>
      </div>

      <div className="row">
        {allRounds.map((round) => (
          <div key={round.roundNumber} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-dark text-white fw-bold">
                Round {round.roundNumber}
              </div>
              <div className="card-body">
                {round.matches.map((m, idx) => (
                  <div key={idx} className="d-flex justify-content-between border-bottom py-2">
                    {m.p2 === "Resting" ? (
                      <span>{m.p1} Resting
                      </span>
                    ) : (
                      <>
                        <span className="fw-medium">{m.p1}</span>
                        <span className="text-primary fw-bold">&</span>
                        <span className="fw-medium">{m.p2}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixture;
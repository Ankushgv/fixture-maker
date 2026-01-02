import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMatch } from "../api";

const CreateMatch = function () {
  
  const [inputs, setInputs] = useState(['']);
  const [points, setPoints] = useState(21);
  const [courts, setCourts] = useState("1");

  const nav = useNavigate();

  const addPlayer = () => {
    setInputs([...inputs, '']);
  };

  const deletePlayer = () => {
    // To prevent deleting last input
    if (inputs.length > 1) { 
      const newInputs = [...inputs];
      newInputs.pop();
      setInputs(newInputs);
    }
  };

  const handleChange = (index: number, value: string) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const startMatch = async () => {
    // To clear empty input
    const validPlayers = inputs.filter(name => name.trim() !== "");
    // To check atleast 2 plalyers are enterd
    if (validPlayers.length < 2) {
      alert("Please enter at least 2 players!");
      return;
    }

    // Sending data
    const matchData = {
      players: validPlayers,
      totalPoints: points,
      courtNumber: courts
    };

    try {
      const response = await createMatch(matchData);
      nav('/fixtures', { state: { match: response } });
    } catch (error) {
      console.error("Error creating match:", error);
    }
  };

  return (
    <>
      <form className="form-control">
        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <label className="col-form-label"> Total Points: </label>
          </div>
          <div className="col-auto">
            <input 
              type="number" 
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              placeholder="ex: 21" 
              min={0} max={30} 
              className="form-control" 
            />
          </div>
        </div>

        <div className="row align-items-top mb-3">
          <div className="col-auto">
            <label className="col-form-label">Add Players: </label>
          </div>
          <div className="col-auto">
            {inputs.map((value, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder={`Player ${index + 1}`}
                  className="form-control"
                />
              </div>
            ))}

            <div className="mt-2">
              <button type="button" onClick={addPlayer} className="btn btn-success me-2">Add a player</button>
              <button type="button" onClick={deletePlayer} className="btn btn-danger">Delete a player</button>
            </div>
          </div>
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <label className="col-form-label"> No. of Courts: </label>
          </div>
          <div className="col-auto">
            <input 
              type="text" 
              value={courts}
              onChange={(e) => setCourts(e.target.value)}
              placeholder="1" 
              className="form-control" 
            />
          </div>
        </div>

        <button type='button' onClick={startMatch} className="btn btn-primary">
          Start Match
        </button>
      </form>
    </>
  );
}

export default CreateMatch;
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateMatch = function () {

  const [inputs, setInputs] = useState([''])
  const nav = useNavigate()

  const addPlayer = () => {
    setInputs([...inputs, ''])
  }

  const deletePlayer = () => {
    const newInputs = [...inputs]
    newInputs.pop()
    setInputs(newInputs)
  }

  const handleChange = (index: number, value: string) => {
    const updated = [...inputs]
    updated[index] = value
    setInputs(updated)
  }

  const startMatch = () => {
    nav('/fixtures')
  }

  return (
    <>
      <form className="form-control">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label"> Total Points: </label>
          </div>
          <div className="col-auto">
            <input type="number" placeholder="ex: 21" min={0} max={30} className="form-control"></input>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Add Players: </label>
          </div>
          <div className="col-auto">
            {inputs.map((value, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder='John Doe'
                  className="form-control"
                />
              </div>
            ))}

            <div>
              <button type="button" onClick={addPlayer} className="btn btn-success">Add a player</button>
              <button type="button" onClick={deletePlayer} className="btn btn-danger">Delete a player</button>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label"> No. of Courts: </label>
          </div>
          <div className="col-auto">
            <input type="number" placeholder="1" min={1} max={10} className="form-control"></input>
          </div>
        </div>
        <button type='button' onClick={startMatch} className="btn btn-primary">Start Match</button>
      </form>
    </>
  )
}

export default CreateMatch
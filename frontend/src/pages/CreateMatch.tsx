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
      <form>
        <div>
          <label> Total Points: </label>
          <input type="number" placeholder="ex: 21" min={0} max={30}></input>
        </div>
        <div>
          <label>Add Players: </label>

          {inputs.map((value, index) => (
            <div key={index}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder='John Doe'
            />
            </div>
          ))}
          <div>
            <button type="button" onClick={addPlayer}>Add a player</button>
            <button type="button" onClick={deletePlayer}>Delete a player</button>
          </div>
        </div>
        <div>
          <label> Number of Courts: </label>
          <input type="number" placeholder="1" min={1} max={10}></input>
        </div>
        <button type='button' onClick={startMatch}>Start Match</button>
      </form>
    </>
  )
}

export default CreateMatch
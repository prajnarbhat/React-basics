import { useState } from "react";

const FormData = () => {

    const [ data, setData] = useState([]);
    const [ userName, setUserName] = useState("")
    const [ workoutType, setWType] = useState("");
    const [ workoutMin, setWMin] = useState("")

    const mergeWorktype = (workouts) => {

        return workouts.reduce((acc,workout) => {
            let existingWorkouttype = acc.find(w => w.workoutType == workout.workoutType)

            console.log("Exising wtype data:", existingWorkouttype);
            if(existingWorkouttype) {
                existingWorkouttype.workoutMin += Number(workout.workoutMin)
            }
            else {
                acc.push({...workout,workoutMin: Number(workout.workoutMin)})
            }
            return acc;
        },[])
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submited")

        const newWorkouts = {
            workoutType: workoutType,
            workoutMin: workoutMin
        };

        const updatedData = data.map(user => {
            if ( user.userName === userName) {
                const dataworktype = mergeWorktype([...user.workouts,newWorkouts])
                return {...user,workouts: dataworktype}
            }
            return user;
        })

        if(!data.some(user => user.userName == userName)) {
            updatedData.push({userName, workouts: [newWorkouts]})
        }

        setData(updatedData)

        console.log("Updated Data:",updatedData)
    }


    return (
        <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label> Username </label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label> Workout type </label>
                    <select value={workoutType} onChange={(e) => setWType(e.target.value)}>
                        <option> Select a workout type </option>
                        <option> Cycling </option>
                        <option> Yoga </option>
                        <option> Running </option>
                    </select>
                </div>
                <div className="form-element">
                    <label> Workout Minute </label>
                    <input type="number" value={workoutMin} onChange={(e) => setWMin(e.target.value)}/>
                </div>
                <button type="submit"> Submit </button>
            </form>
        </div>
        </div>
    )
}

export default FormData;
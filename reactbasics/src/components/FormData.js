import { useState } from "react";

const FormData = () => {

    const [ data, setData] = useState([]);
    const [ userName, setUserName] = useState("")
    const [ workoutType, setWType] = useState("");
    const [ workoutMin, setWMin] = useState("")


    const mergedWorkoutMin = (workouts) => {

        return workouts.reduce((acc,workouts) => {
            let exisistingworkouttye = acc.find(w => w.workoutType == workouts.workoutType);

            if(exisistingworkouttye) {
                exisistingworkouttye.workoutMin += Number(workouts.workoutMin);
            }

            else {
                acc.push({...workouts, workoutMin: Number(workouts.workoutMin)})
            }
            return acc;
        },[])
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const newuserData = {
            workoutType : workoutType,
            workoutMin : workoutMin
        };
        
        // let result2 = [...data,{userName,workouts:[newuserData]}]

        const updatedData = data.map(user => {
            if(user.userName === userName) {
                const updatedworkouts = mergedWorkoutMin([...user.workouts,newuserData]);
                return {...user, workouts: updatedworkouts}
            }
            return user;
        })

        if(!data.some(user => user.userName === userName)) {
            updatedData.push({userName, workouts: [newuserData]})
        }
        
        
        setData(updatedData)
        console.log(updatedData)
    }



    return (
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
    )
}

export default FormData;
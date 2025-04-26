import { useContext, useEffect, useState } from "react";
import { DataContext } from "./ContextProvider";

const TableData = () => {
    const { data } = useContext(DataContext);
    const [page, setPage] = useState(1);
    const [searchValue, setValue] = useState("");
    const [workoutValue, setWorkoutValue] = useState("");
    const [userData, setData] = useState([]);

    const itemsPerPage = 3;

    const selectedPageHandler = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage <= Math.ceil(userData.length / itemsPerPage) &&
            selectedPage !== page
        ) {
            setPage(selectedPage);
        }
    };

    const workoutOptions = ["yoga", "running", "swimming", "cycling"];

    const applyFilterByName = (result) => {
        if (!searchValue) return [];

        return result.filter((user) =>
            user.userName.toLowerCase().includes(searchValue.toLowerCase())
        );
    };

    const applyFilterByWorkoutType = (result) => {
        if (!workoutValue) return [];

        return result.filter((user) =>
            user.workouts.some((w) =>
                w.workoutType.toLowerCase().includes(workoutValue.toLowerCase())
            )
        );
    };

    useEffect(() => {
        if (!data) return;

        const result = [...data];

        const filterByName = applyFilterByName(result);
        const filterByWorkout = applyFilterByWorkoutType(result);

        const filteredData = [...new Set([...filterByName, ...filterByWorkout])];

        setData(searchValue || workoutValue ? filteredData : result);
        setPage(1);
    }, [searchValue, workoutValue, data]);

    const paginatedData = userData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <div>
                <div>
                    <input
                        type="search"
                        value={searchValue}
                        placeholder="Search by username"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        value={workoutValue}
                        onChange={(e) => setWorkoutValue(e.target.value)}
                    >
                        <option value="">Select a workout type</option>
                        {workoutOptions.map((w, index) => (
                            <option key={index} value={w}>
                                {w}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>WorkoutType</th>
                        <th>WorkoutMin</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.userName}</td>
                            <td>
                                {user.workouts
                                    .map((w) => w.workoutType)
                                    .join(", ")}
                            </td>
                            <td>
                                {user.workouts.reduce(
                                    (acc, w) => acc + w.workoutMin,
                                    0
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {userData.length > itemsPerPage && (
                <div className="pagination">
                    <span
                        className={page > 1 ? "" : "pagination_disabled"}
                        onClick={() => selectedPageHandler(page - 1)}
                    >
                        <button>Previous</button>
                    </span>

                    {[...Array(Math.ceil(userData.length / itemsPerPage))].map(
                        (_, index) => (
                            <span
                                key={index}
                                className={
                                    page === index + 1
                                        ? "pagination_selected"
                                        : ""
                                }
                                onClick={() => selectedPageHandler(index + 1)}
                            >
                                {index + 1}
                            </span>
                        )
                    )}

                    <span
                        className={
                            page < Math.ceil(userData.length / itemsPerPage)
                                ? ""
                                : "pagination_disabled"
                        }
                        onClick={() => selectedPageHandler(page + 1)}
                    >
                        <button>Next</button>
                    </span>
                </div>
            )}
        </>
    );
};

export default TableData;

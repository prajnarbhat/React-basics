/*const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 60 },
  { name: "David", score: 30 }
];*/

/*Given an array of students with their scores, display their names.
Show names in green if they passed (score ≥ 50), red if they failed.*/

function Problem9(props) {
    const arrayOfStudents = props.students;
    console.log("array:", arrayOfStudents)
    const listItems = (
        arrayOfStudents.map((student,index) => (
            <li key={index} style={{ color: student.score >=50 ? "green" : "red"}}> {student.name} </li>
        ))
    )
    return (
        <>
            <h3> Students </h3>
            <ul> {listItems} </ul>
        </>
    )

}
export default Problem9;
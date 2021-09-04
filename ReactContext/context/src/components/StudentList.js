// import StudentItem from "./StudentItem";
// const StudentList = ({students, changeColor}) => {
//   return (
//     <>
//       <h2>Student List</h2>
//       {students.map((student) => ( 
//           <StudentItem key={student.name} student={student} changeColor={changeColor} />
//       ))}
//     </>
//   );
// };
// export default StudentList;


import { useContext } from "react";
import StudentItem from "./StudentItem";
import { StudentContext } from "../context/StudentContext";
const StudentList = () => {
  const {students} = useContext(StudentContext);
  return (
    <>
      <h2>Student List</h2>
      {students.map((student) => ( 
          <StudentItem key={student.name} student={student}/>
      ))}
    </>
  );
};
export default StudentList;
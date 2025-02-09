import "../style/StudentData.css";

type StudentDataProps = {
  name?: string;
  age?: number;
  grade?: number;
};

export function StudentData(props: StudentDataProps) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Alter: {props.age}</p>
      <p>Note: {props.grade}</p>
    </div>
  );
}

export function StudentDefault({
  name = "Max Mustermann",
  age = 18,
  grade = 1.0,
}: StudentDataProps) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Alter: {age}</p>
      <p>Note: {grade}</p>
    </div>
  );
}

export default StudentData;

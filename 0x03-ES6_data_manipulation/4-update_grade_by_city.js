export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsByLocation = students.filter((element) => element.location === city);

  for (const item of studentsByLocation) {
    item.grade = 'N/A';
  }

  const updatedGrade = studentsByLocation.map((element) => {
    //  error  Assignment to property of function parameter 'element'  no-param-reassign
    const copyElement = element;

    for (const property of newGrade) {
      if (copyElement.id === property.studentId) copyElement.grade = property.grade;
    }
    return copyElement;
  });
  return updatedGrade;
}

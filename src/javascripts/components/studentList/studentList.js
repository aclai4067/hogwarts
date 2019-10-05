import './studentList.scss';
import utilities from '../../helpers/utilities';
import students from '../../helpers/data/studentData';
import studentCard from '../studentCard/studentCard';

const createStudentList = () => {
  const studentArr = students.getStudents();
  let studentString = '<ul class="studentList">';
  for (let i = 0; i < studentArr.length; i += 1) {
    studentString += studentCard.createStudentCard(studentArr[i]);
  }
  studentString += '</ul>';

  utilities.printToDom('studentContainer', studentString);
};

export default { createStudentList };

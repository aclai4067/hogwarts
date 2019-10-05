import './studentList.scss';
import utilities from '../../helpers/utilities';
import students from '../../helpers/data/studentData';
import houseData from '../../helpers/data/houseData';
import studentCard from '../studentCard/studentCard';

const createStudentList = () => {
  const studentArr = students.getStudents();
  const houseArr = houseData.getHouses();
  let studentString = '<ul class="studentList">';
  for (let i = 0; i < studentArr.length; i += 1) {
    for (let n = 0; n < houseArr.length; n += 1) {
      if (studentArr[i].houseId === houseArr[n].id) {
        studentString += studentCard.createStudentCard(studentArr[i], houseArr[n]);
      }
    }
  }
  studentString += '</ul>';

  utilities.printToDom('studentContainer', studentString);
};

export default { createStudentList };

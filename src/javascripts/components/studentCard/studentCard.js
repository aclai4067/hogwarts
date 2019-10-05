import './studentCard.scss';

const createStudentCard = (student, house) => {
  const studentCardString = `
   <li class='student-${house.name.toLowerCase()}'>
     <div class='imgHolder '>
       <img src=${student.picture} alt=${student.name} />
     </div>
    <h2>${student.name}</h2>
   </li>
  `;
  return studentCardString;
};

export default { createStudentCard };

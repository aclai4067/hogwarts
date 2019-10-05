import './studentCard.scss';

const createStudentCard = (student) => {
  const studentCardString = `
   <li class='studentCard'>
     <div class='imgHolder'>
       <img src=${student.picture} alt=${student.name} />
     </div>
    <h2>${student.name}</h2>
   </li>
  `;
  return studentCardString;
};

export default { createStudentCard };

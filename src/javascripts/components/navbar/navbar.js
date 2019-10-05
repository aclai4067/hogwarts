import './navbar.scss';
import utilities from '../../helpers/utilities';

const printNavbar = () => {
  const navString = `
    <nav>
      <a href='#' class='brand'>Hogwarts</a>
      <ul>
        <li>
          <a href='#' class='home'>Home</a>
        </li>
      </ul>
    </nav>
  `;
  utilities.printToDom('navContainer', navString);
};

export default { printNavbar };

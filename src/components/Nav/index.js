import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* click handler to set the value of contactSelected based on the user's selection */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {/* If the value of contactSelected is true, which means that the user selected Contact...*/}
          {/* we want to add the CSS class navActive, which will illuminate the background.  */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            {/* set the value of contactSelected to true when selecting the Contact item in the menu */}
            <span onClick={() => {
              setContactSelected(true);
            }}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
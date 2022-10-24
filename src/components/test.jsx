import React, { useEffect } from "react";

function pagination() {
  const pages = 10;

  const numberOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = React.useState(1);
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = React.useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...numberOfPages];
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, "...", numberOfPages.length];
    }

    setArrOfCurrentButtons(tempNumberOfPages);
  }, [currentButton]);

  return (
    <div>
      <h1>Pagination</h1>
      <div className="pagination-container">
        <a
          href="!#"
          className=""
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          {" "}
          prev
        </a>
        {arrOfCurrentButtons.map((item) => {
          return <L onClick={() => setCurrentButton(item)}>{item}</L>;
        })}
        <a
          href="!#"
          className=""
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
        >
          next
        </a>
      </div>
    </div>
  );
}

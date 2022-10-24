import { createContext, useState, useEffect } from "react";

const context = createContext();

export default function ContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const USER_PER_PAGE = 9;
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const data = await response.json();
        setUsers(data.results);
        setTotalPages(Math.ceil(data.results.length / USER_PER_PAGE));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / USER_PER_PAGE));
  }, [users]);

  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <context.Provider
      value={{
        toggle,
        setToggle,
        loading,
        users,
        selectedUsers,
        page,
        setPage,
        pages,
        setUsers,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { context };

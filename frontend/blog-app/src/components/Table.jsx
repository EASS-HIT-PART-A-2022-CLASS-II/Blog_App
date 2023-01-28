import React, { useContext, useEffect, useState } from "react";

import ErrorMessage from "./ErrorMessage";
import BlogModal from "./BlogModal";
import { UserContext } from "../context/UserContext";

const Table = () => {
  const [token] = useContext(UserContext);
  const [blogs, setBlogs] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const handleUpdate = async (id) => {
    setId(id);
    setActiveModal(true);
  };

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(`http://localhost:8000/blog/${id}`, requestOptions);
    if (!response.ok) {
      setErrorMessage("Failed to delete blog");
    }

    getBlogs();
  };

  const getBlogs = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("http://localhost:8000/blog/", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the blogs");
    } else {
      const data = await response.json();
      setBlogs(data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleModal = () => {
    setActiveModal(!activeModal);
    getBlogs();
    setId(null);
  };

  return (
    <>
      <BlogModal
        active={activeModal}
        handleModal={handleModal}
        token={token}
        id={id}
        setErrorMessage={setErrorMessage}
      />
      <button
        className="button is-fullwidth mb-5 is-primary"
        onClick={() => setActiveModal(true)}
      >
        Create Blog
      </button>
      <ErrorMessage message={errorMessage} />
      {loaded && blogs ? (
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.body}</td>
                <td>
                  <button
                    className="button mr-2 is-info is-light"
                    onClick={() => handleUpdate(blog.id)}
                  >
                    Update
                  </button>
                  <button
                    className="button mr-2 is-danger is-light"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Table;

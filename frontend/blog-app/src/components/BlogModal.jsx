import React, { useEffect, useState } from "react";

const BlogModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
   
  useEffect(() => {
    const getBlog = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch(`http://localhost:8000/blog/${id}`, requestOptions);

      if (!response.ok) {
        setErrorMessage("Could not get the blog");
      } else {
        const data = await response.json();
        setTitle(data.title);
        setNote(data.note);
      }
    };

    if (id) {
      getBlog();
    }
  }, [id, token]);

  const cleanFormData = () => {
    setTitle("");
    setNote("");
	
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
	title: title,
	note: note,
      }),
    };
    const response = await fetch("http://localhost:8000/blog/", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong when creating blog");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
	title: title,
        note: note,
      }),
    };
    const response = await fetch(`http://localhost:8000/blog/${id}`, requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong when updating blog");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary-light">
          <h1 className="modal-card-title">
            {id ? "Update Blog" : "Create Blog"}
          </h1>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Note</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateBlog}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateBlog}>
              Create
            </button>
          )}
          <button className="button" onClick={handleModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BlogModal;

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AdminMovieDetail() {
  const [movieDetailOrigin, setMovieDetailOrigin] = useState({});
  const [movieDetailChange, setMovieDetailChange] = useState({});
  const [saveChangeMsg, setSaveChangeMsg] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:9999/movie/${movieId}`)
      .then((response) => response.data)
      .then((data) => {
        setMovieDetailOrigin(data);
        setMovieDetailChange(data);
      });
  }, []);

  const onChangeMovieDetailChange = (prop, value) => {
    // Create a new object by spreading the existing state
    const updatedMovieDetailChange = { ...movieDetailChange };
    // Update the property
    updatedMovieDetailChange[prop] = value;
    // Set the updated object as the new state
    setMovieDetailChange(updatedMovieDetailChange);
  };

  const handleSaveChange = () => {
    axios
      .put(`http://localhost:9999/movie/${movieId}`, movieDetailChange)
      .then((response) => response.data)
      .then((data) => {
        setMovieDetailOrigin(data);
        setMovieDetailChange(data);
        setSaveChangeMsg("Save Change success full");
        setTimeout(() => setSaveChangeMsg(""), 3000);
      });
  };

  const handleDiscardChange = () => {
    const isConfirm = window.confirm("Are you sure discard change");
    if (isConfirm) {
      setMovieDetailChange(movieDetailOrigin);
    }
  };

  return (
    <div id="adminMovie">
      <form className="container">
        <div className="row">
          <div className="col-md-12">
            {saveChangeMsg && (
              <div class="alert alert-success fade in">
                <strong>Success!</strong> Save Change success full
              </div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label>Name:</label>
            <input
              value={movieDetailChange.name}
              class="form-control"
              onChange={(e) =>
                onChangeMovieDetailChange("name", e.target.value)
              }
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label>Status:</label>
            <br></br>
            <input
              type="radio"
              checked={movieDetailChange.status}
              name="status"
              onClick={() => onChangeMovieDetailChange("status", true)}
            />{" "}
            Active
            <input
              type="radio"
              checked={!movieDetailChange.status}
              name="status"
              style={{ marginLeft: 20 }}
              onClick={() => onChangeMovieDetailChange("status", false)}
            />{" "}
            Inactive
          </div>
          <div className="form-group col-md-12">
            <label>Description:</label>
            <textarea
              onChange={(e) =>
                onChangeMovieDetailChange("description", e.target.value)
              }
              class="form-control"
              rows="5"
              value={movieDetailChange.description}
            ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label>Release Year:</label>
            <input
              class="form-control"
              value={movieDetailChange.release_year}
              onChange={(e) =>
                onChangeMovieDetailChange("release_year", e.target.value)
              }
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label>Director:</label>
            <input
              class="form-control"
              value={movieDetailChange.director}
              onChange={(e) =>
                onChangeMovieDetailChange("director", e.target.value)
              }
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label>
              Img URL:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={movieDetailChange.img_url}
              >
                <i className="fa fa-eye"></i>
              </a>
            </label>
            <input
              class="form-control"
              value={movieDetailChange.img_url}
              onChange={(e) =>
                onChangeMovieDetailChange("img_url", e.target.value)
              }
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label>
              Video URL:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={movieDetailChange.trailers_url}
              >
                <i className="fa fa-eye"></i>
              </a>
            </label>
            <input
              class="form-control"
              value={movieDetailChange.trailers_url}
              onChange={(e) =>
                onChangeMovieDetailChange("trailers_url", e.target.value)
              }
            ></input>
          </div>
          <div className="form-group col-md-12">
            <button
              onClick={handleSaveChange}
              type="button"
              className="btn btn-primary"
            >
              Save Change
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleDiscardChange}
            >
              Discard Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminMovieDetail;

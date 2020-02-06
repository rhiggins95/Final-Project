import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const params = useParams();
  const [imageToUpload, setImageToUpload] = useState("");

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageToUpload);
    const res = await axios.post(`/api/image/${params.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={e => {
            setImageToUpload(e.target.files[0]);
          }}
        />
        <button>Upload</button>
      </form>
    </div>
  );
}

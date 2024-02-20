import React, { useState } from 'react'
import Header from './Header'

const FileUpload = () => {
  const [selFile, setSelFile] = useState('');
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  return (
    <>
      <Header />
      <section>
        <form>
          <input type="file" name="avatar" onChange={uploadFile}/>
          <button type="submit">
            Submit
          </button>
        </form>

        {/* <form action="/stats" enctype="multipart/form-data" method="post">
          <div class="form-group">
            <input type="file" class="form-control-file" name="uploaded_file" />
            <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers" />
            <input type="submit" value="Get me the stats!" class="btn btn-default" />
          </div>
        </form> */}

      </section>
    </>
  )
}

export default FileUpload
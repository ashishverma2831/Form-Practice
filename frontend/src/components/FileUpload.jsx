import React, { useState } from 'react'
import Header from './Header'
import { useFormik } from 'formik'

const FileUpload = () => {
  
  // const imageUpload = useFormik({
  //   initialValues: {
  //     avatar: ''
  //   },
  //     onSubmit: values => { 
  //       console.log(values)
  //     }
  // })

  const [selFile, setSelFile] = useState("");
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  console.log(selFile);

  return (
    <>
      <Header />
      <section>
        <form>
        {/* <form onSubmit={imageUpload.handleSubmit}> */}
          <input type="file" id="avatar" 
          onChange={uploadFile} />
          <br/>
          <button type="submit" className='border m-5 px-3 py-2 '>
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default FileUpload
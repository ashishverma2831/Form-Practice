import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useFormik } from 'formik'

const FileUpload = () => {

  const [selFile, setSelFile] = useState('');
  const imageUpload = useFormik({
    initialValues: {
      avatar: ''
    },
      onSubmit: async values => { 
        values.avatar = selFile;
        console.log(values)
        const res = await fetch("http://localhost:3000/util/image-upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      },
      // validate: values => {
      //   let errors = {}
      //   if (!values.avatar) {
      //     errors.avatar = 'Required'
      //   }
      //   return errors
      // }
  })
 
  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
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
  
  const [imageList, setImageList] = useState([])
  const fetchImage = async () => {
   try {
    const res = await fetch("http://localhost:3000/util/get-image");
    const data = await res.json();
    setImageList(data);
    console.log(data);
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  // console.log(selFile);

  return (
    <>
      <Header />
      <section>
        {/* <form> */}
        <form onSubmit={imageUpload.handleSubmit}>
          <input type="file" id="avatar" 
          onChange={uploadFile} />
          <br/>
          <button type="submit" className='border m-5 px-3 py-2 '>
            Submit
          </button>
        </form>
      </section>
      <br/>
      <section>
        {
          imageList.map((image, index) => {
            return (
              <div key={index}>
                <img src={`http://localhost:3000/uploads/${image.avatar}`} alt={image.avatar} />
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default FileUpload
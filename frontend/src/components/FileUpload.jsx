import React from 'react'
import Header from './Header'

const FileUpload = () => {
  return (
    <>
      <Header />
      <section>
        <form action="/profile" method="post" enctype="multipart/form-data">
          <input type="file" name="avatar" />
        </form>
      </section>
    </>
  )
}

export default FileUpload
import React, { useState } from 'react'
import axios from "axios"
import Image from 'next/image'


function Addpost() {
  const [title, setTitle] = useState('dfv')
  const [picture, setPicture] = useState(null);


  const handlesubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('video', picture, picture.name);
    form_data.append('name', title);
    
    let url = 'https://pro-component-django1o1.herokuapp.com/video/vc';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err))
  };




  return (
    <div>
      <div>
        <h1>Add new posts </h1>
        <form onSubmit={handlesubmit} >
          <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" />
          <div >
            <h1 color="primary">Upload an Image </h1>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => { setPicture(e.target.files[0]) }} />
            <input type="submit" />
          </div>
        </form>
      </div>
            <Image
                  src={picture?URL.createObjectURL(picture):""}
                  alt="Picture of the author"
                  width={500}
                  height={500}
            />        
   </div>
  )
}

export default Addpost


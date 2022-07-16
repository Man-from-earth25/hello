import React, { useState } from 'react'
import axios from "axios"
import Image from 'next/image'



function Addpost() {
  const [title, setTitle] = useState('dfv')
  const [picture, setPicture] = useState(null);




const handlevideo = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', picture, picture.name);
    data.append('upload_preset', 'ml_default')
    data.append('cloud_name', 'SpaceX')
    let url = 'https://api.cloudinary.com/v1_1/SpaceX/image/upload';
    axios.post(url, data, )
    .then(res => {
      console.log('datas');
    }).catch(err => console.log(err))
};







const oplog = async () => {
    console.log(picture,picture.name);
}


    



  return (
   <>
      <div>
        <h1>Add new posts </h1>
        <form
        onSubmit={ handlevideo }
        >
          <h2 onChange={(e) => setTitle(e.target.value)} label="Post Title" />
          <div >
            <h1 color="primary">Upload an Image </h1>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => { setPicture(e.target.files[0]) }} />
            <input type="submit"
            onClick={ oplog }
            />
          </div>
        </form>
      </div>
            <Image
                  src={picture?URL.createObjectURL(picture):""}
                  alt="Picture of the author"
                  width={500}
                  height={500}
            />        
        
   </>
  )
}

export default Addpost


import axios from 'axios'



function Fileupload1() {
    
    // let formData = new FormData();
    
    const handleVideo = (e) => {
        console.log(e.target.files[0]);
        
    }
    
  return (
    <>
            
            
            <input type="file" name="video" id="video" onChange={ handleVideo }/>
            <button 
            // onClick=
            // { videUpload }
            >Click me</button>    
            
    </>
  );
}



export default Fileupload1;
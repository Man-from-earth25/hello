import axios from 'axios'
import useSWR from 'swr'
import React, {useState} from 'react'; 
import Head from 'next/head'



    
    
function getUserAccount() {
  return axios.get('https://pro-component-django1o1.herokuapp.com/api');
}

function getUserPermissions() {
  return axios.get('https://pro-component-express1o1.herokuapp.com/register');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
    console.log('acct');
    console.log('perm');
  });    





export default function Upload(data, error) {
    const [user,setUser] = useState({
        name:'',email:'', Comment:'',bff:'',stars:'',age:''
    });
    const [djgpa,setDjgpa] = useState({
        video:''
    });
    
    
    // handleVideo
    const handleVideo = (e) => {
        setDjgpa({...djgpa, 
            video: e.target.files[0],
        })        
    }
    // handleInputs
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        
        // Setuser
        setUser({...user, [name]:value});
        
        
        console.log('Input changed!');
    };
    
    // Postdata
    const handlePost = async (e) => {
        e.preventDefault();
        // let data = [];
        let error = "";
        let formData = new FormData();
        try {
            const url = 'https://pro-component-django1o1.herokuapp.com/video/c';
            const config = { headers: {'Content-Type': 'multipart/form-data'}};
            formData.append('name', user.name)
            formData.append('email', user.email)
            formData.append('Comment', user.Comment)
            formData.append('bff', user.bff)
            formData.append('age', user.age)
            formData.append('stars', user.stars)
            formData.append('video', djgpa.video[0])
            
            axios
                .post(url,formData,config)
                .then((res) => {
                    console.log('datqs');
                    console.log('data');
                    const data = res.data;
                    if (res.status === 404) {
                        console.log('noooooo');
                    }
                    if (res.status === 500 || !data || res.status === 400) {
                        console.log('noooooo');
                    }
                    else {
                        console.log('oppp');
                    }
                    if (typeof window !== "undefined") {
                        window.alert('Registration successful');
                    }            
                })
                .catch((err) => {
                    console.log(err);
                })
            
        } catch (error) {
            error = error.toString();
        }
        return {
            props: {
                data,
                error,
            },
        }
    }
        
                                                                                                                                                                                                                                                                   
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Harry1o1/pro-components/frontend/styles/Sass/Css/register4.css" type="text/css" media="all" />
            </Head>
            <h1>Signup</h1>
            <input type="text" name="name" id="name"  placeholder="Name" className="form-control1" autoComplete="off"  value={user.name} onChange={handleInputs}/>
            <input type="email" name="email" id="email"  placeholder="Email" className="form-control2" autoComplete="off"  value={user.email} onChange={handleInputs}/>
            <input type="text" name="Comment" id="Comment"  placeholder="Comment" className="form-control3" autoComplete="off"  value={user.Comment} onChange={handleInputs}/>
            <input type="text" name="bff" id="bff"  placeholder="Bff" className="form-control3" autoComplete="off"  value={user.bff} onChange={handleInputs}/>
            <input type="number" name="stars" id="stars"  placeholder="Stars" className="form-control4" autoComplete="off"  value={user.stars} onChange={handleInputs}/>
            <input type="number" name="age" id="age"  placeholder="Age" className="form-control4" autoComplete="off"  value={user.age} onChange={handleInputs}/>
            <input type="file" name="video" id="video"  placeholder="Video" className="form-control4" autoComplete="off" multiple = { true } accept = ".xls,.xlsx,.csv,.txt" onChange = { handleVideo }/>
            
            <div className="btn" onClick={handlePost}>
                Confrom
            </div>
            <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
        </>
    )
}; 



































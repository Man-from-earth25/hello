import axios from 'axios'
import useSWR from 'swr'
import React, {useState} from 'react'; 
import Head from 'next/head'



    


export default function Upload() {
    
    // let formData = new FormData();
    
    const handleVideo = (e) => {
        
        formData.append('video', e.target.files[0]);
        console.log(e.traget.files[0]);
    }
    
    // Postdata
    const handlePost = async (e) => {
        e.preventDefault();
        
    }            
                                                                                                                                                                                                                                                                   
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Harry1o1/pro-components/frontend/styles/Sass/Css/register4.css" type="text/css" media="all" />
            </Head>
            <h1>Signup</h1>
            <input type="file" name="video" id="video"  placeholder="Video" className="form-control4" autoComplete="off" multiple = { true } accept = ".xls,.xlsx,.csv,.txt" onChange = { handleVideo }/>
            
            <div className="btn" 
            onClick={ handlePost }
            >
                Confrom
            </div>
        </>
    )
}; 






































            
import Link from 'next/link'


function Express({data, error}) {
  return (
   <>
        {data.map( (curElem) => {
            return(
                <div className ="alert alert-primary" key={curElem.id}>
                    <Link passHref href={`/blog1/${curElem._id}`}>
                        <h3>{curElem.name}</h3>
                    </Link>
                    <h4>{curElem.email}</h4>
                    <h5>{curElem.work}</h5>
                    <h5>{curElem.phone}</h5>
                    <h5>{curElem.password}</h5>
                    <h5>{curElem.cpassword}</h5>
                    <h6>{curElem._id}</h6>                    
                </div>            
            );
        })}   
        <h1 className="">Hi!</h1>
    </>
  );
}



export async function getStaticProps() {
        
        let data = [];
        let error = "";
        try {
            const res = await fetch(
                    "https://pro-component-express1o1.herokuapp.com/register", {
                    method: "GET",
                    headers: {
                        // update with your user-agent
                        // "Access-Control-Allow-Headers",
                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                        Accept: "application/json; charset=UTF-8",
                        'Content-Type': 'application/json'
                    }
                }
            );
            data = await res.json();
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


export default Express;




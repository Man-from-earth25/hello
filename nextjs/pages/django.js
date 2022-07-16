import Link from 'next/link'



function Django({data, error}) {
  return (
   <>
        {data.map( (curElem) => {
            return(
                <div className ="alert alert-primary" key={curElem.id}>
                    <Link passHref href={`/blog2/${curElem.id}`}>
                        <h3>{curElem.name}</h3>
                    </Link>
                    <h4>{curElem.email}</h4>
                    <h5>{curElem.Comment}</h5>
                    <h5>{curElem.bff}</h5>
                    <h5>{curElem.stars}</h5>
                    <h5>{curElem.age}</h5>
                    <h6>{curElem.id}</h6>
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
                    "https://pro-component-django1o1.herokuapp.com/api", {
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


export default Django;

                    // </Link>
                    // <Link passHref href={`/blog/${curElem.id}`}>



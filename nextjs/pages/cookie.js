



function Cookie(data, error) {
  return (
    <>
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </>
  );
}






export async function getStaticProps() {
        
        let data = [];
        let error = "";
        try {
            const res = await fetch(
                    "https://pro-component-express1o1.herokuapp.com", {
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


export default Cookie;



// Yeh Nextjs
import { useRouter } from 'next/router'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())



function PageNo1() {

    const router = useRouter();
    const pageNumber = router.query.pageno1;
    
    const { data, error } = useSWR(`https://pro-component-express1o1.herokuapp.com/register/${pageNumber}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
    {console.log(data)}

};


export default PageNo1;



























// Changed
// import { useRouter } from 'next/router'



//  function PageNo1({data} : {data : any}) {

//     const router = useRouter();
//     const pageNumber = router.query.pageno1;
//     return (
//         <>
//             <h1>Hello from { pageNumber } page</h1>
//         </>
//     )
// };


// export default PageNo1;                                                                                                                                                                  



// export async function getStaticProps(context) {
        
//         const id = context.params.pageNo;
//         const res = await fetch(`https://pro-component-express1o1.herokuapp.com/register/${id}`)
//         const data = await res.json();
            
//         return {
//             props: {
//                 data,
//             },
//         }
//     }


// export const getStaticPaths = async () => {
//     const res = await fetch("https://pro-component-express1o1.herokuapp.com/register")
//     const data = await res.json();
    
//     const paths = data.map( (curElem) =>  {
//         console.log(data);
//         if (curElem._id === undefined) {
//             return {
//                 params: {
//                     pageno: curElem._id,
//                 },
//             };        
//         }else {
//             return {
//                 params: {
//                     pageno: curElem._id.toString(),
//                 },
//             };        
//         }
//     })
    
//     return {
//         props: {
//             paths,
//             fallback: false,
//         },
//   }    
// };

        //     {data.map( (curElem) => {
        //     return(
        //         <div className ="alert alert-primary" key={curElem.id}>
        //             <h3>{curElem.name}</h3>
        //             <h4>{curElem.email}</h4>
        //             <h5>{curElem.work}</h5>
        //             <h5>{curElem.phone}</h5>
        //             <h5>{curElem.password}</h5>
        //             <h5>{curElem.cpassword}</h5>
        //             <h6>{curElem._id}</h6>                    
        //         </div>            
        //     );
        // })}




// export async function getStaticProps( params ) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//       const res = await fetch(`https://.../posts/${params.id}`)
//       const post = await res.json()
    
//       // Pass post data to the page via props
//       return { props: { post } }
// }




















// import type { NextPage } from 'next'


// This function gets called at build time
// export async function getStaticPaths() {
//           // Call an external API endpoint to get posts
//           const res = await fetch('https://pro-component-express1o1.herokuapp.com/register')
//           const posts = await res.json()
//           // Get the paths we want to pre-render based on posts
//           console.log(posts);
//           const paths = posts.map((post) => ({
//             params: { id: posts._id.toString()},
//           }))
//           // We'll pre-render only these paths at build time.
//           // { fallback: false } means other routes should 404.
//         return { paths, fallback: false };
//     }

// This also gets called at build time

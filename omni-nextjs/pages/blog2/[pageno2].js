import { useRouter } from 'next/router'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())








function PageNo2() {

    const router = useRouter();
    const pageNumber = router.query.pageno2;
    
    const { data, error } = useSWR(`https://pro-component-django1o1.herokuapp.com/api/r/${pageNumber}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>

};


export default PageNo2;



    // return (
    //     <>
    //         <h1>Hello from { pageNumber } page</h1> <
    //     />
    // )
    
    
    
    
    
    
    
    
    
    
    
    
    
// getStaticPatchs
// export const getStaticPaths = async () => {
//     const res = await fetch("https://pro-component-express1o1.herokuapp.com/register")
//     const data = await res.json();

//     const paths = data.map( (curElem) =>  {
//         // console.log(data);
//         return {
//             params: {
//                 // pageno: curElem.id,

//             },
//         };        
//     })

//     return {
//         props: {
//             paths,
//             fallback: false,
//         },
//   }    
// };




// getStaticProps
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
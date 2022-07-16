import { gql } from '@apollo/client'
import client1 from './api/apollo-client1'





function Profile2(data) {
  return (
    <>
          {console.log(data)}
          <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
          </pre>
    </>
  );
}

export async function getStaticProps() {
    const { data } = await client1.query({
        query:gql`
        query {
            hello
        }`
    })
    


  return {
    props: {
      data,
    },
  };
}

export default Profile2;


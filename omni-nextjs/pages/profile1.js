import { gql } from '@apollo/client'
import client from './api/apollo-client'



function Profile(data) {
  return (
    <>
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </>
  );
}

export async function getStaticProps() {
    const { data } = await client.query({
        query:gql`
        query all_ingredients {
            allIngredients {
                name
                notes
            }
        }`
    })
    
  return {
    props: {
      data,
    },
  };
}

export default Profile;


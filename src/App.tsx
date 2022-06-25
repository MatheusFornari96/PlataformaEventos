import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface lesson{
  id: string;
  title: string;
}

function App() {
  // Forma comum de requisção para api
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => console.log(response.data));
  // },[])


  const {data} = useQuery<{lessons: lesson[]}>(GET_LESSONS_QUERY);
  console.log(data);

  return (
   <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
  )
}

export default App

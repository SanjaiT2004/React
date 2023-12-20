import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post, setPost] = useState({})
    {/** {}=> single if it all datum use the array => [] */}
    const[id,setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err =>{})   
    },[id])
  return (
      <div>
          <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
          <>{post.title}</>
          {/** If we want to fetch all the datum means we should remove the id in axios get method as well as
           in dependencies array and in JSX we need to map the array of objects
           */}
    </div>
  )
}

export default DataFetching
import { useEffect, useState } from "react";
import axios from "axios";

function Posts(){
    const[posts,SetPosts] = useState([]);

    const  data = async () => {
try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log(response);

    const dados = response.data;
   SetPosts(dados);
}catch(error){
    console.log(error);
}
    }

    useEffect(() => {
        data();
    }, [])




    return(
        <div>
            <h1>Posts</h1>

            <ul>
                {posts.map(posts=>
                    <li key={posts.id}> {posts.title}</li>)}
            </ul>
        </div>
    )
}

export default  Posts
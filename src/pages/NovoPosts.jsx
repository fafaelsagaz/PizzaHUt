import { useEffect, useState } from "react";
import axios from "axios";

function NovoPosts() {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);



    const createPost = async (e) => {
        e.preventDefault();


        const posts = { title, body, userId: 1 };
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', { body: posts, });


        } catch (error) {
            console.log(error);
        }
    }





    return (
        <div>
            <h1>Posts</h1>

         <form onSubmit={(e) => createPost(e)}>
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="body"></label>
            <textarea name="body" id="body" cols="30" rows="10" placeholder="Digite o conteudo" onChange={(e) => setBody(e.target.value)}></textarea>
            <input type="submit" value="Criar Post" />
         </form>
        </div>
    )
}

export default NovoPosts
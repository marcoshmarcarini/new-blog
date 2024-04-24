'use client'
import db from "../../../../utils/firebase"
import { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"

export default function CadastrarPost() {

    const [post, setPost] = useState({
        titulo: '', subtitulo: '',
        texto: '', image: null
    })

    const inserirDados = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, 'Post'), {
            titulo: post.titulo,
            subtitulo: post.subtitulo,
            text: post.texto,
            timeStamp: new Date()
        })

    }

    useEffect(() => {
        inserirDados

        setPost({
            titulo: '', subtitulo: '',
            texto: '', image: null
        })

    }, [])

    return (
        <div>
            <form>
                <input type="text" placeholder={`Título`} onChange={(e) => setPost(e.target.value)} />
                <input type="text" placeholder={`Subtítulo`} onChange={(e) => setPost(e.target.value)} />
                <textarea  placeholder={`Texto`} onChange={(e) => setPost(e.target.value)} />
                <input type="submit" value="Postar" onClick={inserirDados} />
                
            </form>
        </div>
    )
}
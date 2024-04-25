'use client'

import { useRouter } from "next/router"
import db from "../../../utils/firebase"
import { collection, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"


export default function Post() {
    const router = useRouter()

    const [post, setPost] = useState(null)

    useEffect(() => {
        const getPost = async () => {
            const colecao = collection(db, 'Post')
            const querySnapshot = await getDocs(colecao)
            const snapData = []

            querySnapshot.forEach((doc) => {
                snapData.push({id: doc.id, ...doc.data()})
            })

            console.log(snapData)

            setPost(snapData)
        }

        getPost()
    }, [])

    return (
        <div>
           {post.map((post, id ) => (
            <div key={id}>
                <p>{post.titulo}</p>
            </div>
           ))}
        </div>
    )
}
'use client'

import { useRouter } from 'next/router'
import Link from 'next/link'
import db from '../../../utils/firebase'
import { doc, getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'


export default function Page() {
  const router = useRouter()
  const [posts, setPosts] = useState([])


  const redenrizarPosts = async () => {
    const colecao = collection(db, 'Post')

    const snap = await getDocs(colecao)
    const snapData = []
    snap.forEach((doc) => {
      snapData.push({ id: doc.id, ...doc.data() })
    })

    setPosts(snapData)
    console.log(snapData)

  }
  useEffect(() => {
    redenrizarPosts()
  }, [])


  return (
    <div>
      {posts && posts.map((post, id) => (

        <div key={id}>
          <Link href={`/materias/${post.slug}`} >
            <h1>{post.titulo}</h1>
            <h3>{post.subtitulo}</h3>
            <p>{post.texto}</p>
          </Link>
        </div>
      ))}
      <p></p>
    </div>
  )


}


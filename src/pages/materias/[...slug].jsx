import { useRouter } from "next/router"

import { doc, getDoc } from "firebase/firestore"

export default function post(){
    const router = useRouter()
    return(
        <div>
           {router.query.slug}
        </div>
    )
}
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from `./config`

const db = getFirestore(app)

const getItems = async () =>{
  const querySnapshot = await getDocs(collection(db, "productos"))

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
    })
}
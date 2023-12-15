import { collection, getDocs } from "firebase/firestore";
import app from "./init";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(app)

export async function retriveData (collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    return data
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })).find((doc) => doc.id === id)
    return data
}
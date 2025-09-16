
'use server'

import { z } from 'zod'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const schema = z.object({
  startupName: z.string().min(1),
  email: z.string().email(),
  description: z.string().min(1),
})

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveApplication(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    startupName: formData.get('startupName'),
    email: formData.get('email'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    const docRef = await addDoc(collection(db, "applications"), validatedFields.data);
    return { message: 'Success!' }
  } catch (e) {
    return { message: 'Error submitting application.' };
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, ReactNode, useContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDW-02-GnPl1MzI3tCWsZb1nj9ODW0Kqgs",
    authDomain: "fir-d299b.firebaseapp.com",
    projectId: "fir-d299b",
    storageBucket: "fir-d299b.firebasestorage.app",
    messagingSenderId: "417812000950",
    appId: "1:417812000950:web:ed636b2c0c79b045ca3617",
    databaseURL:
        "https://fir-d299b-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);

// --- Context Types ---
interface FirebaseContextType {
    signupUserWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<any>;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

// --- Custom Hook ---
export const useFirebase = (): FirebaseContextType => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};

interface FirebaseProviderProps {
    props: ReactNode;
}

export const FirebaseProvider = ({ props }: FirebaseProviderProps) => {
    const signupUserWithEmailAndPassword = (
        email: string,
        password: string
    ) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
            {props}
        </FirebaseContext.Provider>
    );
};

import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, onValue } from "firebase/database";
const MainContext = createContext();

const Main = (props) => {
    
    const notify = (msg) => toast(msg);
    const db = getDatabase();
    const [data, setdata] = useState([]);

    useEffect(
        () => {
            const starCountRef = ref(db, 'quiz');
            onValue(starCountRef, (snapshot) => {
                const quizdata = snapshot.val();
                console.log(quizdata);
            })
        },
        []
    )


    return (
        <MainContext.Provider value={{notify}}>
            <ToastContainer/>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
export {MainContext};

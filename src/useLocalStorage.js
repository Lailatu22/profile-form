import {useState} from "react"

function useLocalStorage(key, initialValue) {
    const[storedValue, setStoredValue]=useState(()=>{
        if(typeof window==="undefined"){
            return initialValue;
        }
        try{
            const item =window.localStorage.getltem(key);
            return item ?JSON.parse(item):initialValue;
        }catch(error){
          console.log(error)
          return initialValue;
           
        }

    });
    const setValue =(value)=>{
    try{
        setStoredValue(value);
        if(typeof window !== "underfined"){
            window.localStorage.setltem(key,JSON.stringify(value));
        }   
    
    }catch(error){
            console.log(error);
             
    }};
    
  return [storedValue, setValue]
}


export default useLocalStorage
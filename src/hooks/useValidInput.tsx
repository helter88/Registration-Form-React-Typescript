import {useState, useEffect} from 'react'


const useValidInput = (props: "email" | "password" ) => {
    const [itemWasClicked, setItemWasClicked]= useState(false);
    const [message, setMessage] = useState("");
    const [itemIsValid, setItemIsValid]= useState(false);

    useEffect(() =>{
        if(itemWasClicked){
            if(props === "email"){
               validateEmail();   
            }
            if(props === "password"){
                validatePassword();
            }
            
        }
    },[message])


    const itemBlurHandler= () =>{
        setItemWasClicked(true);
        validateEmail();
    }
    
    const itemHandler = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setMessage(e.target.value);
    }

    const validateEmail = () => {
        const regexEmial = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(message.length){
        setItemIsValid(regexEmial.test(message));  
        }
        
    }

    const validatePassword = () => {
        if(message.length){
            message.length>=6 ? setItemIsValid(true): setItemIsValid(false)
        }
    }

    type showMessageTypes = (validMessage:string, invalidMessageOne:string, invalidMessageTwo: string ) => string
    

    const showMessage: showMessageTypes = (validMessage, invalidMessageOne, invalidMessageTwo) =>{
        if(message.length && itemWasClicked && itemIsValid){
            return validMessage
        }
        if(message.length && itemWasClicked && !itemIsValid){
            return invalidMessageOne
        }

        if(!message.length && itemWasClicked){
            return invalidMessageTwo
        }
            return validMessage

        }

    const bind = {
        value: message,
        onChange: itemHandler,
        onBlur: itemBlurHandler,
        }
    return [showMessage, bind, itemWasClicked, itemIsValid ] as const
}

export default useValidInput

import { useState } from "react";

export function useForm(steps){
    
    function changeStep(i, e){

       if (e) e.preventDefault()

        if(i < 0 || i>= steps.length) return

        setCurrentStep(i)
    }

    const[currentStep,setCurrentStep]=useState(0)

    return{
        currentStep,
        currentComponent:steps[currentStep],
        changeStep,
        isLastStep:currentStep + 1 === steps.length ? true : false ,
        isFirtsStep:currentStep === 0 ? true : false , 
    };
}
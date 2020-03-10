import React from 'react';

export const initialValue = {
question:[],
nav:[]
}

export const reducerFunc = (state, action) => {
    switch (action.type){
        case "ADD_NEWSURVEY":
            const newQuestion = {
            title : action.payload,
            group : action.payload,
            name : action.payload,
            id : `${Date.now()}`,
            done : false
    }
    return {...state, question:[...state.question, newQuestion]};
        case "REMOVE_SURVEY":
            return {question: [...state.question.filter(item =>{
                if (item.id === action.payload){
                    item.done = !item.done
                   return item
                } else return item
            })]}
        case "REMOVE_DONE":
           return {...state, question: [...state.question.filter(item =>{
               if(item.done === false){
                   return item
               }else return
           })]}
        case "ADD_PAGE":
           const newFile = document.implementation.createHTMLDocument(action.payload)
           const newFileBody = newFile.querySelector('body');
           newFileBody.classList.add("root");
           return {...state, nav: [...state.nav, <a href={action.payload}>{action.payload}</a>]}
    default:
        return state;
}
}
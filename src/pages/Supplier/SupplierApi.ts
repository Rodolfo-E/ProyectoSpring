import { get } from "http";
import Supplier from "./Supplier";

export async function searchSupplier(){

  let url=process.env.REACT_APP_API+'suppliers'
  let response=await fetch(url,{

    "method":"GET",
    "headers":{
      'content-type':'application/json'
    }

  })
  return await response.json();

 

/*
    const datosEjemplo = [
        {
          id: "4",
          firstname: "Rodolfo",
          lastname: "Delgado",
          email: "rododelgado1521@gmail.com",
          phone: "565565465",
          addres: "Av Los Angeles 147"
        },
        {
          id: "2",
          firstname: "Jose",
          lastname: "Delgado",
          email: "josedelgado147@gmail.com",
          phone: "894535151",
          addres: "Av La Marina 78"
        },
      ];*/



}

export async function removeSupplier(id: string){
  let url=process.env.REACT_APP_API+'suppliers/'+id
  await fetch(url,{

    "method":"DELETE",
    "headers":{
      'content-type':'application/json'
    }

  })



}

export async function saveSupplier(supplier:Supplier){

  let url=process.env.REACT_APP_API+'suppliers'
  let response=await fetch(url,{

    "method":"POST",
    "body":JSON.stringify(supplier),
    "headers":{
      'content-type':'application/json'
    }

  })

}
export async function searchSupplierById(id:string){

  let url=process.env.REACT_APP_API+'suppliers/'+id
  let response=await fetch(url,{

    "method":"GET",
    "headers":{
      'content-type':'application/json'
    }

  })
  return await response.json();

}

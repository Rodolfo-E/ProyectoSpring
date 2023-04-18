import { get } from "http";
import Customer from "./Customer";

export async function searchCustomer(){

  let url=process.env.REACT_APP_API+'customers'
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

export async function removeCustomer(id: string){
  let url=process.env.REACT_APP_API+'customers/'+id
  await fetch(url,{

    "method":"DELETE",
    "headers":{
      'content-type':'application/json'
    }

  })



}

export async function saveCustomer(customer:Customer){

  let url=process.env.REACT_APP_API+'customers'
  let response=await fetch(url,{

    "method":"POST",
    "body":JSON.stringify(customer),
    "headers":{
      'content-type':'application/json'
    }

  })

}
export async function searchCustomerById(id:string){

  let url=process.env.REACT_APP_API+'customers/'+id
  let response=await fetch(url,{

    "method":"GET",
    "headers":{
      'content-type':'application/json'
    }

  })
  return await response.json();

}

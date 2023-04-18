export default interface Customer{
    //todos los datos son obligatorios, si se quisiera un dato que no sea obligatorio 
    //pondriamos el sigo? enguida  de la variable como email?
    id?:string,
    firstname?:string,
    lastname?:string,
    email?:string,
    phone?:string,
    address?:string 

}
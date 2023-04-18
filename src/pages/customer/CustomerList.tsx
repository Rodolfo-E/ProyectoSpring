import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trash } from 'ionicons/icons';
import { useHistory, useParams, } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
/* Theme variables */
import '../../theme/variables.css';
import { AnyNsRecord } from 'dns';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
import Customer from './Customer';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Customer[]>([]);
  const history=useHistory();
  useEffect(() => {
    search();
    //se actualza cada vez que haya un cambio de página
  },[history.location.pathname])

  const search = async () => {

    let result = await searchCustomer();
    setClientes(result);
  }

  const remove=async(id:string)=>{
  
    await removeCustomer(id);
    search();
  }


  const addCustomer=()=>{

    history.push('/page/customers/new')
  }

  const editCustomer=(id:string)=>{

    history.push('/page/customers/'+id)
  }
 

 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>



        <IonCard>
          <IonTitle>Gestion de Clientes</IonTitle>
          <IonItem>
            <IonButton color='primary' fill='solid' slot='end' size='default' onClick={addCustomer}><IonIcon icon={add} /> Agregar Cliente</IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow >
             
             
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {clientes.map((cliente: Customer) =>



          
              <IonRow key={cliente.id}>
                 
                <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.address}</IonCol>

                <IonCol >
                  <IonButton color="warning" fill='clear' onClick={()=>{editCustomer(String(cliente.id))}}><IonIcon icon={pencil} slot="icon-only"
                 /></IonButton>
                  <IonButton  color="danger" fill='clear'  onClick={()=>remove(String(cliente.id))} ><IonIcon icon={trash} slot="icon-only" /></IonButton>
                </IonCol>

              </IonRow>
              
            )}

       

          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trash } from 'ionicons/icons';
import { useHistory, useParams, } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
/* Theme variables */
import '../../theme/variables.css';
import { AnyNsRecord } from 'dns';
import { removeSupplier, saveSupplier, searchSupplier } from './SupplierApi';
import Supplier from './Supplier';

const SupplierList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Supplier[]>([]);
  const history=useHistory();
  useEffect(() => {

    search();
    //se actualza cada vez que haya un cambio de página
  },[history.location.pathname])

  const search = async() => {

    let result = await searchSupplier();
    setClientes(result);
  }

  const remove=async (id:string)=>{
  
    await removeSupplier(id);
    search();
  }


  const addSupplier=()=>{

    history.push('/page/suppliers/new')
  }

  const editSupplier=(id:string)=>{

    history.push('/page/suppliers/'+id)
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
          <IonTitle>Gestion de Proveedores</IonTitle>
          <IonItem>
            <IonButton color='primary' fill='solid' slot='end' size='default' onClick={addSupplier}>
              <IonIcon icon={add} /> Agregar Proveedor</IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow >
             
             
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Web</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {clientes.map((cliente: Supplier) =>



          
              <IonRow key={cliente.id}>
                 
                <IonCol>{cliente.name} {cliente.name}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.web}</IonCol>

                <IonCol >
                  <IonButton color="warning" fill='clear' onClick={()=>{editSupplier(String(cliente.id))}}><IonIcon icon={pencil} slot="icon-only"
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

export default SupplierList;

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, pencil, trash } from 'ionicons/icons';
import { useHistory, useParams, useRouteMatch, } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
/* Theme variables */
import '../../theme/variables.css';
import { AnyNsRecord } from 'dns';
import { removeCustomer, saveCustomer, searchCustomer, searchCustomerById } from './CustomerApi';
import Customer from './Customer';

const CustomerEdit: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    const [customer, setCustomer] = useState<Customer>({});
    const history=useHistory();
    const routeMatch:any=useRouteMatch("/page/customers/:id");
    let id=routeMatch?.params?.id;
 


    useEffect(() => {
        search();
    }, [history.location.pathname])

    const search =async () => {


        if(id ==='new'){
          
            setCustomer({});
            
        }else{
            let resutl=await searchCustomerById(id);
            setCustomer(resutl);
        }

        // let result = searchCustomer();
        //  setClientes(result);
    }

    const save=async()=>{
       // customer.id=Math.round( Math.random()*1000000);
        await saveCustomer(customer)
        history.push('/page/customers')
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
                    <IonTitle> {id==='new'?'Agregar Cliente':'Editar Cliente'}</IonTitle>


                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Nombre:</IonLabel>
                                <IonInput onIonChange={e=>customer.firstname= String(e.detail.value)} 
                                value={customer.firstname} placeholder="Ingrese su nombre"></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Apellido:</IonLabel>
                                <IonInput onIonChange={e=>customer.lastname= String(e.detail.value)} 
                                value={customer.lastname} placeholder="Ingrese su Apellido"></IonInput>
                            </IonItem>

                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email:</IonLabel>
                                <IonInput onIonChange={e=>customer.email= String(e.detail.value)} 
                                value={customer.email} placeholder="Ingrese su correo"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Dirección:</IonLabel>
                                <IonInput onIonChange={e=>customer.address=String(e.detail.value)} 
                                value={customer.address} placeholder="Ingrese su dirección"></IonInput>
                            </IonItem>


                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Teléfono:</IonLabel>
                                <IonInput onIonChange={e=>customer.phone=String(e.detail.value)} 
                                value={customer.phone} placeholder="Ingrese su numero de telefono"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                    
                        </IonCol>
                    </IonRow>













                    <IonItem>
                        <IonButton onClick={save} color='success' fill='solid' slot='end' size='default'><IonIcon icon={checkmark} /> Guardar </IonButton>
                    </IonItem>

                </IonCard>


             
            </IonContent>
        </IonPage>
    );
};

export default CustomerEdit;

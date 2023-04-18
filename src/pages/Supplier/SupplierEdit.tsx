import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, pencil, trash } from 'ionicons/icons';
import { useHistory, useParams, useRouteMatch, } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
/* Theme variables */
import '../../theme/variables.css';
import { AnyNsRecord } from 'dns';
import { removeSupplier, saveSupplier, searchSupplier, searchSupplierById } from './SupplierApi';
import Supplier from './Supplier';

const SupplierEdit: React.FC = () => {

    const { name } = useParams<{ name: string;}>();

    const [supplier, setSupplier] = useState<Supplier>({});

    const history=useHistory();
    const routeMatch:any=useRouteMatch("/page/suppliers/:id");
    let id=routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname])

    const search = async() => {
        if(id==='new'){
            
            setSupplier({});
        }else{
            let resutl=await searchSupplierById(id);
            setSupplier(resutl);
        }

        // let result = searchSupplier();
        //  setClientes(result);
    }

    const save=async()=>{
       // supplier.id=Math.round( Math.random()*1000000);
        await saveSupplier(supplier)
        history.push('/page/suppliers')
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
                    <IonTitle> {id==='new'?'Agregar Proveedor':'Editar Proveedor'}</IonTitle>


                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Nombre:</IonLabel>
                                <IonInput onIonChange={e=>supplier.name= String(e.detail.value)} 
                                value={supplier.name} placeholder="Ingrese su nombre"></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Contacto:</IonLabel>
                                <IonInput onIonChange={e=>supplier.contact= String(e.detail.value)} 
                                value={supplier.contact} placeholder="Ingrese su contacto"></IonInput>
                            </IonItem>

                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email:</IonLabel>
                                <IonInput onIonChange={e=>supplier.email= String(e.detail.value)} 
                                value={supplier.email} placeholder="Ingrese su correo"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Dirección:</IonLabel>
                                <IonInput onIonChange={e=>supplier.address=String(e.detail.value)} 
                                value={supplier.address} placeholder="Ingrese su dirección"></IonInput>
                            </IonItem>


                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Teléfono:</IonLabel>
                                <IonInput onIonChange={e=>supplier.phone=String(e.detail.value)} 
                                value={supplier.phone} placeholder="Ingrese su numero de telefono"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Web:</IonLabel>
                                <IonInput onIonChange={e=>supplier.web=String(e.detail.value)} 
                                value={supplier.web} placeholder="Ingrese su sitio web"></IonInput>
                            </IonItem>

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

export default SupplierEdit;

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, pencil, trash } from 'ionicons/icons';
import { useHistory, useParams, useRouteMatch, } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
/* Theme variables */
import '../../theme/variables.css';
import { AnyNsRecord } from 'dns';
import { removeEmployee, saveEmployee, searchEmployee, searchEmployeeById } from './EmployeeApi';
import Employee from './Employee';

const EmployeeEdit: React.FC = () => {

    const { name } = useParams<{ name: string;}>();

    const [employee, setEmployee] = useState<Employee>({});

    const history=useHistory();
    const routeMatch:any=useRouteMatch("/page/employees/:id");
    let id=routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname])

    const search = async() => {
        if(id==='new'){
           
            setEmployee({});
        }else{
            let resutl=await searchEmployeeById(id);
            setEmployee(resutl);
        }

        // let result = searchEmployee();
        //  setClientes(result);
    }

    const save=async()=>{
       // employee.id=Math.round( Math.random()*1000000);
        await saveEmployee(employee)
        history.push('/page/employees')
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
                    <IonTitle> {id==='new'?'Agregar Empleado':'Editar Empleado'}</IonTitle>


                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Nombre:</IonLabel>
                                <IonInput onIonChange={e=>employee.firstname= String(e.detail.value)} 
                                value={employee.firstname} placeholder="Ingrese su nombre"></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Apellido:</IonLabel>
                                <IonInput onIonChange={e=>employee.lastname= String(e.detail.value)} 
                                value={employee.lastname} placeholder="Ingrese su Apellido"></IonInput>
                            </IonItem>

                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email:</IonLabel>
                                <IonInput onIonChange={e=>employee.email= String(e.detail.value)} 
                                value={employee.email} placeholder="Ingrese su correo"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Dirección:</IonLabel>
                                <IonInput onIonChange={e=>employee.address=String(e.detail.value)} 
                                value={employee.address} placeholder="Ingrese su dirección"></IonInput>
                            </IonItem>


                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Teléfono:</IonLabel>
                                <IonInput onIonChange={e=>employee.phone=String(e.detail.value)} 
                                value={employee.phone} placeholder="Ingrese su numero de telefono"></IonInput>
                            </IonItem>

                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Salario:</IonLabel>
                                <IonInput onIonChange={e=>employee.salary=Number(e.detail.value)} 
                                value={employee.salary} placeholder="Ingrese el salario"></IonInput>
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

export default EmployeeEdit;

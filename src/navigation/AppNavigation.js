import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SalesProvider } from '../screens/Sales/SalesContext';
import { CobroProvider } from '../screens/Collect/CobroContext';
import Login from '../screens/Login/Login';
import Authentication from '../screens/Login/Aunthentication';
import Home from '../screens/Home/Home';
import SideBar from '../components/SideBar';
import Income from '../screens/Income/Income';
import Expenses from '../screens/Expenses/Expenses';
import WithDrawls from '../screens/Withdrawls/Withdrawls';
import Sales from '../screens/Sales/Sales';
import NewSale from '../screens/Sales/NewSale';
import NewClient from '../screens/Sales/NewClient';
import ClientInfo from '../screens/Sales/ClientInfo';
import Settings from '../screens/Settings/Settings';
import DownloadData from '../screens/Settings/DownloadData';
import SyncUpApp from '../screens/Settings/SyncUpApp';
import GenerateNewKeys from '../screens/Settings/GenerateNewKeys';
import GenerateBackUp from '../screens/Settings/GenerateBackUp';
import RestartData from '../screens/Settings/RestartData';
import AboutHelp from '../screens/Settings/AboutHelp';
import Collect from '../screens/Collect/Collect';
import Payment from '../screens/Collect/Payment';
import UnitManagement from '../screens/UnitManagement/UnitManagement';
import Receipt from '../screens/Collect/Receipt';
import InfoClientCollect from '../screens/Collect/InfoClientCollect';
import ClientLevelHistory from '../screens/Collect/ClientLevelHistory';
import RecordHistory from '../screens/Collect/RecordHistory';
import CollectionDetails from '../screens/Collect/CollectionDetails';
import Ticket from '../screens/Sales/Ticket';
import NoPayment from '../screens/Collect/NoPayment';
import CashSummary from '../screens/Collect/CashSummary';
import CashClosing from '../screens/Collect/CashClosing';
import PhotoAuthentication from '../screens/Collect/PhotoAuthentication';
import PaymentHistory from '../screens/Collect/PaymentHistory';
import EditPayment from '../screens/Collect/EditPayment';
import CashInBox from '../screens/UnitManagement/CashInBox';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/* Vistas de Settings */}
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Download" component={DownloadData} />
      <Drawer.Screen name="SyncUp" component={SyncUpApp} />
      <Drawer.Screen name="GenerateNewKeys" component={GenerateNewKeys} />
      <Drawer.Screen name="GenerateBackUp" component={GenerateBackUp} />
      <Drawer.Screen name="Restart" component={RestartData} />
      <Drawer.Screen name="AboutHelp" component={AboutHelp} />
      {/* Vistas de home */}
      <Drawer.Screen name="Income" component={Income} />
      <Drawer.Screen name="Expenses" component={Expenses} />
      <Drawer.Screen name="WithDrawls" component={WithDrawls} />
      {/* Vistas de Sales */}
      <Drawer.Screen name="Sales" component={Sales} />
      <Drawer.Screen name="NewSale" component={NewSale} />
      <Drawer.Screen name="NewClient" component={NewClient} />
      <Drawer.Screen name="ClientInfo" component={ClientInfo} />
      <Drawer.Screen name="Ticket" component={Ticket} />
      {/* Vistas de collect */}
      <Drawer.Screen name="Collect" component={Collect} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Receipt" component={Receipt} />
      <Drawer.Screen name="InfoClientCollect" component={InfoClientCollect} />
      <Drawer.Screen name="ClientLevelHistory" component={ClientLevelHistory} />
      <Drawer.Screen name="RecordHistory" component={RecordHistory} />
      <Drawer.Screen name="PaymentHistory" component={PaymentHistory} />
      <Drawer.Screen name="EditPayment" component={EditPayment} />
      <Drawer.Screen name="CollectionDetails" component={CollectionDetails} />
      <Drawer.Screen name="NoPayment" component={NoPayment} />
      <Drawer.Screen name="CashSummary" component={CashSummary} />
      <Drawer.Screen name="CashClosing" component={CashClosing} />
      <Drawer.Screen name="PhotoAuthentication" component={PhotoAuthentication} />
      {/* Vistas de Recorrido */}
      <Drawer.Screen name="UnitManagement" component={UnitManagement} /> 
      <Drawer.Screen name="CashInBox" component={CashInBox} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <SalesProvider>
      <CobroProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Main" component={DrawerNavigator} options={{ gestureEnabled: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </CobroProvider>
    </SalesProvider>
  );
}

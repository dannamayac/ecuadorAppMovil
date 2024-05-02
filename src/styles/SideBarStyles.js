import { StyleSheet, Dimensions } from 'react-native';

const drawerWidth = 250;
const contractedPosition = -(drawerWidth - 30);  // 30px visible del sidebar cuando está contraído

const SideBarStyles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    height: '100%',   // Altura total
    width: drawerWidth,  // Ancho del drawer
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    overflow: 'hidden',
  },
  expanded: {
    transform: [{ translateX: 0 }],  // Usar array para transformaciones
  },
  contracted: {
    transform: [{ translateX: contractedPosition }],  // Posición contraída
  },
  toggleButton: {
    position: 'absolute',
    top: 30,
    right: 10,  // Ajustado para estar a la derecha dentro del sidebar
    zIndex: 30,
    backgroundColor: '#B0C4DE',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 15,
    padding: 10,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  }
});

export default SideBarStyles;

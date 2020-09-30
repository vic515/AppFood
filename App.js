import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen.js';

const navigator = createStackNavigator( {
    Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
    
  }
});


export default createAppContainer(navigator);


























































/* 


Client ID
8fTf9hvJgM3athDIZCbPdQ

API Key
ASUVNkq3LprRDdR0FpN_2KNqTRWaevrdw0-A9zc-N4Zy-pxjp8sg_61G5xrVGwt6-N47-z_Ur5XLi_gMijEXSNdPiuewbapv8FECYcNuGDRNPBfTUkk-hkCCjOZzX3Yx
 
*/

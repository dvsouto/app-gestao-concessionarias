/**
 * App Navigator Tabs
 * @author Davi Souto
 * @since  08/08/2018
 */

// Screens
import ScreenHome from 'AppGestao/components/Screens/Home';
// import ScreenStock from 'AppGestao/components/Screens/Stock';
// import ScreenComingSoon from 'AppGestao/components/Screens/ComingSoon';
import ScreenSupport from 'AppGestao/components/Screens/Support';

// Navigators
import NavigatorStock from 'AppGestao/components/Navigator/StockNavigator';

//////////////////////////////////////////////////////////

const navigatorTabs = {
  Home: {
    title: 'Home',
    screen: ScreenHome,
    icon: 'home',
  },
  Estoque: {
    title: 'Estoque',
    screen: NavigatorStock,
    icon: 'car',
  },
  // Financeiro: {
  //   title: 'Financeiro',
  //   screen: ScreenComingSoon,
  //   icon: 'usd',
  // },
  Suporte: {
    title: 'Suporte',
    // screen: ScreenComingSoon,
    screen: ScreenSupport,
    icon: 'comments',
  }
}

export default navigatorTabs;

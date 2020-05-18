import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  status: {
    danger: '#8e24aa',
  }, 
  breakpoints: {
    values: {
      xs: 0,
      sm: 541, //  540
      md: 769, //  768
      lg: 1025, // 1024
      xl: 1441, // 1440
    },
  },
  typography: {
    fontFamily: [
      'PingFangTC',
      'Microsoft JhengHei',
      'system',
      '-apple-system',
      'BlinkMacSystemFont',
      '"PingFang SC"',
      'Helvetica',
      'Arial',
    ].join(','),
  },
  palette: {
    type: 'dark',
    background:{
      default: '#404040'
    },
    primary: {
      main: '#e6008a'
    }
  }
});

export default theme;
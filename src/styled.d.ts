import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadii: {
      md: '4px';
      lg: '8px';
    };

    colors: {
      midnight: '#253648';
      gallery: '#F7F7F8';
      CTA: '#0F81A3';
      CTAHover: ' #66AEC5';
      GreenPillText: '#15693B';
      GreenPillBackground: '#DDF9EA';
      OrangePillText: '#764C25';
      OrangePillBackground: '#FDEFE2';
      GrayPillBackground: '#EEEFF1';
    };

    fontSizes: {
      sm: '12px';
      md: '14px';
      lg: '16px';
      xl: '20px';
    };

    fontWeights: {
      normal: 'normal';
      bold: 'bold';
    };

    spacing: {
      sm: '4px';
      md: '8px';
      lg: '10px';
      xl: '16px';
      xxl: '24px';
    };

    shadows: '0 0.5rem 0.75rem rgba(0,0,0,0.16);';

    breakpoints: {
      xs: '0';
      sm: '375px';
      md: '768px';
      lg: '1024px';
      xl: '1280px';
    };
  }
}

const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
  notdesktop: '1339px',
};

export const theme = Object.freeze({
  dark: {
    colors: {
      background: '#1F1F1F', //Background color
      sideBar: '#121212', //Sidebar color
      btnAddBoard: '#BEDBB0', //Button add new board color
      header: '#161616', //Header color
      btnColumn: '#121212', //Button column color
      btnAddColumn: '#fff', //Button add column color
      helpBackground: '1F1F1F', //Help area background color
      card: '#121212', //Task(card) color
      cardDecor: 'rgba(255, 255, 255, 0.10)', //Card decor line color
      cardMajorText: '#fff', //Task(card) title color
      cardMinorText: '#888888', //Task(card) description color,
      titleColor: '#fff', //Column title color,
      iconFill: 'rgba(255, 255, 255, 0.5)', //Column icon fill,
      iconHover: 'rgba(255, 255, 255, 1.0)', //Column icon hover,
      buttonIconBackground: '#000', //button icon background,
      buttonIconFill: '#fff', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#bedbb0', //Add (Edit) button Background,
      addButtonHoverBackground: '#9dc888', //Add (Edit) button hover Background,
      mainDashboardBackground: '#1f1f1f', //Main dashboard background color
      addColumnButtonColor: '#fff', //Add column button color,
      addColumnButtonBackground: '#121212', //Add column button Background,
      addColumnButtonHoverBackground: '#000', //Add column button hover Background,
      iconContainerBackground: '#fff', //Icon container Background,
      addColumnIconFill: '#121212', // Add column icon fill
    },
    priority: {
      without: '#656565',
      low: '#8FA1D0',
      medium: '#E09CB5',
      high: '#BEDBB0',
    },
    baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  light: {
    colors: {
      background: '#F6F6F7', //Background color
      sideBar: '#fff', //Sidebar color
      btnAddBoard: '#BEDBB0', //Button add new board color
      header: '#FCFCFC', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#161616', //Button add column color
      helpBackground: 'F6F6F7', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
      titleColor: '#161616', //Column title color,
      iconFill: 'rgba(22, 22, 22, 0.50)', //Column icon fill,
      iconHover: 'rgba(22, 22, 22, 1.0)', //Column icon hover,
      buttonIconBackground: '#000', //button icon background,
      buttonIconFill: '#fff', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#bedbb0', //Add (Edit) button Background,
      addButtonHoverBackground: '#9dc888', //Add (Edit) button hover Background,
      mainDashboardBackground: 'F6F6F7', //Main dashboard background color
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#000', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
    },
    priority: {
      without: '#656565',
      low: '#8FA1D0',
      medium: '#E09CB5',
      high: '#BEDBB0',
    },
    baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  violet: {
    colors: {
      background: '#ECEDFD', //Background color
      sideBar: '#5255BC', //Sidebar color
      btnAddBoard: '#B8BCFD', //Button add new board color
      header: '#fff', //Header color
      btnColumn: '#fff', //Button column color
      btnAddColumn: '#5255BC', //Button add column color
      helpBackground: '#9092D6', //Help area background color
      card: '#fff', //Task(card) color
      cardDecor: 'rgba(22, 22, 22, 0.10)', //Card decor line color
      cardMajorText: '#161616', //Task(card) title color
      cardMinorText: '#5C5C5C', //Task(card) description color
      titleColor: '#161616', //Column title color,
      iconFill: 'rgba(22, 22, 22, 0.50)', //Column icon fill,
      iconHover: 'rgba(22, 22, 22, 1.0)', //Column icon hover,
      buttonIconBackground: '#fff', //button icon background,
      buttonIconFill: '#161616', //button icon fill,
      addButtonColor: '#161616', //Add (Edit) button color,
      addButtonBackground: '#5255BC', //Add (Edit) button Background,
      addButtonHoverBackground: '#7B7EDE', //Add (Edit) button hover Background,
      mainDashboardBackground: '#ECEDFD', //Main dashboard background color
      addColumnButtonColor: '#161616', //Add column button color,
      addColumnButtonBackground: '#fff', //Add column button Background,
      addColumnButtonHoverBackground: '#e5e5e5', //Add column button hover Background,
      iconContainerBackground: '#5255BC;', //Icon container Background,
      addColumnIconFill: '#fff', // Add column icon fill
    },
    priority: {
      without: '#656565',
      low: '#8FA1D0',
      medium: '#E09CB5',
      high: '#BEDBB0',
    },
    baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  devices: {
    onlymobile: `(max-width: ${sizes.onlymobile})`,
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`,
    notdesktop: `(max-width: ${sizes.desktop})`,
  },
});

const appBar = {
  backgroundColor: "#000000",
  color: "#ecedee"
}

const toolBar = {
  marginLeft: "7.3%", 
  marginRight: "6.5%", 
  justifyContent: 'space-between',
  '@media screen and (min-width: 600px)': {
    marginLeft: "100px", 
    marginRight: "100px", 
    padding: '0 80px'
  },
  '@media screen and (min-width: 960px)': {
    marginLeft: "10%", 
    marginRight: "10%", 
    padding: '0 120px'
  }
}

const forIcons = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
}

const iconSize = {
  fontSize: '1.5em'
}

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  cursor: 'pointer',
  color: '#ecedee',
  marginRight: '17px',
  fontSize: "15px"
}

const typographyHover = {
  fontSize: '1.2rem'
}

const typography2 = {
  fontFamily: 'Montserrat, sans-serif',
  cursor: 'pointer',
  color: '#ecedee'
}

const typography2Hover = {
  fontSize: '1.2rem'
}


export const styles = { 
	appBar : appBar,
  toolBar : toolBar,
  forIcons : forIcons,
  iconSize : iconSize,
  typography : typography,
  typographyHover : typographyHover,
  typography2 : typography2,
  typography2Hover : typography2Hover

}
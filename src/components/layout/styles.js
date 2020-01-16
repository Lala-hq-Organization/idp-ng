const styles = {
  header: {
    boxShadow: '0px 3px 6px #00000029',
    paddingLeft: '3em',
    paddingRight: '3em',
    zIndex: 3
  },
  sider: {
    position: 'relative',
    zIndex: 0,
    background:
      'transparent linear-gradient(180deg, #9D52CC 0%, #4F2966 100%) 0% 0% no-repeat padding-box',
    alignItems: 'center',
    padding: '1em'
  },
  logoBox: {
    width: '100%',
    height: '200px'
  },
  logo: {
    width: '10rem',
    height: ' 9rem',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '5px solid #B065C69F',
    borderRadius: '28px',
    opacity: 1
  },
  adminText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '23px',
    textAlign: 'center',
    marginTop: '1em'
  },
  innerBox: {
    position: 'relative',
    ':before': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '30%',
      backgroundColor: '#f7f4ff'
    }
  }
};

export default styles;

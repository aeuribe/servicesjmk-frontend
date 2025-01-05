import React from "react";

const LayeredBackground = () => {
  return (
    <div style={styles.background}>
    <svg 
        id="visual" 
        viewBox="0 0 1280 800"  
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1"
        style={styles.svg}
        >
    
    <rect x="0" y="0" width="1280" height="800" fill="#150655"></rect><defs><linearGradient id="grad1_0" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#b81029" stopOpacity="1"></stop><stop offset="82%" stopColor="#b81029" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#b81029" stopOpacity="1"></stop><stop offset="82%" stopColor="#ac0036" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_2" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#9d0041" stopOpacity="1"></stop><stop offset="82%" stopColor="#ac0036" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_3" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#9d0041" stopOpacity="1"></stop><stop offset="82%" stopColor="#89004a" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_4" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#730051" stopOpacity="1"></stop><stop offset="82%" stopColor="#89004a" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_5" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#730051" stopOpacity="1"></stop><stop offset="82%" stopColor="#5a0056" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_6" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#3c0057" stopOpacity="1"></stop><stop offset="82%" stopColor="#5a0056" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_7" x1="37.5%" y1="0%" x2="100%" y2="100%"><stop offset="17.999999999999996%" stopColor="#3c0057" stopOpacity="1"></stop><stop offset="82%" stopColor="#150655" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#b81029" stopOpacity="1"></stop><stop offset="82%" stopColor="#b81029" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#ac0036" stopOpacity="1"></stop><stop offset="82%" stopColor="#b81029" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_2" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#ac0036" stopOpacity="1"></stop><stop offset="82%" stopColor="#9d0041" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_3" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#89004a" stopOpacity="1"></stop><stop offset="82%" stopColor="#9d0041" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_4" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#89004a" stopOpacity="1"></stop><stop offset="82%" stopColor="#730051" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_5" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#5a0056" stopOpacity="1"></stop><stop offset="82%" stopColor="#730051" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_6" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#5a0056" stopOpacity="1"></stop><stop offset="82%" stopColor="#3c0057" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_7" x1="0%" y1="0%" x2="62.5%" y2="100%"><stop offset="17.999999999999996%" stopColor="#150655" stopOpacity="1"></stop><stop offset="82%" stopColor="#3c0057" stopOpacity="1"></stop></linearGradient></defs><g transform="translate(1280, 0)"><path d="M0 679.2C-77.2 631.6 -154.4 584 -226.2 546C-297.9 508 -364.2 479.5 -436.3 436.3C-508.3 393.1 -586.1 335.1 -627.5 259.9C-669 184.8 -674.1 92.4 -679.2 0L0 0Z" fill="#2b0156"></path><path d="M0 594.3C-67.6 552.7 -135.1 511 -197.9 477.8C-260.7 444.5 -318.7 419.6 -381.7 381.7C-444.8 343.9 -512.8 293.2 -549.1 227.4C-585.4 161.7 -589.9 80.8 -594.3 0L0 0Z" fill="#4c0057"></path><path d="M0 509.4C-57.9 473.7 -115.8 438 -169.6 409.5C-223.4 381 -273.2 359.6 -327.2 327.2C-381.2 294.8 -439.6 251.3 -470.7 195C-501.7 138.6 -505.6 69.3 -509.4 0L0 0Z" fill="#670054"></path><path d="M0 424.5C-48.3 394.8 -96.5 365 -141.4 341.3C-186.2 317.5 -227.7 299.7 -272.7 272.7C-317.7 245.7 -366.3 209.4 -392.2 162.5C-418.1 115.5 -421.3 57.7 -424.5 0L0 0Z" fill="#7f004e"></path><path d="M0 339.6C-38.6 315.8 -77.2 292 -113.1 273C-149 254 -182.1 239.8 -218.1 218.1C-254.2 196.5 -293 167.6 -313.8 130C-334.5 92.4 -337.1 46.2 -339.6 0L0 0Z" fill="#930046"></path><path d="M0 254.7C-29 236.9 -57.9 219 -84.8 204.8C-111.7 190.5 -136.6 179.8 -163.6 163.6C-190.6 147.4 -219.8 125.7 -235.3 97.5C-250.9 69.3 -252.8 34.6 -254.7 0L0 0Z" fill="#a5003c"></path><path d="M0 169.8C-19.3 157.9 -38.6 146 -56.5 136.5C-74.5 127 -91.1 119.9 -109.1 109.1C-127.1 98.3 -146.5 83.8 -156.9 65C-167.2 46.2 -168.5 23.1 -169.8 0L0 0Z" fill="#b30030"></path><path d="M0 84.9C-9.7 79 -19.3 73 -28.3 68.3C-37.2 63.5 -45.5 59.9 -54.5 54.5C-63.5 49.1 -73.3 41.9 -78.4 32.5C-83.6 23.1 -84.3 11.5 -84.9 0L0 0Z" fill="#b81029"></path></g><g transform="translate(0, 800)"><path d="M0 -679.2C72.2 -624.4 144.5 -569.5 223.1 -538.6C301.8 -507.8 386.8 -501 459.6 -459.6C532.4 -418.3 593 -342.3 627.5 -259.9C662.1 -177.6 670.7 -88.8 679.2 0L0 0Z" fill="#2b0156"></path><path d="M0 -594.3C63.2 -546.3 126.4 -498.3 195.2 -471.3C264 -444.3 338.5 -438.4 402.2 -402.2C465.9 -366 518.9 -299.5 549.1 -227.4C579.3 -155.4 586.8 -77.7 594.3 0L0 0Z" fill="#4c0057"></path><path d="M0 -509.4C54.2 -468.3 108.3 -427.1 167.3 -404C226.3 -380.8 290.1 -375.7 344.7 -344.7C399.3 -313.7 444.7 -256.7 470.7 -195C496.6 -133.2 503 -66.6 509.4 0L0 0Z" fill="#670054"></path><path d="M0 -424.5C45.1 -390.2 90.3 -355.9 139.4 -336.6C188.6 -317.4 241.8 -313.1 287.3 -287.3C332.8 -261.4 370.6 -213.9 392.2 -162.5C413.8 -111 419.2 -55.5 424.5 0L0 0Z" fill="#7f004e"></path><path d="M0 -339.6C36.1 -312.2 72.2 -284.7 111.6 -269.3C150.9 -253.9 193.4 -250.5 229.8 -229.8C266.2 -209.1 296.5 -171.2 313.8 -130C331.1 -88.8 335.3 -44.4 339.6 0L0 0Z" fill="#930046"></path><path d="M0 -254.7C27.1 -234.1 54.2 -213.5 83.7 -202C113.2 -190.4 145.1 -187.9 172.4 -172.4C199.7 -156.8 222.4 -128.4 235.3 -97.5C248.3 -66.6 251.5 -33.3 254.7 0L0 0Z" fill="#a5003c"></path><path d="M0 -169.8C18.1 -156.1 36.1 -142.4 55.8 -134.7C75.4 -126.9 96.7 -125.2 114.9 -114.9C133.1 -104.6 148.2 -85.6 156.9 -65C165.5 -44.4 167.7 -22.2 169.8 0L0 0Z" fill="#b30030"></path><path d="M0 -84.9C9 -78 18.1 -71.2 27.9 -67.3C37.7 -63.5 48.4 -62.6 57.5 -57.5C66.6 -52.3 74.1 -42.8 78.4 -32.5C82.8 -22.2 83.8 -11.1 84.9 0L0 0Z" fill="#b81029"></path></g></svg>
</div>
    );
};

const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    // overflow: "hidden",
    zIndex: -1,
  },
  svg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  };
  

export default LayeredBackground;

function generateColor() {
    const hexArray = "0123456789ABCDEF"; 
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += hexArray[Math.floor(Math.random() * 16)]; 
    }
  
    return `#${code}`; 
  }
  
  const btn = document.getElementById("btn");
  const divi = document.getElementById("divi-1");
  
  btn.addEventListener('click', () => {
    divi.style.backgroundColor = generateColor(); 
  });
  
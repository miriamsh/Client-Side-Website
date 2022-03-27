
  const showPass=document.querySelector(".view-pass");
  showPass.onclick=()=>{
      const pass=document.querySelector(".input-pass");
      if(pass.type==="password")
      {
          pass.type="text";
      }
      else{
          pass.type="password";
      }
  }
  const name_input=document.querySelector(".input-name");
  const pass_input=document.querySelector(".input-pass");
  
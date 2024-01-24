
fetch('https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18') 
.then((res)=> res.json()) 
.then((data) => {
    const passs = data.data;          
    const ps = document.getElementById("pass");
    ps.value = passs;

    document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
        const inputField = copyLinkParent.querySelector(".copy-link-input");
        const copyButton = copyLinkParent.querySelector(".copy-link-button");

        inputField.addEventListener("focus", () => inputField.select());
        const text = passs;
        copyButton.addEventListener("click", () => {
          inputField.select();
          navigator.clipboard.writeText(text);
      
          inputField.value = "Copied!";
          setTimeout(() => (inputField.value = text), 2000);
        });
      });
}) 


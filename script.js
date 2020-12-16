function pageLoaded() {

    let myObjects = [
        {
            tag: "h1",
            content: "Nagy Gabriella"
        },
        {
            tag: "p",
            content: "frontend developer"
        }
    ];

    //for (let i = 0; i < myObjects.length; i++) {}


    for(o of myObjects){
        console.log(o.tag);
        
//létre kell hozni: h1, bene a nevem és p tag, benne lorem ipsum
        document.getElementById("root").insertAdjacentHTML("beforeend", `
        <${o.tag}>${o.content}</${o.tag}
        `);

    }
    root.addEventListener("click", function() {
        root.classList.toggle("clicked");
      });

}
window.addEventListener("load", pageLoaded);




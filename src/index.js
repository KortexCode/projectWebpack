const $links = document.getElementById("links");
const $name = document.querySelector("h1");
const $nickName = document.querySelector("h2");
const $description = document.getElementById("description");
const $socialMedia = document.getElementById("social-media-container");

const data = {
    name: "César Cortés",
    nickname: "@CortésCode",
    description: "Soy Colombiano, actualmente viviendo en Colombia, estoy aprendiendo Desarrollo Web como <b>estudiante de Platzi</b> deseo ampliar mis conocimientos en las diferentes disciplinas del desarrollo de software.",
    avatar: "../assets/profile-1.jpg",
    social: [
        {
            name: "GitHub",
            url: "https://github.com/",
            username: "Maeno323",
            color:"#6e5494",
        },
        {
          name: "instagram",
          url: "https://instagram.com/",
          username: "cesar_cortesl",
          color:"#E4405F"
        },
        {
          name: "twitter",
          url: "https://twitter.com/",
          username: "CesarCortesL",
          color:"blue"
        },
        {
          name: "linked",
          url: "https://www.linkedin.com/in/",
          username: "cesaraugustocorteslabrada",
          color:"blue"
        },

    ],
    links: [
        {
          name: "Portafolio(proximamente)",
          url: "https://example.com/",
          color: "yellow",
          emoji: "📖",
        },
      
    ],
    footer: "Made with Love on Colombia",
};


const main = ()=>{
    let name = document.createTextNode(data?.name);
    let nick = document.createTextNode(data?.nickname);
    let p = document.createElement("p");
    
    let links = data?.links.map((link)=>{
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
                    <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                    href="${link.url}" target="_blank">
                    ${link.name}
                    </a>
                    <span>${link.emoji}</span>
                </div>`;
    }).join('');
    //agregando proyectos del perfil
    let sectionLinks = document.createElement("section");
    sectionLinks.innerHTML = links;
    $links.appendChild(sectionLinks);
    //agregando nombre y nickname del perfil
    $name.appendChild(name);
    $nickName.appendChild(nick);
    //Descripción del perfil
    $description.appendChild(p);
    p.innerHTML = data?.description;
    $socialMedia.parentNode.insertBefore(p, $socialMedia);
    
  


}
main();
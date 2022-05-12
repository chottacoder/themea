var posts = [
    {
      name: "meri gun hai ye",
      about: "Use VPN",
      src: "https://i.ibb.co/dDTs0s1/Screenshot-2022-0512-151934.png",
      link: "mega.nz/folder/mlk0XYxB#J7gzSQ8HbHaB4XdG7mWSSQ"
    },
    {
      name: "meri gun hai ye",
      about: "Use VPN",
      src: "https://i.ibb.co/dDTs0s1/Screenshot-2022-0512-151934.png",
      link: "mega.nz/folder/mlk0XYxB#J7gzSQ8HbHaB4XdG7mWSSQ"
    },
    {
      name: "Mixed video collection ♥️",
      about: "Total Size : 200mb",
      src: "https://i.ibb.co/7pQNZ6F/6298487055193321581-121.jpg",
      link: "pastelink.net/7rko6i42"
    },
    {
      name: "Chinese School Viral video",
      about: "click on download button",
      src: "https://i.ibb.co/RpnSWW2/6300738855007006945-121.jpg",
      link: "pastelink.net/tcudl0ag"
    },
    {
      name: "Anjali Arora Viral video",
      about: "Use VPN",
      src: "https://i.ibb.co/NVS67tB/Screenshot-2022-0512-150243.png",
      link: "mega.nz/folder/L9ESCRYC#wIGvkQ5lJRixADl5enHJTg"
    },
    {
      name: "Pakistani girl with boyfriend",
      about: "click on download button",
      src: "https://i.ibb.co/BVyRW8T/IMG-20220324-162013.jpg",
      link: "rentry.co/5kghd"
    },
    {
      name: "Girl in wooden",
      about: "click on download button",
      src: "https://i.ibb.co/hFt2hXF/Screenshot-2022-0318-222922.png",
      link: "pastelink.net/5ivtsqvj"
    },
    {
        name: "Tissue paper Viral video",
        about: "click on download button",
        src: "https://i.ibb.co/wwG0kSC/Screenshot-2022-0318-222908.png",
        link: "icedrive.net/s/2yWVXWC8ub7W2j2aA13f7ZSYb9w9"
    }, 
    {
        name: "Ladka ladki viral video 2",
        about: "click on download button",
        src: "https://i.ibb.co/gTL1FDF/Screenshot-2022-0318-202120.png",
        link: "icedrive.net/s/yW93NTvDuT8TvPSFhwW35FiG11Y4"
    }, 
    {
        name: "Ladka ladki viral video",
        about: "Click on Download Button",
        src: "https://i.ibb.co/RPrq70C/IMG-20220318-201947.jpg",
        link: "icedrive.net/s/Ybyf8RZyhSAf4v6gXkv12N1j98Wt"
    }
];

for (var p = 0; p < posts.length; p++) {
    var pr
        document.getElementById("product");
    product.innerHTML += `
<div class="product" 
style="background:url('${posts[p].src}');
background-size:cover;"
onclick="info(${p})"     data-aos="zoom-in-up">
<div id="info-p"><h4>${posts[p].name}</h4><br>
<button id="buy">Read</button></div>
</div>`
};

function info(num) {
    var info =
        document.getElementById("info");
    setTimeout(() => {
        info.style.display = "block";
    }, 1000);

    info.innerHTML = `
    <button class="fas fa-arrow-circle-left" id="backbtn" onclick="back_home()">back</button><br>
    <div class="img-box">
<img src="${posts[num].src}">    
</div>
<div class="info">
<h4 class="hinfo" >Information</h4>
<p class="ainfo">${posts[num].about}</p><br>
<button class="downlink"><a href="intent://${posts[num].link}#Intent;scheme=http;package=com.android.chrome;end">Download</a></button>
</div>`
};


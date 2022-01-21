let img = document.querySelector(".photo-list");
console.log(img);
let cnt = document.querySelector("em");
console.log(cnt);
let selected = document.querySelector(".selected");
let chat = document.querySelectorAll("img");
let chat2 = Array.from(chat);
console.log(chat2);
let table = chat2.length;
let nbClic = 2;

img.addEventListener("click", function (img) {
  img.target.classList.toggle("selected", compteur2());
  console.log("le switch a la class selected marche");
  //   cnt.textContent = nbClic++;
  //   cnt.textContent = nbClic--;
  return;
});

// function compteur() {
//   nbClic = ++nbClic;

//   if (nbClic <= a) {
//     console.log(nbClic);
//     console.log(
//       "connard sa marchera pas ya pas de decrementation dans cette boucle et elle retient pas celle qui on la class selected"
//     );
//     switch (nbClic) {
//       case 1:
//         cnt.innerHTML = "0";
//         break;
//       case 2:
//         cnt.innerHTML = "1";
//         break;
//       case 3:
//         cnt.innerHTML = "2";
//         break;
//       case 4:
//         cnt.innerHTML = "3";
//         break;
//       case 5:
//         cnt.innerHTML = "4";
//         break;
//       case 6:
//         cnt.innerHTML = "5";
//         break;
//       case 7:
//         cnt.innerHTML = "6";
//         break;
//       case 8:
//         cnt.innerHTML = "7";
//         break;
//       case 9:
//         cnt.innerHTML = "8";
//         break;
//       case 10:
//         cnt.innerHTML = "9";
//         break;
//       case 11:
//         cnt.innerHTML = "10";
//         nbClic = 0;
//         break;
//     }
//   }
// }

function compteur2() {
  if (selected === selected) {
    // for (let i = 0; i <= 10; i++) {
    //   console.log("je suis trop une merde sa marche pas");
    // }
    cnt.textContent = nbClic++;
  } else if (selected === img) {
    // for (let i = 10; (i = 0); i--) {
    //   console.log(
    //     "je suis vraiment une grosse merde incapable de faire marcher cette putin de boucle"
    //   );
    // }
    cnt.textContent = nbClic;
  } else {
    console.log("erreur");
  }
}

// for (let i = 0; i <= 3; i++) {
//   if (chat2[0] == 0) {
//     cnt.textContent = cnt++;
//   } else if (chat2[1] == 0) {
//     cnt.textContent = cnt++;
//   } else if (chat2[2] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[3] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[4] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[5] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[6] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[7] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[8] == nbClic) {
//     cnt.textContent = cnt++;
//   } else if (chat2[9] == nbClic) {
//     cnt.textContent = cnt++;
//   } else {
//     cnt.textContent = cnt--;
//   }
// }

// ("j'ai reussi comme sa du cous j'ai fait en css");
// img.addEventListener("mouseover", function () {
//   img.style.background = "silver";
// });

// questionContainer.addEventListener("mouseout", function () {
//   questionContainer.style.background = "white";
// });

console.log(chat2[0]);

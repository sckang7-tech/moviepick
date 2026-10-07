document.getElementById("modalContent").innerHTML=`
 <div style="font-size:13px;color:#aeb5c5">${m.year} · ${m.genre} · ⭐ ${m.rating}</div>
 <h2 style="font-size:34px;margin:8px 0 15px">${m.title}</h2>
 <p style="color:#cbd0dc;line-height:1.7">${m.desc}</p>
 <button class="primary" onclick="closeModal();randomPick()">🎲 다른 영화 추천</button>`;
 document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function randomPick(){
 const m=movies[Math.floor(Math.random()*movies.length)];
 showMovie(movies.indexOf(m));
}
render();

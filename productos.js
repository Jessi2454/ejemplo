const productos = [
  {
    nombre: "Postes de Cemento para Cerca",
    img: "postesdeconcreto.jpg",
    detalles: ["1.00m Alto $150 pza", "1.50m Alto- $190 pza", "2.00m Alto $230 pza" , "2.50m Alto $280 pza"]
  },
  {
    nombre: "Postes Ganaderos tipo T",
    img: "postesganaderos.jpg",
    detalles: ["1.83m Alto $110 pza", "2.13m Alto- $119 pza"]
  },
  {
    nombre: "Postes de Concreto para Derecho de Via",
    img: "posteconcretovia.jpg",
    detalles: ["ALTURA: 2.0 Metros",
"GROSOR: 15CM POR 15CM",
"RESISTENCIA.A LA COMPRENSIÓN: 150 KG/CM2",
"NÚM.DE MUESCAS: 5",
"DISTANCIAMIENTO ENTRE MUESCAS: 2.75 CM",
"REFORZADO CON ACERO: ARMEX CUADRADO DE 10CM POR 10CM"]
  },
  {
    nombre: "Mallas Ciclónicas calibre-13",
    img: "mallaciclonicagalvanizada.webp",
    detalles: ["1.00 M $980 Rollo 20 M","1.25 M $1,150 Rollo 20 M","1.50 M $1,250 Rollo 20 M", "1.75 M $1,400 Rollo 20 M", "2.00 M $1,520 Rollo 20 M"]
  },
  {
    nombre: "Mallas Borregueras o ganaderas",
    img: "mallaborregera.webp",
    detalles: ["1.20 M $1,250 Rollo 50 M", "1.40 M $1,270 Rollo 50 M","1.67 M $1,375 Rollo 50 M"]
  },
  {
    nombre: "Alambre de Púas",
    img: "Alambrepuas100.jpg",
    detalles: ["34 K (340 M) $1,200 Rollo","30 K (300 M) $1,050 Rollo"]
  },
  {
    nombre: "Tubos Corrugados PEAD",
    img: "tubocorrugado.png",
    detalles: ["4' $298 pza", "6'    $550 Pza",  
"8'    $942 Pza",  
"10'   $1,450 Pza", 
"12'   $1,750 Pza", 
"15'   $2,550 Pza",  
"18'    $3,650 Pza",  
"24 '   $5,630 Pza",  
"30'    $7,640 Pza",
"36'    $10,500 Pza", 
"42'   $14,800 Pza",  
"48' $18,000 Pza",  
"60'  $25,400 Pza",
]
},
  {
    nombre: "Separador para Alambre de Púas",
    img: "separador.jpeg",
    detalles: ["$58.00 Pza"]
  },
 {
  nombre: "Alambre Galvanizado (Varios calibres)",
  img: "alambregalvanizado.jpg",

  detalles: [
 
    "Calibre 9 Kilo: $65",
    "Calibre 11 Kilo: $65",
    "Calibre 13 Kilo: $65",
    "Calibre 14 Kilo: $65",
     
  ]
},

  {
    nombre: "Tubo Galvanizado",
    img: "tubo galvanizado.jpg",
    detalles: ["1 1/2 C-22 $260 Pza","1 7/8 C-22 $278 Pza" , "2 3/8 C-22 $498 Pza"]
  },
  {
    nombre: "concertina (5 ML)",
    img: "concertina.webp",
    detalles: ["Rollo: $390"]
  }
];



const contenedor = document.getElementById("productos");
productos.forEach((p, i) => {
  contenedor.innerHTML += `
    <div class="col-md-4">
      <div class="producto-card">
        <img src="${p.img}" class="producto-img w-100" alt="${p.nombre}">
        <div class="producto-body text-center">
          <div class="producto-title">${p.nombre}</div>
          <button class="btn btn-ver" data-bs-toggle="modal" data-bs-target="#modal${i}">Ver más</button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modal${i}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${p.nombre}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <ul>
              ${p.detalles.map(d => `<li>${d}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>`;
});

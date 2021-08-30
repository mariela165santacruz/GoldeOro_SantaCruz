export let remoteItems = [
    {
      id: 1,
      title: "Camiseta PSG azul",
      price: 15000,
      category: "camisetas",
      pictureUrl: "../images/Products/Camiseta azul PSG.jpg",
      stock: 5,
    },
    {
      id: 2,
      title: "Camiseta PSG blanca",
      price: 16000,
      category: "camisetas",
      pictureUrl: "../images/Products/Camiseta blanca PSG.jpg",
      stock: 2,
    },
    {
      id: 3,
      title: "Camiseta PSG roja",
      category: "camisetas",
      price: 15000,
      pictureUrl: "../images/Products/Camiseta roja PSG.jpg",
      stock: 1,
    },
    {
      id: 4,
      title: "Short PSG",
      category: "short",
      price: 6000,
      pictureUrl: "../images/Products/Shorts PSG.jpg",
      stock: 3,
    },
    {
      id: 5,
      title: "Short PSG blanco",
      category: "short",
      price: 6000,
      pictureUrl: "../images/Products/Shorts PSG blanco.jpg",
      stock: 3,
    },
    {
      id: 6,
      title: "Short United negro",
      category: "short",
      price: 2000,
      pictureUrl: "../images/Products/Shorts United negro.jpg",
      stock: 3,
    },
    {
      id: 7,
      title: "Medias PSG azul",
      category: "medias",
      price: 1000,
      pictureUrl: "../images/Products/Medias PSG azul.jpg",
      stock: 3,
    },
    {
      id: 8,
      title: "Medias PSG blanco",
      category: "medias",
      price: 1000,
      pictureUrl: "../images/Products/Medias PSG blanca.jpg",
      stock: 3,
    },
    {
      id: 9,
      title: "Medias PSG rojo",
      category: "medias",
      price: 1000,
      pictureUrl: "../images/Products/Medias PSG rojo.jpg",
      stock: 3,
    },
    {
      id: 10,
      title: "Pelota PSG azul",
      category: "pelota",
      price: 600,
      pictureUrl: "../images/Products/Pelota PSG azul.jpg",
      stock: 3,
    },
    {
      id: 11,
      title: "Pelota PSG blanco",
      category: "pelota",
      price: 600,
      pictureUrl: "../images/Products/Pelota PSG blanca.jpg",
      stock: 3,
    },
    {
      id: 12,
      title: "Pelota United",
      category: "pelota",
      price: 600,
      pictureUrl: "../images/Products/Pelota United.jpg",
      stock: 3,
    },
  ];
  
  export const AllProducts = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(remoteItems);
      }, 2000);
    });
    return promise;
  };
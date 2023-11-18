const products = [
    {
        "name": "Samsung Galaxy M23",
        "price": "64000",
        "id": "1",
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQO-sSvawgAIPePZHN4K4vsCPPlRcuJYiiy1D6ID53lCNbIekjcKaC_6SJ4nwMMNiPuBhqWFvbpOQea_LxgOPxqTLGhqNZagDSZUIraTm_e9q8RIydsxqv-&usqp=CAE",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Motorola Edge 30",
        "price": "92000",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRh3R5aiMDiYYclpPl1Pu8xmWrhYQHA15k7Rqhq2-Jj7lourvtUz1FUA-SaHCXDWyxV5xvuPTkQYNBmDlxuZ4qdZOyNORgfKDfthubVLiSoIkw0IT-W3KaZ&usqp=CAE",
        "id": "2",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Samsung Galaxy A54",
        "price": "55000",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQILM7mrfkUXF3QUUim3dIR_GFXUSrUj5SlBiJgLxEqgAC1F3WnSAI1WBUFmlzeugQ-RQvIgVpo0IhiCzCW4ONx3owS8hzPqCE-s0EqZEVmEnIOuypCWVhP&usqp=CAE",
        "id": "3",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Redmi Note 11",
        "price": "76000",
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKPa1J7gTNlFHuB8yjMtJ_TVXGHaSBWnbJVb6wMsVq-xuxdVRxX3BY9sPeLblhzJix6DkfNT7cdrGKMUY4rOmRepTXh1yf-o9jm7XHfBxvSMTwH6O3RJ5LEg&usqp=CAE",
        "id": "4",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Motorola E32",
        "price": "81000",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_hv--gx8kk481cAu17CpOkyS_I04hlkelNuJrIz1d_c3wq52Dt37_OEudqgSVlzVLZYEv-5TzQRRz3rLgeuOMvKvjrNVcE1OHR9BJDd5vvJ3TK9z_mrkZXw&usqp=CAE",
        "id": "5",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Motorola E22",
        "price": "63000",
        "image": "https://olmoshogar.com.ar/wp-content/uploads/2023/05/CELU-MOTOROLA-E22I-GRIS.jpg",
        "id": "6",
        "category": "telefono",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook HDC Intel",
        "price": "32000",
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGycXy4xZI1Wzqy0fahfHqtyeHjbd9FgU52e2bjR4PnG6y0znbJtXK0ktNhoD8MqynE84yFGeU_vJLTTmK-oFcWV60yL-sTlxEst69BJzpUthj3mze5D-j&usqp=CAE",
        "id": "7",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook Lenovo Amd",
        "price": "41000",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGEoue8yXr73SDKC2r4uaA2wpbzw-y7Z6ivYThdb63cDhfpvM-j0e8ZOxeZE2iaOZJ7pE4N6UdSOdG_nMExEbqCxmXuuoS7vR_-I-Ce6iF7hnYabUJuMmx&usqp=CAE",
        "id": "8",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook Netgreen N4020",
        "price": "29999",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSApEUMHIgsAAo0Zt82SZFExoZZ6TIN_2UCpm-mrsAeATlbjxqY-gB5oONQfx5xhJh0tSlbU8HJ79Tz7xv9Num61VZ6iNJH2XrVeITzDyq70_BbVK4TPQNDIn8&usqp=CAE",
        "id": "9",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook Lenovo5 Intel",
        "price": "30499",
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAqsyQF2Hg5Fx9NUG4Y_Xw6p12syyPdkWUo5zpoHhVwDYfdtPxm17lfHAkZhwwkim5r7zhc8efz87DpAYO4p1xmtqwgpCHrt78tOscXXvyVUF8l408wsWo&usqp=CAE",
        "id": "10",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook Dell 15,6",
        "price": "43000",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR64bzcXnqkJYAySSyOjYLN3hdDy6fYmlFQNyGYQro2rkTa-IzCcEQXerMN_GVRC-kmOC3-Wih_h3iH-j4qOkXcdZN-hGn6pfc_keNTUZJusIcflk8faOMPHA&usqp=CAE",
        "id": "11",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Notebook Celeron HDC",
        "price": "28500",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfsUUiZVBBM5Rlxk4Sjc7OFYmXBV_zR3KqxhdxRS8Eas_pWIlgLbAL4kEhAoYI-knEpjyMOWFva7rj75F75d_UW8nuZvQaISnOWmULGqmGIFhH86Xz0_utWA&usqp=CAE",
        "id": "12",
        "category": "notebook",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Tablet x View Mymo",
        "price": "30000",
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQswZOUo_hoBhdXdGvbmc8c1C94xopfR12wv0lLaMRD5satf9qtmXH7W76lmwINsCAgDvL6B0RsInGCyE--nFU3tglbpdO_LOsvBkUqMHd92d2zCs2nA0yH&usqp=CAE",
        "id": "13",
        "category": "tablet",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Tablet Samsung Galaxy A7",
        "price": "19999",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSE69JrrNLL1m84JEdErIgbt7V2zA98Hj4efRDM9UwvjAxSIxBzyM5RcTkH1y92pZNZtGvcbF6TVmckyDwRgE5saY-cKQjfPFFP6YQEC52dhEcYNYk14z1vug&usqp=CAE",
        "id": "14",
        "category": "tablet",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Tablet 10 Netgreen",
        "price": "20041",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ-B_H9TMZk07KrnNERD7KUYAa8DBJ4nkt-kBSz8qnlcDsbqEn5M43vHJjfsQBsNcUCwKqZPjReMDtBcyPgdlLTlf4SiAlMTxO72sD7UBI3RNyVAoS9zyOtug&usqp=CAE",
        "id": "15",
        "category": "tablet",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    },
    {
        "name": "Tablet Lenovo 10",
        "price": "20100",
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEzPA43kg2YFbZ4ld1L7W-5Ipq_7IuX4j09j-q9xE4sSFBNUIqAp0vNA9xMFDaVFE-vtehisYUZERbG87hbjZ5vZZEFOm9v482QbYC84zp61yiQth8VpLaHQ&usqp=CAE",
        "id": "16",
        "category": "tablet",
        "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
    }
];

export const getPhones = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0){
            setTimeout(() => {
                resolve(products)
            }, 2000);
        } else reject ("Hubo un problema con los productos");
    });
}

export const getPhoneById = id => {
    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find(p => p.id === id);
            setTimeout(() => {
                if(!product) reject (`No se encuentra el producto con el id: ${id}`)
                resolve(product)
            }, 2000);
        } else reject("No hay productos")
    })
}
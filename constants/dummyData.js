import { icons, images } from "./";

const myProfile = {
    name: "Joevitor Sant'Ana",
    profile_image: images.profile,
    address: "Rodovia Raposo Tavares, Km 561"
}

const categories = [
    {
        id: 1,
        name: "Lanches",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Açaí",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "Japonesa",
        icon: icons.rice
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Destaques",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Próximos",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Populares",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Novidades",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Tendências",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recomendados",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: 'P'
    },
    {
        id: 2,
        label: 'M'
    },
    {
        id: 3,
        label: 'G'
    },
    {
        id: 4,
        label: 'GG'
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234",        
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]



const pizza_hut = {
    id: 1,
    restaurant_name: 'Pizza Hut',
    value: 35.30,
    date: '02 Jul, 20:11',
    qty: 3,
    status: 'Em andamento',
    restaurant_image: require('../assets/icons/pizza_hut.png')
}
const kfc = {
    id: 2,
    restaurant_name: 'KFC',
    value: 95.30,
    date: '02 Jul, 20:11',
    qty: 4,
    status: 'Finalizado',
    restaurant_image: require('../assets/icons/kfc.png')
}


const orders = [
    {
        id: 1,
        name: "Finalizados",
        list: [
            kfc
        ]
    },
    {
        id: 2,
        name: "Em andamento",
        list: [
            pizza_hut
        ]
    }
]

export default {
    vegBiryani,    
    myProfile,
    categories,
    menu,
    sizes,
    myCards,
    allCards,
    fromLocs,
    myCart,
    orders
}
const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Escolha sua comida favorita",
        description: "Pedindo com a Eatme você ganha cupons exclusivos e recompensas especiais "
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Entrega rápida",
        description: "Fazemos entrega rápida e gratuita, para que a comida chegue quentinha até você"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Refeições de qualidade",
        description: "Você vai receber seu pedido a qualquer hora o pode usar créditos de entregas GRÁTIS"
    }
]

const screens = {
    main_layout: "MainLayout",
    home: "Início",
    search: "Pesquisar",
    cart: "Carrinho",
    favourite: "Favoritos",
    notification: "Notificações",
    my_wallet: "Minha Carteira"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const track_order_status = [
    {
        id: 1,
        title: "Pedido recebido",
        sub_title: "Seu pedido foi recebido"
    },
    {
        id: 2,
        title: "Em andamento",
        sub_title: "Seu pedido está sendo preparado!"
    },
    {
        id: 3,
        title: "Saiu para entrega!",
        sub_title: "Seu pedido está a caminho!"
    },
    {
        id: 4,
        title: "Entregue",
        sub_title: "Bom apetite!"
    },
    {
        id: 5,
        title: "Avalie nos",
        sub_title: "Ajude nos melhorar o serviço"
    }
]

const GOOGLE_MAP_API_KEY = "AIzaSyC_sLvMdC00cZujERzbwu57C0mYjkYj29E"

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    track_order_status,
    GOOGLE_MAP_API_KEY
}
import HomePage from "@/pages/HomePage";
import BasketPage from "@/pages/BasketPage";
import ItemsListPage from "@/pages/ItemsListPage";
import LoadPage from "@/pages/LoadPage";

export const routes = [
    { path: '/', component: HomePage },
    { path: '/store', component: ItemsListPage},
    { path: '/basket', component: BasketPage },
    { path: '/load', component: LoadPage },
]

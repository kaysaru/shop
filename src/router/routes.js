import HomePage from "@/pages/HomePage";
import BasketPage from "@/pages/BasketPage";
import ItemsListPage from "@/pages/ItemsListPage";

export const routes = [
    { path: '/', component: HomePage },
    { path: '/store', component: ItemsListPage},
    { path: '/basket', component: BasketPage },
]

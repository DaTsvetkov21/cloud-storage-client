// @ts-ignore
import AppHeader from "@/components/AppHeader";
// @ts-ignore
import AppFooter from "@/components/AppFooter";


export default {
    components: {
        AppHeader,
        AppFooter,

    },
    redirect: {name: '/auth'},
    name: "App",

}
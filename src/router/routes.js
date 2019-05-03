import CarouselBootraps from './../components/layout/CarouselBootstraps.vue'
import Header from './../components/layout/Header.vue'
import Footer from './../components/layout/Footer.vue'
import myForm from '../components/home/MyForm.vue'
import formBootraps from "./../components/home/MyFormBoot.vue"
import datatableBootstraps from "./../components/home/Data.vue";
import fruits from "./../components/home/fruits/Fruits.vue"
import fruitStart from "./../components/home/fruits/FruitsStart.vue"
import fruitDetails from "./../components/home/fruits/FruiltsDetails.vue"
import fruitEdit from "./../components/home/fruits/FruitsEdit.vue"
import SignUp from "../components/authentication/Register.vue"
import success from "../components/authentication/Success.vue"
import login from "../components/authentication/Login.vue"
export const routes = [
    {
        /* eslint-disable */
        path: '/',
        name: 'home',
        components: {
            default: CarouselBootraps,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/myForm', name: 'myForm', components: {
            default: myForm,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/myFormBoots', name: 'myFormBoots', components: {
            default: formBootraps,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/tableData', name: 'tableData', components: {
            default: datatableBootstraps,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/fruit', name: 'fruit', components: {
            default: fruits,
            'header-top': Header,
            'header-bottom': Footer
        }, children: [
            { path: '', component: fruitStart },
            { path: ':id', component: fruitDetails },
            { path: ':id/edit', component: fruitEdit, name: 'fruitEdit' }
        ]
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        components: {
            default: SignUp,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: login,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/success', name: 'success', components: {
            default: success,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/page404' }
]
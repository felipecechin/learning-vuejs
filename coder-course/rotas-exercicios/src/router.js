import Vue from "vue";
import Router from 'vue-router'
import Inicio from "@/components/Inicio";
import Menu from "@/components/template/Menu";
import Opa from "@/components/template/Opa";
import MenuAlt from "@/components/template/MenuAlt";

Vue.use(Router)

const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [{
        path: '/',
        // component: Inicio,
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu,
            opa: Opa
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {
                path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                    console.log('antes da rota usuario detalhe')
                    next()
                }
            },
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    },
        {
            path: '*',
            redirect: '/'
        }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas')
    if (to.path !== '/usuario') {
        next()
    } else {
        next()
    }
})

export default router


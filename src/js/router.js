import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const home = Loadable({loader: () => import('../routers/Home'), loading : DelayLoading,delay:3000});
const button = Loadable({loader: () => import('../routers/General/Button/index'), loading : DelayLoading,delay:3000});
const icon = Loadable({loader: () => import('../routers/General/Icon/index'), loading : DelayLoading,delay:3000});
const grid = Loadable({loader: () => import('../routers/LayoutsDom/Grid/index'), loading : DelayLoading,delay:3000});
const layouts = Loadable({loader: () => import('../routers/LayoutsDom/Layouts/index'), loading : DelayLoading,delay:3000});
const affix = Loadable({loader: () => import('../routers/Navigation/Affix/index'), loading : DelayLoading,delay:3000});
const breadcrumb = Loadable({loader: () => import('../routers/Navigation/Breadcrumb/index'), loading : DelayLoading,delay:3000});
const dropdown = Loadable({loader: () => import('../routers/Navigation/Dropdown/index'), loading : DelayLoading,delay:3000});
const menu = Loadable({loader: () => import('../routers/Navigation/Menu/index'), loading : DelayLoading,delay:3000});
const pagination = Loadable({loader: () => import('../routers/Navigation/Pagination/index'), loading : DelayLoading,delay:3000});
const steps = Loadable({loader: () => import('../routers/Navigation/Steps/index'), loading : DelayLoading,delay:3000});
const auto = Loadable({loader: () => import('../routers/DataEntry/AutoComplete/index'), loading : DelayLoading,delay:3000});
const cascader = Loadable({loader: () => import('../routers/DataEntry/Cascader/index'), loading : DelayLoading,delay:3000});
const checkbox = Loadable({loader: () => import('../routers/DataEntry/Checkbox/index'), loading : DelayLoading,delay:3000});
const date = Loadable({loader: () => import('../routers/DataEntry/DatePicker/index'), loading : DelayLoading,delay:3000});
const form = Loadable({loader: () => import('../routers/DataEntry/Form/index'), loading : DelayLoading,delay:3000});
const input = Loadable({loader: () => import('../routers/DataEntry/Input/index'), loading : DelayLoading,delay:3000});
const inputNumber = Loadable({loader: () => import('../routers/DataEntry/InputNumber/index'), loading : DelayLoading,delay:3000});
const Mention = Loadable({loader: () => import('../routers/DataEntry/Mention/index'), loading : DelayLoading,delay:3000});
const rate = Loadable({loader: () => import('../routers/DataEntry/Rate/index'), loading : DelayLoading,delay:3000});
const radio = Loadable({loader: () => import('../routers/DataEntry/Radio/index'), loading : DelayLoading,delay:3000});
const select = Loadable({loader: () => import('../routers/DataEntry/Select/index'), loading : DelayLoading,delay:3000});









export default [
    {
        path:'/home',
        component:home,
    },
    {
        path:'/general/button',
        component:button,
    },
    {
        path:'/general/icon',
        component:icon,
    },   
    {
        path:'/layoutdom/grid',
        component:grid,
    },
    {
        path:'/layoutdom/layouts',
        component:layouts,
    },
    {
        path:'/navigation/affix',
        component:affix,
    },
    {
        path:'/navigation/breadcrumb',
        component:breadcrumb,
    },
    {
        path:'/navigation/dropdown',
        component:dropdown,
    },
    {
        path:'/navigation/menu',
        component:menu
    },
    {
        path:'/navigation/pagination',
        component:pagination
    },
    {
        path:'/navigation/steps',
        component:steps
    },
    {
        path:'/data/autocomplete',
        component:auto,
    },
    {
        path:'/data/cascader',
        component:cascader,
    },
    {
        path:'/data/checkbox',
        component:checkbox,
    },
    {
        path:'/data/datepicker',
        component:date,
    },
    {
        path:'/data/form',
        component:form,
    },
    {
        path:'/data/input',
        component:input,
    },
    {
        path:'/data/inputNumber',
        component:inputNumber,
    },
    {
        path:'/data/mention',
        component:Mention,
    },
    {
        path:'/data/rate',
        component:rate,
    },
    {
        path:'/data/radio',
        component:radio,
    },
    {
        path:'/data/select',
        component:select,
    },
]
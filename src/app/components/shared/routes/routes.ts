// src/app/components/shared/routes/routes.ts
export type Route = {
    name: string;
    path?: string;
    children?: Route[];
};

export const routes: { [key: string]: Route } = {

    shop: {
        name: 'Shop',
        children: [
            { name: 'Products', path: '/shop/products' },
            { name: 'Category', path: '/shop/category' },
            {
                name: 'Card',
                path: '/shop/card'
            }
        ]
    },

    cart: { name: 'Cart', path: '/cart' },
    administration: {
        name: 'Administration',
        path: '/administration',
        children: [
            { name: 'Users', path: '/administration/user' },
            { name: 'History', path: '/administration/history' }
        ]
    },
    account: {
        name: 'Account',
        children: [
            { name: 'Login', path: '/login' },
            { name: 'Register', path: '/register' },
            { name: 'Logout', path: '#' }
        ]
    }
};

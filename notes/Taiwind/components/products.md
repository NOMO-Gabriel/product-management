# Cours sur la Gestion des Produits avec Next.js et Tailwind CSS

## 1. CSS

### 1.1 Alignement et Disposition

- **Aligner un élément dans son parent**
    - **Classes :** `flex`, `items-center`, `justify-between`
    - **Explication :** Utilisez `flex` pour activer le mode flexbox, ce qui permet un alignement flexible des éléments enfants. `items-center` aligne verticalement les éléments au centre, et `justify-between` répartit l'espace disponible entre les éléments enfants, alignant certains à gauche et d'autres à droite.

- **Centrer un élément**
    - **Classes :** `text-center`, `mx-auto`
    - **Explication :** `text-center` centre le texte horizontalement dans son conteneur, tandis que `mx-auto` centre un élément bloc avec une largeur fixe dans son parent.

- **Créer des espacements uniformes**
    - **Classes :** `p-4`, `m-4`, `space-x-4`, `space-y-4`
    - **Explication :** `p-4` ajoute un padding uniforme autour de l'élément, `m-4` ajoute une marge uniforme. `space-x-4` et `space-y-4` ajoutent de l'espace horizontal et vertical entre les éléments enfants respectivement.

### 1.2 Bordures et Styles

- **Ajouter des bordures**
    - **Classes :** `border-2`, `border-gray-300`, `rounded`
    - **Explication :** `border-2` ajoute une bordure de 2px d'épaisseur. `border-gray-300` définit la couleur de la bordure comme gris clair. `rounded` applique des coins arrondis aux éléments.

- **Effets au survol**
    - **Classes :** `hover:bg-blue-100`, `hover:text-orange-500`
    - **Explication :** `hover:bg-blue-100` change la couleur de fond au survol en bleu clair, tandis que `hover:text-orange-500` modifie la couleur du texte au survol en orange foncé.

- **Transitions**
    - **Classes :** `transition-colors`, `duration-300`
    - **Explication :** `transition-colors` applique une transition douce pour les changements de couleur, et `duration-300` définit la durée de la transition à 300ms.

## 2. Fonctions et Hooks JavaScript

### 2.1 Fonction `fetchProducts`

- **But :** Récupère les produits depuis l'API.
  - **Syntaxe :**
    ```javascript
    const fetchProducts = async () => {
        try {
            setError(null);
            const productList = await getProducts();
            setProducts(productList);
        } catch (error) {
            setError('Failed to load products');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    - Explication : Utilise `async/await` pour les appels asynchrones. try et catch gèrent les erreurs. finally s'exécute toujours pour mettre à jour l'état de chargement.

2.2 Hook `useEffect`

- **But** : Effectue un effet secondaire lorsqu'un composant est monté ou mis à jour.
  -  **Syntaxe** :
    ```` javascript 
    useEffect(() => {
    fetchProducts();
    }, []);
- **Explication**: `useEffect` appelle `fetchProducts` lorsque le composant est monté. Le tableau vide `[]` signifie que l'effet se déclenche uniquement au montage. 

2.3 Hook `useState`

- **But** : Gère l'état local dans le composant. 
   - **Syntaxe** :
    
        ````javascript
        
        const [products, setProducts] = useState<Product[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);

Explication : useState initialise les variables d'état products, loading, et error, avec leurs setters respectifs (setProducts, setLoading, setError).

### 3. Composant ProductCard

- **But** : Affiche une carte de produit.
   - **Structure**:

    ````javascript
    
    const ProductCard = ({ product }: { product: Product }) => {
    return (
    <div className="transition-colors duration-300 cursor-pointer hover:scale-105">
    <Link href={`/shop/products/${product.id}`}>
    <div className="border-2 border-gray-300 w-full sm:w-80 mt-8 h-80">
    <div className="h-1/2 border-1 border-gray-300">
    <img
    className="w-full h-full object-cover"
    src={product.mainImage.url}
    alt={`Product ${product.id}`}
    />
    </div>
    <div className="border-2 h-1/4">
    <div className="flex space-x-12 justify-center text-lg font-semibold p-6">
    <h3 className="text-lg font-semibold text-black hover:text-orange-500 duration-200">
    {product.name}
    </h3>
    </div>
    </div>
    <div className="mt-4 flex space-x-4 items-center border-gray-500 h-1/4 p-4 space-y-2">
    <span className="text-blue-950 space-x-2 -ml-2 hover:text-orange-500 duration-200">
    {product.price}
    <span className="text-black font-semibold italic text-sm">FCFA</span>
    </span>
    <Link href={`/shop/products/${product.id}`}>
    <button className="bg-black text-white rounded hover:bg-blue-600 text-lg p-2 mb-4">
    More
    </button>
    </Link>
    <div>
    <button className="bg-black text-white rounded hover:bg-blue-600 text-lg p-2 mb-4">
    Add To Cart
    </button>
    </div>
    </div>
    </div>
    </Link>
    </div>
    );
    };

- **Explication** : Ce composant affiche une carte avec une image, un titre, un prix et deux boutons (pour plus d'informations et pour ajouter au panier). Utilise des classes Tailwind pour la mise en page et les styles.

### 4. Gestion des Erreurs

   Gestion des erreurs lors de la récupération des produits
   - **Code** :

    ````javascript

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen p-4 bg-red-50 border border-red-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-600">Error</h2>
                <p className="text-xl text-red-500 mt-2">{error}</p>
                <button
                    onClick={() => {
                        window.location.reload();
                    }}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

- **Explication** : Si une erreur se produit, elle est affichée avec un message d'erreur et un bouton permettant de réessayer.

### 5. Pagination

   Logique de pagination
   Code :

    ````javascript

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
   const totalPages = Math.ceil(products.length / productsPerPage);

 - **Explication** : Calcule les indices pour découper la liste des produits en pages et détermine le nombre total de pages.

Changement de page

- **Code** :

   ``` javascript

    const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    };

- **Explication** : Met à jour le numéro de la page courante lorsqu'un bouton de pagination est cliqué.
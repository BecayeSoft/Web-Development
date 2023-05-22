import { plantList }from '../data/plantList'
import CareScale from './CareScale'

function ShoppingList() {

    // Get the categories
    // If the previous plant's category is the same as the current plant's category,
    // don't do anything
    // Else, add the previous plant's category to the array
    const categories = plantList.reduce(
		(prevPlant, currPlant) =>
            prevPlant.includes(currPlant.category) ? prevPlant : prevPlant.concat(currPlant.category), []
	)

    return (
        <div>
            <h3>Catégories</h3>
            <ul>
                {
                    categories.map((cat) => (
                        <li key={`${cat}`}>
                            {cat}
                        </li>
                    ))
                }
            </ul>
            <h3>Plantes</h3>
            <ul>
                {
                    plantList.map((plant) => (
                        <li key={`${plant.id}`}>
                            {plant.name}
                            {(plant.isBestSale || plant.category === 'classique') && ' 🔥'}
                            {plant.isSpecialOffer && <div className='lmg-sales'>Soldes</div>}

                            <CareScale scaleValue={plant.light} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList
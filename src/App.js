import React from 'react';
import Indgridients from './components/Indgridients';
import Directions from './components/Baking';
import './App.css';



const hypotheticalAPIReturn = {
  indgridientsList: [
    '½ cup butter, melted',
    '1 cup white sugar',
    '2 eggs',
    '1 teaspoon vanilla extract',
    '1 ½ cups all-purpose flour',
    '1 teaspoon baking soda',
    '½ teaspoon salt',
    '½ cup sour cream',
    '½ cup chopped walnuts',
    '2 medium bananas, sliced'
  ],
  bakingSteps: [
    'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x5 inch loaf pan.',
    'In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well. Combine the flour, baking soda and salt, stir into the butter mixture until smooth. Finally, fold in the sour cream, walnuts and bananas. Spread evenly into the prepared pan.',
    'Bake at 350 degrees F (175 degrees C) for 60 minutes, or until a toothpick inserted into the center of the loaf comes out clean. Cool loaf in the pan for 10 minutes before removing to a wire rack to cool completely.'
  ]
}

function App() {
  return (
    <div className="App">
        <h1>Rich Banana Bread</h1>
        <img src="https://images-gmi-pmc.edge-generalmills.com/15c3e73d-8bb9-4c4c-b47a-bb01a17b0dca.jpg" alt="loaf of banana bread of the board"/>
        {/* passing the props */}
        <Indgridients list={hypotheticalAPIReturn.indgridientsList} />
        <Directions list={hypotheticalAPIReturn.bakingSteps} />

    </div>
  );
}


export default App;

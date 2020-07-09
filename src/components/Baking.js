import React, { Component } from "react";

/* 
//before hypotheticalFromAPI
const bakingSteps = [
    'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x5 inch loaf pan.',
    'In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well. Combine the flour, baking soda and salt, stir into the butter mixture until smooth. Finally, fold in the sour cream, walnuts and bananas. Spread evenly into the prepared pan.',
    'Bake at 350 degrees F (175 degrees C) for 60 minutes, or until a toothpick inserted into the center of the loaf comes out clean. Cool loaf in the pan for 10 minutes before removing to a wire rack to cool completely.'
] 

const bakingStepsJSX = bakingSteps.map(element => <li>{element}</li>)
*/
class Baking extends Component{
    render() {
        return (
            <div>
                <h2>Directions:</h2>
                <ol className='text-left'>
                    {/* { bakingStepsJSX } */}
                    {this.props.list.map(element => <li>{element}</li>) }
                    
                </ol>

            </div>
        );
    }
 }

 export default Baking;
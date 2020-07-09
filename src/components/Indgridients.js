import React, { Component } from "react";

/* 
//before hypotheticalFromAPI
const indgridientsList = [
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
] 
const indgridientsJSX = indgridientsList.map(element => <li>{element}</li>)
*/

class Indgridients extends Component{
    render() {
        return (
            <div>
                <h2>Indgridients:</h2>
                <ul className='text-left'>
                    {/* indgridientsJSX */}
                    {this.props.list.map(element => <li>{element}</li>) }
                </ul>
            </div>
        );
    }
 }

 export default Indgridients;
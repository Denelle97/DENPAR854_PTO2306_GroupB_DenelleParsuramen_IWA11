// script.js

// added function to update order details...
function updateOrderDetails(orderKey) {
    const root = document.querySelector(`[data-key="${orderKey}"]`); 
    
    /*Selected the root element for the specified order key
    *
    * Used the "document.querySelector" method with a data attribute selector 
    * to select the root element for the specified order key.
    */
////////////////////////////////////////////////////////////////////////////////////////////////

    /* Select specific elements within the order for biscuits, donuts, pancakes, and status
    *
    * Used querySelector to select specific elements within the order based on their classes.
    */
    const biscuits = root.querySelector('.biscuits .count');
    const donuts = root.querySelector('.donuts .count');
    const pancakes = root.querySelector('.pancakes .count');
    const status = root.querySelector('.status dd');

    // Accessing data attributes for the specified order using `getAttribute`
    const biscuitsCount = root.getAttribute('data-biscuits');
    const donutsCount = root.getAttribute('data-donuts');
    const pancakesCount = root.getAttribute('data-pancakes');
    const deliveredStatus = root.getAttribute('data-delivered');

    /**  Updated text content of specific elements with the data attribute values
     *   Used Template literals
     * */
    biscuits.textContent = `Biscuits: ${biscuitsCount}`;
    donuts.textContent = `Donuts: ${donutsCount}`;
    pancakes.textContent = `Pancakes: ${pancakesCount}`;
    status.textContent = deliveredStatus === 'true' ? 'Delivered' : 'Pending';
}

// Called the updateOrderDetails function for each order to update their details.
updateOrderDetails('order1');
updateOrderDetails('order2');
updateOrderDetails('order3');

///////////////////////////////////////////////////////

//Different/long way of solving this challenge

// Order 1
// const root1 = document.querySelector('[data-key="order1"]'); // Selected the root element of Order 1
// const biscuits1 = root1.querySelector('.biscuits .count'); // Selected  the count element for biscuits in Order 1
// const donuts1 = root1.querySelector('.donuts .count'); // Selected  the count element for donuts in Order 1
// const pancakes1 = root1.querySelector('.pancakes .count'); // Selected  the count element for pancakes in Order 1
// const status1 = root1.querySelector('.status .count'); // Selected  the count element for status in Order 1

// // Order 2
// const root2 = document.querySelector('[data-key="order2"]'); // Selected  the root element of Order 2
// const biscuits2 = root2.querySelector('.biscuits .count'); // Selected  the count element for biscuits in Order 2
// const donuts2 = root2.querySelector('.donuts .count'); // Selected  the count element for donuts in Order 2
// const pancakes2 = root2.querySelector('.pancakes .count'); // Selected  the count element for pancakes in Order 2
// const status2 = root2.querySelector('.status .count'); // Selected  the count element for status in Order 2

// // Order 3
// const root3 = document.querySelector('[data-key="order3"]'); // Selected  the root element of Order 3
// const biscuits3 = root3.querySelector('.biscuits .count'); // Selected the count element for biscuits in Order 3
// const donuts3 = root3.querySelector('.donuts .count'); // Selected the count element for donuts in Order 3
// const pancakes3 = root3.querySelector('.pancakes .count'); // Selected the count element for pancakes in Order 3
// const status3 = root3.querySelector('.status .count'); // Selected the count element for status in Order 3

// // Update values based on data attributes
// // Order 1
// biscuits1.textContent = root1.getAttribute('data-biscuits'); // Set the count for biscuits in Order 1
// donuts1.textContent = root1.getAttribute('data-donuts'); // Set the count for donuts in Order 1
// pancakes1.textContent = root1.getAttribute('data-pancakes'); // Set the count for pancakes in Order 1
// status1.textContent = root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'; // Set the status in Order 1

// // Order 2
// biscuits2.textContent = root2.getAttribute('data-biscuits'); // Set the count for biscuits in Order 2
// donuts2.textContent = root2.getAttribute('data-donuts'); // Set the count for donuts in Order 2
// pancakes2.textContent = root2.getAttribute('data-pancakes'); // Set the count for pancakes in Order 2
// status2.textContent = root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'; // Set the status in Order 2

// // Order 3
// biscuits3.textContent = root3.getAttribute('data-biscuits'); // Set the count for biscuits in Order 3
// donuts3.textContent = root3.getAttribute('data-donuts'); // Set the count for donuts in Order 3
// pancakes3.textContent = root3.getAttribute('data-pancakes'); // Set the count for pancakes in Order 3
// status3.textContent = root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'; // Set the status in Order 3
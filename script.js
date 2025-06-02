const shoppingItemsList = document.getElementById("shopping-items-list")
const newShoppingItemForm = document.getElementById("new-shopping-item-form")
const inputShoppingItem = document.getElementById("shopping-item")

// GETTING THE SHOPPING LIST ITEM TEMPLATE FROM HTML
const shoppingItemTemplate = document.getElementById("shopping-item-template")

function addItem(event) {
    // stop the form submission from reloading the page and submitting the form
    // but still keep the built-in form validation functionality
    event.preventDefault()

    // creating a copy of the list item from the template
    const newShoppingItem = shoppingItemTemplate.content.cloneNode(true)

    // Insert item's name into the list item
    const itemName = newShoppingItem.querySelector("p")
    itemName.textContent = inputShoppingItem.value

    // assign the click event to the remove button
    const buttonRemove = newShoppingItem.querySelector("button")
    buttonRemove.addEventListener("click", function(event) {
        //only traversing upwards from the button finds the parent <li>
        const li2 = event.target.closest("li")
        li2.remove()
    })

    // add the item to the end of the list
    shoppingItemsList.append(newShoppingItem)

    // clear the input field and put the caret inside ready for the next record
    inputShoppingItem.value = ""
    inputShoppingItem.focus()
}
// add event handler to the form itself instead of the add button
newShoppingItemForm.addEventListener("submit", addItem)


class TabLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
    this.link = link;
    // Get the custom data attribute on the Link
    this.data = document.querySelector(
      `.tabs-link[data-tab='${this.link.dataset.tab}']`
    );

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.link.dataset.tab}']`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.data.addEventListener("click", () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(function(currentValue) {
      currentValue.classList.remove("tabs-link-selected");
      // console.dir(currentValue);
    });

    // Add a class named "tabs-link-selected" to this link
    this.data.classList.add("tabs-link-selected");
    console.log(this.data);
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    console.log(this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(currentValue) {
      currentValue.classList.remove("tabs-item-selected");
      console.log(currentValue);
    });
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable 
to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document
  .querySelectorAll(".tabs-link")
  .forEach(tablink => new TabLink(tablink));

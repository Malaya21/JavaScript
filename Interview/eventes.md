# Interview Questions on JavaScript Events

---

1. **What is an event in JavaScript?**  
    **Ans:** An event is an action that occurs as a result of the user or browser manipulation. It can be triggered by the user (clicking a button), the browser (loading a page), or an API (data loading).

2. **How do you add an event listener to an element in JavaScript?**  
    **Ans:** You can add an event listener to an element using the `addEventListener` method. For example, to add a click event listener to a button element:
    ```javascript
    element.addEventListener('click', function() {
         console.log('Button clicked');
    });
    ```

3. **What is the difference between `addEventListener` and `onclick`?**  
    **Ans:** The `addEventListener` method allows you to add multiple event listeners to an element, while the `onclick` attribute can only have one event handler. Additionally, `addEventListener` provides more control over the event handling process, such as event capturing and event delegation.  
    For example, to add a click event listener using the `onclick` property:
    ```javascript
    element.onclick = function() {
         console.log('Button clicked');
    };
    ```

4. **Can you explain event delegation and how it works?**  
    **Ans:** Event delegation is a technique where you add a single event listener to a parent element to manage events for all its descendants. When an event occurs, it bubbles up to the parent element, which can then determine the target of the event and handle it accordingly. This approach is useful for dynamically added elements or elements with similar event handlers.

5. **What is the purpose of the `event.preventDefault()` method?**  
    **Ans:** The `event.preventDefault()` method is used to prevent the default behavior of an event from occurring. For example, you can use it to prevent a form submission or a link click from navigating to a new page.  
    Example:
    ```javascript
    element.addEventListener('click', function(event) {
         event.preventDefault();
         console.log('Link clicked');
    });
    ```

6. **How can you stop the propagation of an event in JavaScript?**  
    **Ans:** You can stop the propagation of an event using the `event.stopPropagation()` method. This prevents the event from bubbling up to its parent elements.  
    Example:
    ```javascript
    element.addEventListener('click', function(event) {
         event.stopPropagation();
         console.log('Button clicked');
    });
    ```

7. **What is the difference between `event.target` and `event.currentTarget`?**  
    **Ans:** The `event.target` property refers to the element that triggered the event, while the `event.currentTarget` property refers to the element that the event listener is attached to. If the event is bubbling up the DOM tree, these two properties may be different.

8. **How do you remove an event listener in JavaScript?**  
    **Ans:** You can remove an event listener using the `removeEventListener` method. You need to provide the same event type and event handler function that was used to add the event listener.  
    Example:
    ```javascript
    element.addEventListener('click', handleClick);
    element.removeEventListener('click', handleClick);
    ```

9. **What are some common events in JavaScript?**  
    **Ans:** Some common events in JavaScript include click, mouseover, mouseout, keydown, keyup, change, submit, load, and error. These events can be triggered by user actions, browser actions, or API responses.

    **Examples:**

    1. **Click event:**
        ```javascript
        document.getElementById('myButton').addEventListener('click', function() {
             console.log('Button clicked');
        });
        ```

    2. **Mouseover event:**
        ```javascript
        document.getElementById('myElement').addEventListener('mouseover', function() {
             console.log('Mouse over element');
        });
        ```

    3. **Keydown event:**
        ```javascript
        document.addEventListener('keydown', function(event) {
             console.log('Key pressed: ' + event.key);
        });
        ```

    4. **Change event:**
        ```javascript
        document.getElementById('myInput').addEventListener('change', function() {
             console.log('Input value changed');
        });
        ```

    5. **Submit event:**
        ```javascript
        document.getElementById('myForm').addEventListener('submit', function(event) {
             event.preventDefault();
             console.log('Form submitted');
        });
        ```

    6. **Load event:**
        ```javascript
        window.addEventListener('load', function() {
             console.log('Page fully loaded');
        });
        ```

    7. **Error event:**
        ```javascript
        window.addEventListener('error', function(event) {
             console.log('Error occurred: ' + event.message);
        });
        ```

10. **Can you explain the concept of event bubbling and event capturing?**
    **Ans:** Event bubbling and event capturing are two phases of event propagation in the DOM. When an event occurs on an element, it first triggers the event handlers on the target element, then bubbles up to its parent elements. This is known as event bubbling.  
    Event capturing, on the other hand, is the opposite process where the event is captured by the parent elements first before reaching the target element.  
    You can specify the event phase (capturing, target, or bubbling) using the `addEventListener` method with the `useCapture` parameter set to `true` for capturing and `false` for bubbling. By default, the event phase is set to bubbling.

    **Example:**
    ```javascript
    element.addEventListener('click', function() {
         console.log('Button clicked');
    }, true); // Use capturing phase
    ```
11. **How can you trigger an event programmatically in JavaScript?**
    **Ans:** You can trigger an event programmatically using the `dispatchEvent` method. You need to create a new event object with the desired event type and options, then dispatch it on the target element.  
    **Example:**
    ```javascript
    var event = new Event('click', {
         bubbles: true,
         cancelable: true
    });
    element.dispatchEvent(event);
    ```

12. **What is the `once` option in `addEventListener` and how does it work?**
    **Ans:** The `once` option in the `addEventListener` method allows you to add an event listener that will be automatically removed after it is triggered once. This is useful for handling events that should only 
    execute once, such as a button click that should trigger an action only once.
    **Example:**
    ```javascript   
    element.addEventListener('click', function() {
         console.log('Button clicked');
    }, { once: true });
    ```

13. **How do you handle events for dynamically added elements?**
    **Ans:** You can handle events for dynamically added elements by using event delegation. Instead of adding event listeners directly to the dynamically added elements, you can add a single event listener to a parent element that is present in the DOM when the page loads. When the event occurs, you can check the target element of the event and handle it accordingly.
    **Example:**
    ```javascript
    document.getElementById('parentElement').addEventListener('click', function(event) {
         if (event.target.classList.contains('dynamicElement')) {
             console.log('Dynamic element clicked');
         }
    });
    ```

14. **What is the difference between `focus` and `blur` events?**
    **Ans:** The `focus` event is triggered when an element gains focus, such as when a user clicks on an input field or navigates to it using the keyboard. The `blur` event is triggered when an element loses focus, such as when a user clicks outside the input field or navigates away from it using the keyboard.

    **Example:**
    ```javascript
    document.getElementById('myInput').addEventListener('focus', function() {
         console.log('Input focused');
    });

    document.getElementById('myInput').addEventListener('blur', function() {
         console.log('Input blurred');
    });
    ```


// This will be an "I'm not a robot" check. Drag and drop can be used to ensure that it's a live user that is acting on a page rather than a robot.
// This exercise will demonstrate how to create a visual dragging effect on an active element, in which the user clicks the mouse down to create a drag action, and once the mouse button is released, the drop event occurs. The successful actions are logged to the console.

// 1. Select the draggable element as an object in your JavaScript code.
// 2. Add an event listener of dragstart, where it updates the draggable element to 0.5 opacity.
// 3. Add another event listener of dragend that removes the value for the opacity.
// 4. Using querySelectorAll(), select all the dropoff boxes.
// 5. Add event listeners to all the dropoff boxes, setting things such that the red class is added to an element whenever the user triggers the dragenter event. This will indicate to the user that the action is taking place.
// 6. Set dragover, adding a preventDefault() method to the element to disable any actions that might already exist.
// 7. On dragleave, remove the red class.
// 8. Adding the event listener of drop to the box, append the draggable element to the event target.
// 9. To work across all elements in the same way, remove the default action of the element. You can use the preventDefault() method to this event to disable any actions that might already exist.
// 10. You can add console log messages to any of these events to better track them.

let dragme = document.getElementById("dragme");

let boxes = document.querySelectorAll(".box");

dragme.addEventListener('dragstart', (e) => {
    dragme.style.opacity = .5;
    console.log(e.target, "dragstart");
});

dragme.addEventListener('dragend', (e) => {
    dragme.style.opacity = 1;
    console.log(e.target, "dragend");
});

boxes.forEach(box => {
    box.addEventListener('dragenter', (e) => {
        box.classList.add("red");
        console.log(e.target, "dragenter");
    });

    box.addEventListener('dragleave', (e) => {
        box.classList.remove("red");
        console.log(e.target, "dragleave");
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log(e.target, "dragover");
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();

        box.appendChild(dragme);
        console.log(e.target, "drop");
    });
})
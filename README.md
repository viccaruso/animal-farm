# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


# HTML Setup
1) 3 images
    Why?
    - Act as buttons to tell us when to play a sound
    How?
    - ```js
    myImage.addEventListener('click', ()=> { })
    ```
2) Some way of playing audio (<audio src='path-to-file.wav'>)
    Why?
    - To play the sound on a click event
    How?
    - We grab audio tag from DOM (just like other HTML elements) and then do:
    ```js
    dogSound.play();
    ```

## Event
On Click:
Play appropriate sound
Call .play method on appropriate DOM element
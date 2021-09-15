# Agog Slider

## Demo

[https://agogslider.netlify.app/](https://agogslider.netlify.app/)

## Options

| Option | Default Value | Description  |
|--|--|--|
| **selector** | [data-agog-slider] | main selector to run the plugin |
| **containerClass** | agogSlider-container | container element css class |
| **slideClass** | agogSlider-slide | slide element css class |
| **itemClass** | agogSlider-item | item css class |
| **itemHeight** | 600 | default slider height |
| **callbackBefore** | function() {} | function to run before plugin runs |
| **callbackAfter** | function() {} | function to run after plugin runs |

## Data Options

| Option | Description  |
|--|--|
| **data-title**  | title for current slide |
| **data-content** | content for current slide |

## Example

    <div class="custom-container">
    <div data-agog-slider>
        <img src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80" data-title="Title 1"
            data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis tortor. Proin bibendum gravida odio non tempus. Etiam fermentum mauris id nisi venenatis, eget sollicitudin lectus euismod. Mauris lorem est, semper eu egestas sit amet, eleifend ac metus. Vivamus non vulputate dui. Maecenas efficitur massa et erat consequat, vitae cursus libero sollicitudin. Fusce porttitor, metus id iaculis volutpat, magna nibh suscipit risus, nec convallis turpis dolor nec lectus. Suspendisse dapibus ullamcorper cursus. Suspendisse consequat ultrices ultricies. Phasellus blandit imperdiet nulla nec pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel blandit elit."
            alt="" />
        <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" data-title="Title 2"
            data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis tortor. Proin bibendum gravida odio non tempus. Etiam fermentum mauris id nisi venenatis, eget sollicitudin lectus euismod. Mauris lorem est, semper eu egestas sit amet, eleifend ac metus. Vivamus non vulputate dui. Maecenas efficitur massa et erat consequat, vitae cursus libero sollicitudin. Fusce porttitor, metus id iaculis volutpat, magna nibh suscipit risus, nec convallis turpis dolor nec lectus. Suspendisse dapibus ullamcorper cursus. Suspendisse consequat ultrices ultricies. Phasellus blandit imperdiet nulla nec pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel blandit elit."
            alt="" />
        <img src="https://images.unsplash.com/photo-1490323948794-cc6dde6e8f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1517241080758-95a42c519c1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" data-title="Title 3"
            data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis tortor. Proin bibendum gravida odio non tempus. Etiam fermentum mauris id nisi venenatis, eget sollicitudin lectus euismod. Mauris lorem est, semper eu egestas sit amet, eleifend ac metus. Vivamus non vulputate dui. Maecenas efficitur massa et erat consequat, vitae cursus libero sollicitudin. Fusce porttitor, metus id iaculis volutpat, magna nibh suscipit risus, nec convallis turpis dolor nec lectus. Suspendisse dapibus ullamcorper cursus. Suspendisse consequat ultrices ultricies. Phasellus blandit imperdiet nulla nec pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel blandit elit."
            alt="" />
        <img src="https://images.unsplash.com/photo-1571149828506-c48f1610314b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" data-title="Title 4"
            data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet mattis tortor. Proin bibendum gravida odio non tempus. Etiam fermentum mauris id nisi venenatis, eget sollicitudin lectus euismod. Mauris lorem est, semper eu egestas sit amet, eleifend ac metus. Vivamus non vulputate dui. Maecenas efficitur massa et erat consequat, vitae cursus libero sollicitudin. Fusce porttitor, metus id iaculis volutpat, magna nibh suscipit risus, nec convallis turpis dolor nec lectus. Suspendisse dapibus ullamcorper cursus. Suspendisse consequat ultrices ultricies. Phasellus blandit imperdiet nulla nec pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel blandit elit."
            alt="" />
    </div>
    </div>
    <script>
        agogSlider.init();
    </script>


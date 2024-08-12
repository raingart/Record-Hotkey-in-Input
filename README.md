# Hotkey Input Capture

This JavaScript code provides a lightweight solution for capturing hotkey combinations as user input within text fields. Users can press modifier keys (Ctrl, Shift, Alt, Meta) and regular keys to define their desired hotkey shortcuts. The captured hotkey is then displayed in the text field.

## Advantages
- Quick and easy to use
- No need to install any additional software
- Works on all web pages in your browser
- Can be customized for individual websites or specific tasks
  
## Features:
1. **Capture Key Combinations**: Detects and handles key combinations including Ctrl, Shift, Alt, and Meta.
2. **Clear Input on Specific Keys**: Clears the input field when the Delete or Backspace key is pressed.
3. **Prevent Default Actions**: Prevents default actions for certain keys to avoid conflicts with browser shortcuts.
4. **Easy Integration**: Simply include the script in your HTML file and call `handleHotkeyInput()` after including it.

### Usage:
1. Copy the JavaScript file [HotkeyInputCapture.js](HotkeyInputCapture.js).
2. Include this script in your HTML file within a `<script>` tag or link to an external JS file where you have included this code.
3. Include `<input type="text">` elements in your HTML where you want users to define their hotkeys.
4. Call the function `handleHotkeyInput()` on the window's load event, ensuring it runs after the DOM is fully loaded and captures all necessary elements.

```
<!DOCTYPE html>
<html>
<head>
  <title>Hotkey Input Capture Example</title>
  <script src="HotkeyInputCapture.js"></script>
</head>
<body>
  <label for="hotkey">Define your hotkey:</label>
  <input type="text" id="hotkey" placeholder="Press your hotkey combination">
</body>
</html>
```

## Contributing
Feel free to create issues or discussions on the GitHub repository for any questions or suggestions.

### License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

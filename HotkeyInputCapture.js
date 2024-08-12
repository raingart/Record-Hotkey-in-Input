function handleHotkeyInput() {
   const inputs = document.body.querySelectorAll('input[type="text"]');

   const handleKeyEvent = (evt) => {
      const input = evt.target;
      const keysMap = [];

      if (evt.key === 'Delete' || evt.key === 'Backspace') {
         input.value = '';
         return;
      }

      if (evt.ctrlKey) keysMap.push('Ctrl');
      if (evt.shiftKey) keysMap.push('Shift');
      if (evt.altKey) keysMap.push('Alt');
      if (evt.metaKey) keysMap.push('Meta');

      if (!['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(evt.code)) {
         keysMap.push(evt.code.replace(/^(Key|Digit)/, ''));
      }

      const pressedShortcut = keysMap.join('+');

      if (pressedShortcut) {
         input.value = pressedShortcut;
         evt.preventDefault();
      }
   };

   const handleKeyup = (evt) => {
      const input = evt.target;
      if (['Control', 'Shift', 'Alt', 'Meta'].includes(input.value.trim())) {
         input.value = '';
      }
   };

   inputs.forEach(input => {
      input.addEventListener('keydown', handleKeyEvent);
      input.addEventListener('keyup', handleKeyup);
   });
}

window.addEventListener('load', handleHotkeyInput, { capture: true, once: true });

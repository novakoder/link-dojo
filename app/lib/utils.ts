const mouseClickEvents = ["mousedown", "click", "mouseup"];

export function simulateMouseClick(element: any) {
	mouseClickEvents.forEach((mouseEventType) =>
		element.dispatchEvent(
			new MouseEvent(mouseEventType, {
				view: window,
				bubbles: true,
				cancelable: true,
				buttons: 1,
			})
		)
	);
}

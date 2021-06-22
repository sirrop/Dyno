class DynoProblem extends HTMLElement {
				constructor() {
								super();
								const shadow = this.attachShadow({mode: "open"});
								const span = document.createElement("span");
								span.innerHTML = this.innerHTML;
								span.shown = true;
								this.show = function() {
												span.style.backgroundColor = "white";
												span.style.color = "red";
												span.shown = true;
								};
								this.hide = function() {
												span.style.backgroundColor = "lightgray";
												span.style.color = "lightgray";
												span.shown = false;
								};
								const parent = this;
								span.applyStyle = function() {
												if (!this.shown) {
																parent.show();
												} else {
																parent.hide();
												}
								};
								this.addEventListener("click", function(e) {
												span.applyStyle();
								});
								span.applyStyle();
								shadow.appendChild(span);
				}
}
customElements.define("dyno-problem", DynoProblem);

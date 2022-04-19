const txtQuote = document.querySelector(".advice-quote");
const txtQuoteId = document.querySelector(".advice-number");
const btnGetQuote = document.querySelector(".btn-get-quote");

class App {
	constructor() {
		this.#displayQuote();
		btnGetQuote.addEventListener("click", this.#displayQuote.bind(this));
	}

	#displayQuote() {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => {
				if (!response.ok)
					throw new Error(
						"An unexpected error occurred when getting a new quote."
					);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				const { id, advice } = data["slip"];

				txtQuote.innerHTML = advice;
				txtQuoteId.innerHTML = id;
			})
			.catch((err) => console.log(err));
	}
}
const app = new App();

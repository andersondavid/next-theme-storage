import { themeChange } from "../hooks/useThemeSwitch"

export default function Home() {

	return (
		<>
			<button onClick={() => themeChange("dark")}>dark</button>
			<button onClick={() => themeChange("light")}>light</button>
			<section>
				<article>
					<h1>Example of useThemeSwitch</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						id tempus elit. Praesent a odio justo. Nunc placerat rhoncus risus,
						et tincidunt mi aliquam sed. Nam libero metus, rhoncus congue
						lobortis et, pretium sed ligula. Etiam accumsan purus diam, in
						lacinia nulla mollis nec. Proin commodo ac purus tempus vulputate.
						Sed egestas nulla volutpat dictum placerat. Praesent egestas elit
						turpis.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						id tempus elit. Praesent a odio justo. Nunc placerat rhoncus risus,
						et tincidunt mi aliquam sed. Nam libero metus, rhoncus congue
						lobortis et, pretium sed ligula. Etiam accumsan purus diam, in
						lacinia nulla mollis nec. Proin commodo ac purus tempus vulputate.
						Sed egestas nulla volutpat dictum placerat. Praesent egestas elit
						turpis.
					</p>
				</article>
				<article>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
					</ul>
				</article>
				<article>
					<h2>Example of useThemeSwitch</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						id tempus elit. Praesent a odio justo. Nunc placerat rhoncus risus,
						et tincidunt mi aliquam sed. Nam libero metus, rhoncus congue
						lobortis et, pretium sed ligula. Etiam accumsan purus diam, in
						lacinia nulla mollis nec. Proin commodo ac purus tempus vulputate.
						Sed egestas nulla volutpat dictum placerat. Praesent egestas elit
						turpis.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						id tempus elit. Praesent a odio justo. Nunc placerat rhoncus risus,
						et tincidunt mi aliquam sed. Nam libero metus, rhoncus congue
						lobortis et, pretium sed ligula. Etiam accumsan purus diam, in
						lacinia nulla mollis nec. Proin commodo ac purus tempus vulputate.
						Sed egestas nulla volutpat dictum placerat. Praesent egestas elit
						turpis.
					</p>
				</article>
			</section>
		</>
	)
}

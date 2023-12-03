import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Postos Frotas" },
		{ name: "description", content: "Postos Frotas" },
	];
};

export default function Index() {
	return (
		<div
			className="bg-cover bg-center w-screen h-screen bg-black relative overflow-hidden"
			style={{ backgroundImage: "url(bg.jpg)" }}
		>
			<div className="absolute inset-0 bg-brand/50 backdrop-blur-lg"></div>
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-xl p-4">
				<img src="/logo.png" alt="Postos Frotas" />
				<div className="text-center">
					<div className="inline-block text-white text-2xl bg-accent px-8 py-2 rounded-full mt-8 font-medium tracking-tight">
						Sobral, estamos chegando!
					</div>
					<div className="leading-tight text-white mt-4 font-light">
						Rua Manoel Messias Domingos, 1805. <br /> Renato
						Parente, Sobral.
					</div>
				</div>
			</div>
		</div>
	);
}

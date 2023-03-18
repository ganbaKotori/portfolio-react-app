import me from '../../assets/img/me.jpeg';
export function AboutMe() {
	return (
		<div class="container mx-auto px-8">
			<div class="flex">
				<div class="flex-1 w-64">
					<div className="card">
						<h2 class="text-4xl text-center font-bold mb-3">Alexander Ramirez</h2>
						<h2 class="text-1xl mb-3 text-center font-bold">
							software developer with a passion for web developement
						</h2>
						<p>
							For me, web development is not just a career; it's a passion that allows me to combine my
							technical skills with my creative vision to create meaningful and impactful digital
							experiences. I'm always excited to work on new projects and learn new technologies. Building
							dynamic and engaging web applications drives me, and I take pride in delivering high-quality
							solutions that exceed expectations.{' '}
						</p>
					</div>
				</div>
				<div class="flex-1 w-32 ">
					<img src={me} className="float-right" alt="me" />
				</div>
			</div>
		</div>
	);
}

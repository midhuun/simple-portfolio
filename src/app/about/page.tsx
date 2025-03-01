const About = () =>{
    return (
        <div className="mt-12 w-full flex justify-center md:mt-28" > 
        <div className="max-w-[650px] flex  flex-col">
            <h1 className="md:text-5xl p-3 text-2xl font-bold text-start">About Midhun </h1>
            <p className="p-3 tracking-wider leading-8 text-[var(--secondary)] text-md md:text-lg">
            I'm a self-taught Full Stack Developer with a passion for building scalable,
             high-performance web applications. I’ve developed 5+ websites as a freelancer and specialize in React, 
             Next.js, and the MERN Stack. I previously worked at Deloitte and led projects that streamlined workflows. Outside of work,
             I enjoy optimizing web performance and exploring new technologies
            </p>
            <div className="h-[1px] mt-4 md:mt-8 w-full bg-[#1e1e1e]"></div>
            <h2 className="md:mt-8 mt-3 text-xl md:text-2xl p-3">How a Random Phone Call Made Me a Coder</h2>
            <p className="mt-3 md:text-lg tracking-wide leading-7 text-[var(--secondary)]">I was born in Karur, Tamil Nadu, in a small village where most people couldn't even afford to study. But me? I had big dreams of becoming a businessman—just like my parents. There was just one small problem… I had zero business ideas.
College was a wild ride. While I was supposed to be studying, I was usually bunking classes to play volleyball. But of course, I had to come up with a smart excuse—so I told my professor I was developing a website… except I had absolutely no clue how websites worked.
Then one day, out of nowhere, I got a call from a guy saying my professor had referred me to build a website. Wait… what? That’s when panic mode activated, and I had no choice but to actually learn web development for real.
Fast forward a few months—I started loving coding. Now, I’m on a journey to master Full-Stack Development, where I truly believe my future lies (hopefully, with fewer volleyball distractions). 😆🔥</p>
        </div>
        </div>
    )
}
export default About;
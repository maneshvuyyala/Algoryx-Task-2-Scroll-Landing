import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight, CheckCircle2, Menu, Moon, Sun, Sparkles, X} from "lucide-react";
import "./App.css";

const services=[
 ["01","Web Development","Responsive, scalable interfaces built with modern frontend practices."],
 ["02","Cloud & DevOps","Deployment-ready workflows with reliable CI/CD and cloud thinking."],
 ["03","Data & Automation","Useful dashboards and automation that turn data into action."],
 ["04","UI Engineering","Clean visual systems with accessible interactions and reusable components."]
];
const process=[
 ["Discover","Understand the problem, users and measurable goals."],
 ["Design","Turn requirements into a focused responsive experience."],
 ["Build","Develop reusable components with performance in mind."],
 ["Launch","Deploy, test and improve from real user feedback."]
];
const testimonials=[
 ["Aarav","Product Lead","The experience feels polished, fast and easy to understand."],
 ["Maya","Startup Founder","The animations add personality without getting in the way."],
 ["Rohan","Engineering Manager","Clean structure, responsive UI and a very clear user journey."]
];

function App(){
 const [dark,setDark]=useState(false),[menu,setMenu]=useState(false),[progress,setProgress]=useState(0);
 useEffect(()=>{
   const reveal=()=>{const max=document.documentElement.scrollHeight-innerHeight;
     setProgress(max>0?(scrollY/max)*100:0);
     document.querySelectorAll(".reveal").forEach(e=>{
       if(e.getBoundingClientRect().top<innerHeight*.88)e.classList.add("show");
     });
   };
   reveal(); addEventListener("scroll",reveal); return()=>removeEventListener("scroll",reveal);
 },[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 return <div className={dark?"app dark":"app"}>
  <div className="progress" style={{width:`${progress}%`}}/>
  <header className="nav">
   <button className="brand" onClick={()=>go("home")}><span className="logo"><Sparkles size={16}/></span>NOVA<span>.</span></button>
   <button className="mobile-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
   <nav className={menu?"links open":"links"}>
    {["home","services","process","testimonials","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}
    <button className="theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
   </nav>
  </header>

  <main>
   <section id="home" className="hero">
    <div className="hero-copy reveal">
     <p className="eyebrow"><Sparkles size={15}/> SCROLL-BASED DIGITAL EXPERIENCE</p>
     <h1>Build digital experiences people <em>remember.</em></h1>
     <p className="hero-text">A responsive landing page focused on clean interfaces, smooth motion and practical digital products.</p>
     <div className="actions"><button className="primary" onClick={()=>go("services")}>Explore services <ArrowRight size={18}/></button><button className="secondary" onClick={()=>go("process")}>See our process</button></div>
     <div className="hero-checks"><span><CheckCircle2/> Smooth scroll</span><span><CheckCircle2/> Responsive UI</span><span><CheckCircle2/> Interactive sections</span></div>
    </div>
    <div className="hero-art reveal"><div className="orb"/><div className="orbit orbit1"/><div className="orbit orbit2"/>
      <div className="floating-card card-a"><b>01</b><span>Strategy</span></div>
      <div className="floating-card card-b"><b>98%</b><span>Quality score</span></div>
    </div>
   </section>

   <section className="stats reveal">
    {[["92%","Faster workflows"],["48+","Projects delivered"],["24/7","Platform availability"],["4.9/5","Client experience"]].map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
   </section>

   <section id="services" className="section">
    <div className="section-head reveal"><p className="eyebrow">WHAT WE DO</p><h2>Focused services. <span>Clear outcomes.</span></h2></div>
    <div className="service-grid">{services.map(([n,t,d])=><article className="service reveal" key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p><ArrowRight className="arrow"/></article>)}</div>
   </section>

   <section id="process" className="section process">
    <div className="section-head reveal"><p className="eyebrow">HOW WE WORK</p><h2>From idea to <span>launch.</span></h2></div>
    <div className="timeline">{process.map(([t,d],i)=><div className="step reveal" key={t}><div className="step-num">0{i+1}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
   </section>

   <section className="parallax-band reveal"><div><p className="eyebrow">DESIGNED TO MOVE</p><h2>Motion with a purpose.</h2><p>Scroll-triggered reveals, floating elements and subtle transitions keep the experience engaging.</p></div></section>

   <section id="testimonials" className="section">
    <div className="section-head reveal"><p className="eyebrow">TESTIMONIALS</p><h2>People notice the <span>details.</span></h2></div>
    <div className="testimonial-grid">{testimonials.map(([n,r,q])=><article className="testimonial reveal" key={n}><div className="avatar">{n[0]}</div><p>“{q}”</p><b>{n}</b><small>{r}</small></article>)}</div>
   </section>

   <section id="contact" className="contact section reveal">
    <div><p className="eyebrow">LET'S BUILD</p><h2>Have an idea worth shipping?</h2><p>Tell us what you want to create and start a conversation.</p></div>
    <form onSubmit={e=>{e.preventDefault();alert("Thanks! Your message has been received.")}}>
      <input required placeholder="Your name"/><input required type="email" placeholder="Email address"/>
      <textarea required rows="5" placeholder="Tell us about your project"/>
      <button className="primary">Send message <ArrowRight size={18}/></button>
    </form>
   </section>
  </main>
  <footer>© 2026 NOVA · Algoryx Internship — Task 2</footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);

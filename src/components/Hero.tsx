import { useEffect, useState } from 'react';

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 64,
      background: 'linear-gradient(135deg,#ffffff 0%,#e8f7f6 40%,#d0f0ec 70%,#b8e8e3 100%)',
    }}>
      {/* BG decor */}
      <div style={{ position:'absolute', top:80, right:40, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,#2a9d8f,transparent)', opacity:0.15, filter:'blur(60px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:20, left:0, width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,#3bbdad,transparent)', opacity:0.12, filter:'blur(60px)', pointerEvents:'none' }}/>
      {/* Grid */}
      <div style={{ position:'absolute', inset:0, opacity:0.04, pointerEvents:'none', backgroundImage:'linear-gradient(#2a9d8f 1px,transparent 1px),linear-gradient(90deg,#2a9d8f 1px,transparent 1px)', backgroundSize:'60px 60px' }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'40px 24px', width:'100%', position:'relative', zIndex:1 }}>
        <div className="hero-grid">
          {/* Text */}
          <div style={{ opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(30px)', transition:'all 0.8s cubic-bezier(0.16,1,0.3,1)', display:'flex', flexDirection:'column', gap:24, paddingBottom: 40 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, width:'fit-content', padding:'6px 16px', borderRadius:999, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(42,157,143,0.08)', border:'1px solid rgba(42,157,143,0.25)', color:'#2a9d8f' }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#2a9d8f', animation:'pulse 2s infinite' }}/>
              Distribuidor Oficial Uruguay
            </div>

            <h1 style={{ fontSize:'clamp(2.8rem,7vw,5rem)', fontWeight:900, lineHeight:0.95, letterSpacing:'-0.02em', color:'#1a2332' }}>
              El mejor<br/>
              <span style={{ background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>iPhone</span><br/>
              al mejor precio
            </h1>

            <p style={{ fontSize:17, color:'#6b7280', maxWidth:420, lineHeight:1.7 }}>
              Venta minorista y mayorista de iPhones originales. Reparaciones en el día. Garantía real.
            </p>

            {/* Stats */}
            <div style={{ display:'flex', gap:32, padding:'8px 0' }}>
              {[['500+','Equipos vendidos'],['24h','Reparación express'],['100%','Originales']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontSize:22, fontWeight:900, color:'#2a9d8f' }}>{v}</div>
                  <div style={{ fontSize:11, color:'#9ca3af', marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
              <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior:'smooth' })}
                style={{ padding:'14px 28px', borderRadius:16, fontSize:14, fontWeight:700, color:'#fff', background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', border:'none', cursor:'pointer', boxShadow:'0 8px 24px rgba(42,157,143,0.35)', transition:'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow='0 12px 32px rgba(42,157,143,0.45)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform='translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow='0 8px 24px rgba(42,157,143,0.35)'; }}>
                Ver catálogo
              </button>
              <a href="https://wa.me/59892514774?text=Hola!%20Quiero%20consultar%20sobre%20iPhones" target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:16, fontSize:14, fontWeight:700, color:'#2a9d8f', border:'2px solid #2a9d8f', textDecoration:'none', transition:'all 0.2s', background:'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background='#e8f7f6'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)'; }}>
                Consultar ahora
              </a>
            </div>
          </div>

          {/* Image */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(20px)', transition:'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s', position:'relative' }}>
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse,#2a9d8f,transparent 70%)', opacity:0.3, filter:'blur(40px)', transform:'scale(1.1)' }}/>
            <img src="/hero-iphone.png" alt="iPhone 16 Pro Max" className="animate-float"
              style={{ position:'relative', zIndex:1, maxHeight:'70vh', width:'auto', filter:'drop-shadow(0 40px 80px rgba(42,157,143,0.3))' }}/>
            {/* Float cards */}
            <div className="animate-float-card1" style={{ position:'absolute', top:40, left:-20, background:'#fff', borderRadius:18, boxShadow:'0 8px 30px rgba(0,0,0,0.12)', padding:'12px 16px', display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>📦</div>
              <div><div style={{ fontSize:12, fontWeight:700, color:'#1a2332' }}>Envío gratis</div><div style={{ fontSize:11, color:'#9ca3af' }}>En Montevideo</div></div>
            </div>
            <div className="animate-float-card2" style={{ position:'absolute', bottom:80, right:-20, background:'#fff', borderRadius:18, boxShadow:'0 8px 30px rgba(0,0,0,0.12)', padding:'12px 16px', display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>🛡️</div>
              <div><div style={{ fontSize:12, fontWeight:700, color:'#1a2332' }}>Garantía</div><div style={{ fontSize:11, color:'#9ca3af' }}>12 meses</div></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; min-height:calc(100vh - 64px); }
        @media(max-width:900px){ .hero-grid{ grid-template-columns:1fr; } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}

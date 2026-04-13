const BENEFITS = [
  { icon:'📦', title:'Stock permanente', desc:'Todos los modelos disponibles. Reposición rápida.' },
  { icon:'💰', title:'Precios mayoristas', desc:'Precios especiales por volumen. Lista actualizada.' },
  { icon:'🤝', title:'Atención dedicada', desc:'Un ejecutivo asignado a tu cuenta para tus consultas.' },
  { icon:'🚚', title:'Entrega en todo Uruguay', desc:'Enviamos a todo el país con seguimiento.' },
];

const PRICE_LIST = [
  { name:'iPhone 11',         from:'USD 330' },
  { name:'iPhone 12',         from:'USD 460' },
  { name:'iPhone 13',         from:'USD 610' },
  { name:'iPhone 14',         from:'USD 740' },
  { name:'iPhone 15',         from:'USD 890' },
  { name:'iPhone 15 Pro',     from:'USD 1.050' },
  { name:'iPhone 16',         from:'USD 1.100' },
  { name:'iPhone 16 Pro Max', from:'USD 1.550' },
];

export default function Wholesale() {
  return (
    <section id="mayorista" style={{ padding:'80px 0', background:'linear-gradient(135deg,#1a2332 0%,#243447 100%)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <div style={{ display:'inline-flex', padding:'6px 16px', borderRadius:999, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(42,157,143,0.15)', border:'1px solid rgba(42,157,143,0.25)', color:'#3bbdad', marginBottom:16 }}>
            Canal mayorista
          </div>
          <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#fff', marginBottom:12 }}>
            Vendés iPhones?<br/><span style={{ color:'#3bbdad' }}>Somos tu proveedor</span>
          </h2>
          <p style={{ color:'#9ca3af', fontSize:16, maxWidth:480, margin:'0 auto' }}>
            Trabajamos con revendedores, tiendas y emprendedores de todo Uruguay.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }} className="wholesale-grid">
          {/* Benefits */}
          <div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:32 }}>
              {BENEFITS.map(b => (
                <div key={b.title} style={{ borderRadius:20, padding:20, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', transition:'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform='translateY(0)'}>
                  <div style={{ fontSize:22, marginBottom:10 }}>{b.icon}</div>
                  <div style={{ fontWeight:700, color:'#fff', fontSize:13, marginBottom:4 }}>{b.title}</div>
                  <div style={{ fontSize:12, color:'#9ca3af', lineHeight:1.5 }}>{b.desc}</div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/59892514774?text=Hola!%20Me%20interesa%20conocer%20sus%20precios%20mayoristas" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'16px 32px', borderRadius:18, fontSize:15, fontWeight:700, color:'#fff', background:'linear-gradient(135deg,#2a9d8f,#3bbdad)', textDecoration:'none', boxShadow:'0 8px 32px rgba(42,157,143,0.4)', transition:'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 12px 40px rgba(42,157,143,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 32px rgba(42,157,143,0.4)'; }}>
              Consultar precios mayoristas
            </a>
          </div>

          {/* Price list */}
          <div style={{ borderRadius:24, overflow:'hidden', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ padding:'20px 24px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight:700, color:'#fff', fontSize:15 }}>Lista de precios mayoristas</div>
              <div style={{ fontSize:12, color:'#6b7280', marginTop:2 }}>Precios desde · Actualizado 2025</div>
            </div>
            {PRICE_LIST.map((item, i) => (
              <div key={item.name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 24px', borderBottom: i < PRICE_LIST.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none', transition:'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,0.04)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background='transparent'}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:'#2a9d8f' }}/>
                  <span style={{ fontSize:14, color:'#e5e7eb', fontWeight:500 }}>{item.name}</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontSize:13, fontWeight:700, color:'#3bbdad' }}>desde {item.from}</span>
                  <a href={`https://wa.me/59892514774?text=${encodeURIComponent(`Hola! Quiero precio mayorista de ${item.name}`)}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize:11, fontWeight:600, padding:'4px 10px', borderRadius:8, background:'rgba(42,157,143,0.15)', color:'#3bbdad', textDecoration:'none' }}>
                    Consultar
                  </a>
                </div>
              </div>
            ))}
            <div style={{ padding:16, textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize:11, color:'#4b5563' }}>Precios por mayor. Sujetos a disponibilidad.</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.wholesale-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

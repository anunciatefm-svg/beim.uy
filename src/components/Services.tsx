const WaIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.83L.057 23.945l6.257-1.443A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.017-1.382l-.36-.214-3.71.856.878-3.593-.234-.37A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const SERVICES = [
  { icon:'🔧', title:'Reparación de pantallas', desc:'Reparamos la pantalla de tu iPhone en el día con repuestos originales.', features:['Entrega en 24hs','Repuestos originales','Garantía del servicio'], cta:'Consultar reparación' },
  { icon:'🔋', title:'Cambio de batería', desc:'Restauramos la autonomía de tu iPhone con baterías de calidad premium.', features:['Batería de alta calidad','Servicio rápido','Sin pérdida de datos'], cta:'Consultar cambio' },
  { icon:'🔄', title:'Plan recambio', desc:'Entregá tu iPhone como parte de pago y accedé al modelo que querés.', features:['Valuación justa','Todos los modelos','Sin trámites complicados'], cta:'Quiero hacer recambio' },
  { icon:'🛡️', title:'Diagnóstico gratuito', desc:'Traé tu iPhone y lo diagnosticamos sin cargo antes de cualquier reparación.', features:['100% sin cargo','Diagnóstico completo','Presupuesto sin compromiso'], cta:'Pedir diagnóstico' },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding:'80px 0', background:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'flex-end', marginBottom:48 }} className="services-header">
          <div>
            <div style={{ display:'inline-flex', padding:'6px 16px', borderRadius:999, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(42,157,143,0.08)', border:'1px solid rgba(42,157,143,0.2)', color:'#2a9d8f', marginBottom:16 }}>
              Servicios
            </div>
            <h2 style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:900, color:'#1a2332', lineHeight:1.1 }}>
              Reparamos tu iPhone<br/><span style={{ color:'#2a9d8f' }}>el mismo día</span>
            </h2>
          </div>
          <p style={{ fontSize:17, color:'#6b7280', lineHeight:1.7 }}>
            Somos especialistas en iPhone. Desde cambio de pantalla hasta plan recambio, todo con garantía real.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:24, marginBottom:48 }}>
          {SERVICES.map(s => (
            <div key={s.title}
              style={{ borderRadius:24, padding:24, background:'linear-gradient(135deg,#f8fffe,#e8f7f6)', border:'1px solid rgba(42,157,143,0.1)', transition:'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform='translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 20px 60px rgba(42,157,143,0.18)'; (e.currentTarget as HTMLDivElement).style.borderColor='rgba(42,157,143,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform='translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow='none'; (e.currentTarget as HTMLDivElement).style.borderColor='rgba(42,157,143,0.1)'; }}>
              <div style={{ width:52, height:52, borderRadius:16, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, boxShadow:'0 4px 12px rgba(42,157,143,0.15)', marginBottom:20 }}>{s.icon}</div>
              <h3 style={{ fontWeight:700, color:'#1a2332', marginBottom:8, fontSize:15 }}>{s.title}</h3>
              <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.6, marginBottom:16 }}>{s.desc}</p>
              <ul style={{ listStyle:'none', marginBottom:20 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#6b7280', marginBottom:6 }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2a9d8f" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/59892514774?text=${encodeURIComponent(`Hola! Quiero consultar: ${s.title}`)}`} target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:12, fontWeight:700, color:'#2a9d8f', textDecoration:'none' }}>
                {s.cta}
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div style={{ borderRadius:24, overflow:'hidden', height:280, position:'relative' }}>
          <img src="/service-repair.png" alt="Reparación" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,rgba(42,157,143,0.88) 0%,rgba(26,35,50,0.4) 60%,transparent 100%)', display:'flex', alignItems:'center', padding:'0 48px' }}>
            <div style={{ color:'#fff', maxWidth:360 }}>
              <h3 style={{ fontSize:22, fontWeight:900, marginBottom:8 }}>¿Tu iPhone tiene algún problema?</h3>
              <p style={{ fontSize:14, opacity:0.9, marginBottom:20 }}>Lo solucionamos hoy. Traelo o escribinos.</p>
              <a href="https://wa.me/59892514774?text=Hola!%20Necesito%20reparar%20mi%20iPhone" target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#2a9d8f', padding:'10px 20px', borderRadius:16, fontSize:13, fontWeight:700, textDecoration:'none' }}>
                <WaIcon/> Escribinos ahora
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.services-header{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

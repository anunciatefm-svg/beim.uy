export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contacto" style={{ background:'#111827', color:'#6b7280', padding:'64px 0 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:40, marginBottom:48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Beim" style={{ height:36, marginBottom:20, filter:'brightness(10)' }}/>
            <p style={{ fontSize:13, lineHeight:1.7, maxWidth:280, marginBottom:24 }}>
              Venta minorista y mayorista de iPhones originales en Uruguay. Reparaciones en el día.
            </p>
            <div style={{ display:'flex', gap:10 }}>
              <a href="https://www.instagram.com/beim.uy/" target="_blank" rel="noopener noreferrer"
                style={{ width:40, height:40, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', transition:'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)'}>
                <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://wa.me/59892514774" target="_blank" rel="noopener noreferrer"
                style={{ width:40, height:40, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', background:'#25D366', transition:'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)'}>
                <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.83L.057 23.945l6.257-1.443A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.017-1.382l-.36-.214-3.71.856.878-3.593-.234-.37A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:16 }}>Tienda</h4>
            {['Catálogo iPhones','iPhone 16 Pro Max','iPhone 15','Ofertas'].map(l => (
              <button key={l} onClick={() => go('catalogo')} style={{ display:'block', background:'none', border:'none', cursor:'pointer', fontSize:13, color:'#6b7280', marginBottom:10, padding:0, transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color='#3bbdad'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color='#6b7280'}>
                {l}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:16 }}>Contacto</h4>
            {[
              { href:'https://wa.me/59892514774', label:'+598 92 514 774' },
              { href:'https://www.instagram.com/beim.uy/', label:'@beim.uy' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display:'block', fontSize:13, color:'#6b7280', marginBottom:10, textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color='#3bbdad'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color='#6b7280'}>
                {c.label}
              </a>
            ))}
            <span style={{ display:'block', fontSize:13, color:'#6b7280' }}>Montevideo, Uruguay</span>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:24, display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12 }}>
          <span style={{ fontSize:12, color:'#374151' }}>© {year} Beim.uy — Todos los derechos reservados</span>
          <span style={{ fontSize:12, color:'#374151' }}>iPhone es marca registrada de Apple Inc.</span>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}

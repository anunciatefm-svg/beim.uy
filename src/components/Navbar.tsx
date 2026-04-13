import { useState, useEffect } from 'react';

interface Props { onSearch: () => void; }

export default function Navbar({ onSearch }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(20px)',
      boxShadow: scrolled ? '0 2px 20px rgba(42,157,143,0.12)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(42,157,143,0.1)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <img src="/logo.png" alt="Beim" style={{ height: 36, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {[['Catálogo','catalogo'],['Servicios','servicios'],['Mayorista','mayorista'],['Contacto','contacto']].map(([l,id]) => (
            <button key={id} onClick={() => go(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500, color: '#555', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2a9d8f')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
              {l}
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={onSearch} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 10, color: '#555', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e8f7f6'; (e.currentTarget as HTMLButtonElement).style.color = '#2a9d8f'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; (e.currentTarget as HTMLButtonElement).style.color = '#555'; }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
          </button>
          <a href="https://wa.me/59892514774" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 12, fontSize: 13, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#2a9d8f,#3bbdad)', textDecoration: 'none', transition: 'all 0.2s' }}
            className="hidden-mobile"
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.83L.057 23.945l6.257-1.443A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.017-1.382l-.36-.214-3.71.856.878-3.593-.234-.37A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            Consultar
          </a>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="show-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#555' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #e8f7f6', padding: '12px 24px 16px' }}>
          {[['Catálogo','catalogo'],['Servicios','servicios'],['Mayorista','mayorista'],['Contacto','contacto']].map(([l,id]) => (
            <button key={id} onClick={() => go(id)} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 12px', borderRadius: 10, fontSize: 14, fontWeight: 500, color: '#555' }}>
              {l}
            </button>
          ))}
          <a href="https://wa.me/59892514774" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '8px 12px 0', padding: '10px 0', borderRadius: 12, fontSize: 13, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#2a9d8f,#3bbdad)', textDecoration: 'none' }}>
            WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .hidden-mobile{display:none!important} }
        @media(min-width:769px){ .show-mobile{display:none!important} }
      `}</style>
    </nav>
  );
}

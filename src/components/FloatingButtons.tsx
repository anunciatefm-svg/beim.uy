import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 1500); return () => clearTimeout(t); }, []);

  return (
    <div style={{ position:'fixed', bottom:24, right:24, zIndex:200, display:'flex', flexDirection:'column', gap:12, alignItems:'flex-end',
      opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(20px)', transition:'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
      {/* Instagram */}
      <a href="https://www.instagram.com/beim.uy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
        style={{ width:52, height:52, borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', boxShadow:'0 4px 16px rgba(131,58,180,0.4)', transition:'all 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform='scale(1.12)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 24px rgba(131,58,180,0.5)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform='scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 4px 16px rgba(131,58,180,0.4)'; }}>
        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      {/* WhatsApp */}
      <a href="https://wa.me/59892514774?text=Hola!%20Quiero%20consultar%20sobre%20iPhones" target="_blank" rel="noopener noreferrer"
        style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 20px', borderRadius:18, background:'#25D366', boxShadow:'0 8px 24px rgba(37,211,102,0.45)', transition:'all 0.2s', textDecoration:'none' }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform='scale(1.05)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 12px 32px rgba(37,211,102,0.55)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform='scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 24px rgba(37,211,102,0.45)'; }}>
        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.83L.057 23.945l6.257-1.443A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.017-1.382l-.36-.214-3.71.856.878-3.593-.234-.37A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
        <span style={{ fontSize:14, fontWeight:700, color:'#fff' }}>WhatsApp</span>
      </a>
    </div>
  );
}

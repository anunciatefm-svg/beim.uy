import { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';

interface Props { isOpen: boolean; onClose: () => void; }

export default function SearchModal({ isOpen, onClose }: Props) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) { setTimeout(() => ref.current?.focus(), 80); document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; setQ(''); }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  const results = q.trim() ? products.filter(p => {
    const s = q.toLowerCase();
    return p.name.toLowerCase().includes(s) || p.color.toLowerCase().includes(s) || p.storage.toLowerCase().includes(s) || p.tags.some(t => t.includes(s));
  }) : [];

  if (!isOpen) return null;

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position:'fixed', inset:0, zIndex:300, display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:96, paddingLeft:16, paddingRight:16, background:'rgba(26,35,50,0.6)', backdropFilter:'blur(8px)' }}>
      <div className="animate-modal-in" style={{ width:'100%', maxWidth:640, background:'#fff', borderRadius:24, boxShadow:'0 32px 80px rgba(0,0,0,0.2)', overflow:'hidden' }}>
        {/* Input */}
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'16px 24px', borderBottom:'1px solid #f3f4f6' }}>
          <svg width="18" height="18" fill="none" stroke="#2a9d8f" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
          <input ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar iPhone, color, almacenamiento..."
            style={{ flex:1, outline:'none', border:'none', fontSize:15, color:'#1a2332' }}/>
          {q && <button onClick={() => setQ('')} style={{ background:'none', border:'none', cursor:'pointer', color:'#9ca3af', display:'flex' }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>}
          <button onClick={onClose} style={{ fontSize:11, color:'#9ca3af', border:'1px solid #e5e7eb', borderRadius:8, padding:'3px 7px', background:'none', cursor:'pointer' }}>ESC</button>
        </div>

        {/* Results */}
        <div style={{ maxHeight:400, overflowY:'auto' }}>
          {!q.trim() ? (
            <div style={{ padding:24 }}>
              <p style={{ fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>Búsquedas populares</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {['iPhone 16 Pro','iPhone 15','iPhone 14','Azul','Negro','256GB'].map(s => (
                  <button key={s} onClick={() => setQ(s)}
                    style={{ padding:'6px 14px', borderRadius:12, fontSize:13, color:'#6b7280', border:'1px solid #e5e7eb', background:'none', cursor:'pointer', transition:'all 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='#2a9d8f'; (e.currentTarget as HTMLButtonElement).style.color='#2a9d8f'; (e.currentTarget as HTMLButtonElement).style.background='#e8f7f6'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.color='#6b7280'; (e.currentTarget as HTMLButtonElement).style.background='none'; }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding:'48px 24px', textAlign:'center', color:'#9ca3af' }}>
              <div style={{ fontSize:40, marginBottom:10 }}>🔍</div>
              <p style={{ fontWeight:600 }}>Sin resultados para "{q}"</p>
            </div>
          ) : (
            <div style={{ padding:12 }}>
              <p style={{ fontSize:12, color:'#9ca3af', padding:'4px 12px 8px' }}>{results.length} resultado{results.length !== 1 ? 's' : ''}</p>
              {results.map(p => {
                const msg = encodeURIComponent(`Hola! Me interesa el ${p.name} ${p.storage} ${p.color}`);
                return (
                  <a key={p.id} href={`https://wa.me/59892514774?text=${msg}`} target="_blank" rel="noopener noreferrer"
                    onClick={onClose}
                    style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 12px', borderRadius:16, textDecoration:'none', transition:'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background='#e8f7f6'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background='transparent'}>
                    <div style={{ width:56, height:56, borderRadius:14, background:'#f8fffe', overflow:'hidden', flexShrink:0 }}>
                      <img src={p.image} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'contain', padding:6 }}/>
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:600, color:'#1a2332', fontSize:14 }}>{p.name}</div>
                      <div style={{ fontSize:12, color:'#9ca3af' }}>{p.color} · {p.storage}</div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontWeight:700, color:'#2a9d8f', fontSize:14 }}>USD {p.price.toLocaleString()}</div>
                      {p.badge && <div style={{ fontSize:11, marginTop:2, color: p.badge==='Nuevo'?'#2a9d8f':'#ea580c' }}>{p.badge}</div>}
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
